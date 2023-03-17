import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Modal, Image, Dimensions, ScrollView, TouchableOpacity, Alert, PermissionsAndroid } from 'react-native'
import { colors } from '../assets/common/Common';
import { Ainput } from '../common/Ainput';
import { Rtext } from '../common/Rtext';
import { StatusBar } from 'expo-status-bar';
import { CusButtom } from '../common/CusButtom';
import AddMoney from '../popups/AddMoney';
import QRCode from 'react-native-qrcode-svg';
import AskMoney from '../popups/AskModel';
import { BarCodeScanner } from 'expo-barcode-scanner';
// import QRCodeScanner from 'react-native-qrcode-scanner';
// import { RNCamera } from 'react-native-camera';
// import { check, PERMISSIONS, RESULTS } from 'react-native-permissions';
const { height, width } = Dimensions.get('window')
export default function DashBoard() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [showScaningModel, setShowScaningModel] = useState(false);
    const [addModel, setAddModel] = useState(false);
    const [getMoneyModel, setGetMoneyModel] = useState(false);
    let paymentOptions = [
        {
            image: require('../assets/icon/bank.png'),
            name: "bank transfer"
        },
        {
            image: require('../assets/icon/hand.png'),
            name: "Pay bills"
        },
        {
            image: require('../assets/icon/pay.png'),
            name: "Pay contacts"
        },
        {
            image: require('../assets/icon/phone.png'),
            name: "pay phone number"
        },
        {
            image: require('../assets/icon/recharge.png'),
            name: "Mobile recharge"
        },
        {
            image: require('../assets/icon/scan.png'),
            name: "Scan QR Code"
        },
        {
            image: require('../assets/icon/self.png'),
            name: "Self Transection"
        },
        {
            image: require('../assets/icon/upi.png'),
            name: "Pay UPI ID or number"
        },

    ]

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setShowScaningModel(false)
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Ainput style={styles.searchInput} placeholder={"Pay now"} containerStyle={styles.searchInput} />
                <TouchableOpacity>
                    <Image style={styles.profileImg} source={require('../assets/icon/user.png')} />
                </TouchableOpacity>
            </View>


            <Image source={require('../assets/image/dash.png')} style={styles.img} />
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', alignSelf: 'center' }}>
                {
                    paymentOptions.map((item) => (
                        <TouchableOpacity style={{ width: width / 4 - 10, alignItems: 'center', height: 80, marginBottom: 10 }}>
                            <Image style={{ height: 30, width: 30, tintColor: colors.purple }} source={item.image} />
                            <Rtext style={{ marginTop: 5, fontSize: 12, width: 60, textAlign: 'center' }}>{item.name}</Rtext>
                        </TouchableOpacity>
                    ))
                }
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <View style={styles.moneyView}>
                    <Rtext style={styles.moneyHead}> Wallet Money : <Rtext>50 ₹</Rtext> </Rtext>
                </View>
                <CusButtom onpress={() => setAddModel(true)} textStyle={styles.textStyle} BTNstyle={styles.BTNstyle} text={'Add Money'} />
            </View>

            <CusButtom textStyle={styles.prevTxt} BTNstyle={styles.prevBtn} ImgStyle={styles.icon} source={require('../assets/icon/pay.png')} text={'Previous transections'} />
            <CusButtom textStyle={styles.prevTxt} BTNstyle={styles.prevBtn} ImgStyle={styles.icon} source={require('../assets/icon/bank.png')} text={'Check bank balance'} />
            <CusButtom onpress={() => setGetMoneyModel(true)} text={"Receive Money"} />
            <CusButtom onpress={() => setShowScaningModel(true)} text={"Send Money"} />
            {
                addModel && <AddMoney onpress1={() => {
                    Alert.alert(" Need to implement RBI thing");
                    setAddModel(false)
                }}
                    onpress2={() => {
                        Alert.alert(" Need to implement Bank thing");
                        setAddModel(false)
                    }}
                    onPress={() => setAddModel(false)}
                    headerText={"Add money to your wallet"} desc={"Please select a destination to add money to your wallet."} btnTxt1={"Add from RBI"} btnTxt2={"Add money from Bank"} />
            }
            {
                getMoneyModel && <AskMoney onPress={() => setGetMoneyModel(false)} headerText={"Receive Money"} desc={"Enter amount "} btnTxt1={"Generate QR for money for receving money"} />
            }


            {showScaningModel &&
                <Modal>
                    <BarCodeScanner
                        onBarCodeScanned={ handleBarCodeScanned}
                        style={{ height : height -100 , width : width}}
                    />
                    <CusButtom BTNstyle = {{width :"80%" , alignSelf :'center'}} text={'close'} onpress={() => setShowScaningModel(false)
                    } />
                </Modal>
            }


        </View>
    )
}


const styles = StyleSheet.create({
    Phone: {
        marginTop: 20
    },
    heading: {
        fontSize: 18,
        color: colors.black,
        fontWeight: '700',
        marginTop: 20
    },
    head2: {
        fontSize: 14,
        color: colors.black
    },
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: colors.white,
        paddingHorizontal: 20
    },
    searchInput: {
        width: 100, width: width - 90, borderRadius: 50
    },
    profileImg: {
        height: 45, width: 45, resizeMode: 'contain', marginTop: 15, borderRadius: 50, tintColor: colors.purple
    },
    img: {
        width: width - 30,
        height: 250,
        resizeMode: 'contain'
    },
    moneyView: {
        paddingVertical: 20, width: "60%", borderColor: colors.silver, borderWidth: 1, borderRadius: 10, alignItems: 'center', justifyContent: 'center'
    },
    moneyHead: {
        color: colors.purple, fontSize: 18
    },
    BTNstyle: {
        height: 70, marginTop: 0, width: 70, borderRadius: 70
    },
    textStyle: {
        textAlign: 'center'
    },
    icon: {
        height: 25, width: 25, marginRight: 20
    },
    prevBtn: {
        backgroundColor: colors.white,
        justifyContent: 'flex-start', marginTop: 0
    },
    prevTxt: {
        color: colors.black
    }
});
