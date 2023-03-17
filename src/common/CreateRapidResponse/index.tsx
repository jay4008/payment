import React from 'react';
import { StyleSheet, Modal, View, TouchableOpacity, Platform } from 'react-native';

import { Picker } from '@react-native-community/picker';
import { Ainput } from '../Ainput';
import { Rbutton } from '../Rbutton';
import { AttachmentBtn } from '../AttachmentBtn';
import DocumentPicker from 'react-native-document-picker';
import { request } from '../../../service/common';
import { FILE_ICONS } from '../../../config';
import { Attachments } from '../Attachments';
import { pick, debounce } from 'lodash';
import { showFlashMessage } from '../../../utility/MyUtility';

const allowedFilesToUpload = [DocumentPicker.types.images, DocumentPicker.types.plainText, DocumentPicker.types.pdf, DocumentPicker.types.zip, DocumentPicker.types.csv];

class CreateRapidResponse extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      rrBody: '',
      topic: '',
      files: [],
      loader: false,
      disableBtn: true
    };
  }

  componentDidUpdate(prevProps,prevState) {
    if((prevState.rrBody != this.state.rrBody) || (prevState.topic != this.state.topic) || (prevState.files != this.state.files)){
      this.deboulceValidate();
    }
  }

  

  validateRapidResponse = ()=>{
    const {rrBody,topic,files} = this.state;
    if(topic == '') {
      this.setState({disableBtn: true})
      return false;
    }
    else if(rrBody.trim() == '') {
      this.setState({disableBtn: true})
      return false;
    }
    else if(files.length > 0 && files.filter(x=>x.status == 'pending').length > 0 ){
      this.setState({disableBtn: true})
      return false;
    }

    this.setState({disableBtn: false});
    return true;
  }

  deboulceValidate = debounce(this.validateRapidResponse, 300);

  picFiles = async () => {
    const seFls: any = [...this.state.files];
    try {
      const results = await DocumentPicker.pickMultiple({
        type: allowedFilesToUpload
      });
      let fileIcon: string = '';
      for (const res of results) {
        let extension: string = res.name.split('.').pop() || 'default';
        fileIcon = FILE_ICONS[extension];
        let formData = { fileName: res.name, type: res.type, size:res.size, uri: res.uri, status: 'pending', fileIcon };
        seFls.push(formData);

        this.setState({ files: seFls })
        const pushedIndex = seFls.length - 1;
        setTimeout(() => {
          this.uploadFile(formData, pushedIndex);
        }, 1000)

      }

    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  }

  uploadFile = (formData: any, index: number) => {

    request('upload', '/rapid-response/fileUpload', formData)
      .then((response) => {
        return response.json();
      })
      .then(res => {
        // console.log('res',res);
        const upFiles: any = [...this.state.files];
        upFiles[index]['path'] = res.destination;
        upFiles[index]['status'] = 'completed';
        this.setState({ files: upFiles })

      }).catch((error) => {
        const upFiles: any = [...this.state.files];
        upFiles[index]['status'] = 'error';
        this.setState({ files: upFiles })
      });

  }

  cancelModal = () => {
    this.setState({
      rrBody: '',
      topic: '',
      files: []
    });
    this.props.onCancel();
  }

  createFormData = (file: any, realPath: string) => {
    const formData = new FormData();
    formData.append('file[]', { path: file.uri, type: file.type, name: file.name });
    return formData;
  };

  cancelFile =(index:number) => {
    const upFiles: any = [...this.state.files];
    upFiles[index]['status'] = 'cancelled';
    this.setState({ files: upFiles })
  }

  submitRapidResponse = async ()=> {

    if(!this.validateRapidResponse())
     return;

    this.setState({loader:true});
    const { rrBody,topic, files } = {...this.state};

    const filteredData = {
      topic,
      body: rrBody,
      attachments: this.getFilteredAttachments(files.filter(x=>['completed'].includes(x.status)))
    }

    try {
      
      let res = await request('post','rapid-response',filteredData);
      this.setState({loader:false});
      showFlashMessage('success','Rapid response created successfully','success');
      this.props.onCreateRapidResponse(res.data);
      this.cancelModal();
    }
    catch(e) {
      this.setState({loader:false});
    }

  }

  getFilteredAttachments = (files:any) => {
    const attachments:any = [];
    files.map((file,index)=>{
      file.name = file.fileName;
      file = pick(file,['name','type','path','size']);
      attachments.push(file)
    });
    
    return attachments;
  }

  render() {

    let { rrBody, topic, files,disableBtn,loader } = this.state;
    const { topicList } = this.props;

    let { visible = false, modalBackground = "rgba(17, 17, 17, 0.5)", cancelable = true } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          if (cancelable === true) {
            modalBackground = "rgba(17, 17, 17, 0)";
            this.cancelModal();
          }
        }}>


        <View style={[styles.centeredView, { backgroundColor: modalBackground }]}>
          <TouchableOpacity style={styles.upperArea} onPress={() => { this.cancelModal() }}>

          </TouchableOpacity>
          <View style={[styles.modalView]}>
            <View style={styles.topicsSelect}>
              <Picker
                selectedValue={topic}
                onValueChange={(itemValue, itemIndex) => this.setState({ topic: itemValue })}
              >
                <Picker.Item label="Choose Topic" value="" />
                {
                  topicList.map((topic:any,index:number)=>{
                    return <Picker.Item key={index} label={topic.name} value={topic.rapid_response_topic_id} />
                  })
                }
                
                {/* <Picker.Item label="JavaScript" value="js" /> */}
              </Picker>
            </View>
            <Ainput value={rrBody} onChangeText={(e:string)=>{this.setState({rrBody: e})}} style={styles.textArea} numberOfLines={10} placeholder='Enter your concern'></Ainput>

            <AttachmentBtn count={files.filter(x=>['pending','completed'].includes(x.status)).length} onPress={() => { this.picFiles() }}></AttachmentBtn>

            <Attachments attachments={files} onCancel={(index: number) => {this.cancelFile(index)}}></Attachments>
          </View>
          <Rbutton loader={loader} disabled={disableBtn} paddingV={15} style={styles.createBtn} onPress={()=>{this.submitRapidResponse()}}>Create Rapid Response</Rbutton>
        </View>

      </Modal>
    );
  }
}
const styles = StyleSheet.create({

  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  modalView: {
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 20,
    paddingTop: 30,
    // backgroundColor: "#E3EBF1",
    backgroundColor: "white",
    width: "100%",
    height: "75%"
  },
  textArea: {
    borderWidth: 0.5,
    borderBottomWidth: 0.5,
    textAlignVertical: "top",
    borderRadius: 4
  },
  topicsSelect: {
    borderWidth: 0.5,
    borderColor: "gray",
    marginBottom: 20,
    borderRadius: 4
  },


  createBtn: {
    borderRadius: 4,
    // position: "absolute",
    width: "100%",
    // top: 100,
    // zIndex: 9999999

  },
  upperArea: {
    height: "100%",
    width: "100%"
  }


});

export { CreateRapidResponse };

