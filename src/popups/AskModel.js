
import {
    View, SafeAreaView, FlatList, StyleSheet, TouchableOpacity, Image, Dimensions, Alert
} from "react-native";

import Modal from "react-native-modal";
import { Rtext } from "../common/Rtext";
import { CusButtom } from "../common/CusButtom";
import { colors, keyBoardType } from "../assets/common/Common";
import { Ainput } from "../common/Ainput";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get('window');
const AskMoney = ({ headerText = "", onPress, onpress1 = () => { }, onpress2 = () => { }, headerColor = colors.purple, desc = "", btnTxt1 = "", btnTxt2 = "", btnBackgroundColor = colors.purple }) => {

    const navigation = useNavigation()
    const [amount, setAmount] = useState("")

    return (
        <Modal isVisible={true} backdropColor="#00000029">
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10, }}>
                <View style={{ paddingVertical: 30, width: "100%", backgroundColor: colors.white, paddingHorizontal: 20, alignItems: 'center', borderRadius: 15 }}>
                    <Rtext style={{ color: colors.purple, fontWeight: 'bold', fontSize: 18, alignSelf: 'center', borderBottomWidth: 1, borderBottomColor: headerColor, marginBottom: 10, }}>{headerText}</Rtext>



                    <Ainput keyboardType={keyBoardType.numeric} value={amount} onChangeText={(val) => {
                        let newVal = val;
                        // newVal= newVal.replace('.', '');
                        newVal = newVal.replace(" ", "")

                        setAmount(newVal)
                        console.log("newVal", newVal)
                    }} placeholder={"Enter Amount"} heading={"Amount"} containerStyle={{ width: width * 0.7, borderRadius: 50 }} style={{ width: width * 0.7, borderRadius: 50 }} />

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <CusButtom onpress={() => {
                            navigation.navigate('QRCode')
                            onPress()
                        }} textStyle={{ fontSize: 12 }} BTNstyle={{ width: "90%", backgroundColor: btnBackgroundColor, borderRadius: 50 }} text={btnTxt1} ></CusButtom>

                        {
                            btnTxt2 !== "" && <CusButtom onpress={() => {
                                onpress2()
                            }} textStyle={{ fontSize: 12 }} BTNstyle={{ width: "49%", backgroundColor: btnBackgroundColor }} text={btnTxt2} ></CusButtom>
                        }

                    </View>

                    <TouchableOpacity onPress={onPress} style={{ position: 'absolute', top: -5, right: -5 }}>
                        <Image style={{ height: 20, width: 20, resizeMode: 'contain' }} source={{ uri: "https://pic.onlinewebfonts.com/svg/img_188125.png" }} />
                    </TouchableOpacity>
                </View>

            </View>
        </Modal>

    )
}

export default AskMoney;