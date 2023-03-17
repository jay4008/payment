import React, { Component, useState } from "react";
import {
    Modal,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Dimensions
} from "react-native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { normalizeSize, openUrl } from "../../../utility/MyUtility";

const ModalAd = (props) => {
    const { modalVisible, setModalVisible,adContent } = props;
    const imageSize = {
        height: 1182,
        width: 756,
        ratio: 1182 / 756
    };

    const win = Dimensions.get('window');
    const resizedImageHeight = ((win.width * .82) * imageSize.ratio);
    const imageTopGap = ((win.height - resizedImageHeight) / 2 - normalizeSize(24));

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <TouchableOpacity style={[styles.modalView,{height: resizedImageHeight}]} onPress={()=>openUrl(adContent.redirect_url)} >

                    {/* <TouchableOpacity onPress={()=>openUrl(redirect_url)}> */}
                        <Image resizeMode="contain" style={styles.imgAd} source={{ uri: adContent.advertisement_image}} />
                    {/* </TouchableOpacity> */}


                    </TouchableOpacity>


                    <TouchableOpacity
                        style={[{ ...styles.closeButton }, { top: imageTopGap }]}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <MaterialCommunityIcons name="close" size={normalizeSize(20)} />
                    </TouchableOpacity>


                    <TouchableOpacity style={{
                        position: "absolute",width: "100%",height: "100%"}}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                        >
                    </TouchableOpacity>
                </View>

    
            </Modal>

        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        position: "relative",
        height: "100%",
        width: "100%",
        top: 0
       
    },
    modalView: {
        borderRadius: 5,
        alignItems: "center",
        height: "90%",
        width: "82%",
        justifyContent: "center",
        zIndex: 5

    },
    imgAd: {
        width: "100%",
        flex: 1
        //  height: normalizeSize(24),
        //  width: 100 
    },
    closeButton: {
        position: "absolute",
        right: "5%",
        backgroundColor: "#fff",
        height: normalizeSize(30),
        width: normalizeSize(30),
        borderRadius: normalizeSize(17),
        alignItems: "center",
        justifyContent: "center",
        elevation: 5,
        zIndex: 10
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default ModalAd;

