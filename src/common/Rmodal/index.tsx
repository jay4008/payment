

import React from 'react';
import { View,StyleSheet,Modal } from 'react-native';


const Rmodal = ({visible=false,background="white",modalBackground= "rgba(17, 17, 17, 0.5)",children,onCancel=()=>{},cancelable=true}) => {


    modalBackground = cancelable === true ? modalBackground : "rgba(17, 17, 17, 0.75)";
    return(
        <Modal
              animationType="slide"
              transparent={true}
              visible={visible}
              onRequestClose={() => {
                // Alert.alert("Modal has been closed.");
                if(cancelable === true)
                      onCancel();
              }}>
          <View style={[styles.centeredView,{backgroundColor:modalBackground}]}>
            <View style={[styles.modalView, { backgroundColor: background}]}>
                  {children}
            </View>
          </View>
        </Modal>
    )
};

const styles =  StyleSheet.create({

    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        // marginTop: 22,
      },
      modalView: {
        // margin: 20,
        // borderColor: "white",
        // borderWidth:0.2,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        padding: 20,
        width: "100%",
        height: "50%",
        // alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },

});

export {Rmodal};

