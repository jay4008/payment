import React from 'react'
import { View, Text, StyleSheet ,Dimensions } from 'react-native'
import QRCode from 'react-native-qrcode-svg';
import { colors } from '../assets/common/Common';
import { CusButtom } from '../common/CusButtom';
import { Rtext } from '../common/Rtext';
const { height, width } = Dimensions.get('window')
export default function QrCode() {
    return (
        <View style = {{flex : 1}}>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <View style={styles.topView} >
                    <Rtext style={styles.walletTxt}>Send Rupee 500</Rtext>
                </View>
                <QRCode
                    size={250}
                    value="http://awesome.link.qr"
                />
            </View>

            <Rtext style = {styles.upi}>UPI ID : shahjay844@okhdfc ></Rtext>
            <Rtext style = {{...styles.upi , marginTop : 5}}>Scan this code to pay me</Rtext>
<View style = {{flexDirection :'row' , alignItems :'center' , justifyContent :'space-between' ,right :0, width : width, paddingHorizontal : 10, position :'absolute' , bottom : 0 , marginBottom : 20}}>
    <CusButtom textStyle = {styles.txt} BTNstyle = {styles.btnStyle} text = {"Open Scanner"} />
    <CusButtom textStyle = {styles.txt}  BTNstyle = {styles.btnStyle}  text = {"Copy UPI Id"} />
</View>
        </View>
    )
}


const styles = StyleSheet.create({
    topView: {
        backgroundColor: colors.white,
        width: 200,
        height: 40,
        marginBottom: 20,
        borderRadius: 8,
        borderColor: colors.silver,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt :{
        color : colors.purple
    },
    btnStyle:{
width : width/2 - 12 , 
borderRadius : 50 , 
borderColor : colors.purple , 
borderWidth :1,
backgroundColor : colors.white
    },
    walletTxt: {
        color: colors.purple,
        fontSize: 14,
        fontWeight: 'bold'
    },
    upi:{
        marginTop : 20,
        fontSize : 12 , 
        color : colors.black, 
        textAlign :'center'
    }
})