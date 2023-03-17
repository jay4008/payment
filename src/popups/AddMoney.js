
import {
    View, SafeAreaView, FlatList, StyleSheet, TouchableOpacity, Image, Dimensions, Alert
} from "react-native";

import Modal from "react-native-modal";
import { Rtext  } from "../common/Rtext";
import { CusButtom } from "../common/CusButtom";
import { colors } from "../assets/common/Common";


const { width } = Dimensions.get('window');
const AddMoney = ({ headerText = "",onPress , onpress1 = () => { }, onpress2 = () => { }, headerColor = colors.purple, desc = "", btnTxt1 = "", btnTxt2 = "", btnBackgroundColor = colors.purple }) => {




    return (
        <Modal isVisible={true} backdropColor="#00000029">
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10, }}>
                <View style={{ paddingVertical: 30, width: "100%", backgroundColor: colors.white, paddingHorizontal: 20, alignItems: 'center', borderRadius: 15 }}>
                    <Rtext style={{ color: colors.purple, fontWeight: 'bold', fontSize: 18, alignSelf: 'center', borderBottomWidth: 1, borderBottomColor: headerColor, marginBottom: 10, }}>{headerText}</Rtext>

                    <Rtext style={{ color: colors.silver, paddingVertical: 1, textAlign: 'center' }}>{desc}</Rtext>
                    <View>

              
                    <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent :'space-between'  }}>
                        <CusButtom onpress={() => {
                            // dispatch(messagePopUpClose())
                            onpress1()
                        }} textStyle = {{fontSize : 12}} BTNstyle={{ width: "48%", backgroundColor: btnBackgroundColor }} text={btnTxt1} ></CusButtom>

                        {
                            btnTxt2 !== "" && <CusButtom onpress={() => {
                                // dispatch(messagePopUpClose())
                                onpress2()
                            }}  textStyle = {{fontSize : 12}} BTNstyle={{ width: "49%", backgroundColor: btnBackgroundColor }} text={btnTxt2} ></CusButtom>
                        }

                    </View>
                    </View>
                    <TouchableOpacity onPress = {onPress} style = {{ position :'absolute' , top : -5, right : -5}}>
                    <Image style = {{height : 20 , width : 20 , resizeMode :'contain'}}  source = {{uri :"https://pic.onlinewebfonts.com/svg/img_188125.png"}} />
                </TouchableOpacity>
                </View>
           
            </View>
        </Modal>

    )
}

export default AddMoney;