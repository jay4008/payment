import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, Alert } from 'react-native'
import { moneyArray } from '../assets/common/Common'
const { height, width } = Dimensions.get('window');
import { Rtext } from '../common/Rtext';
import { CusButtom } from '../common/CusButtom';
import { useNavigation } from '@react-navigation/core';
export default function SendMoney() {

    const navigation = useNavigation();
    const [selectedNote, setSelectedNote] = useState([
        {
            value: 2,
            selectedVal: 0,
        },
        {
            value: 5,
            selectedVal: 0,
        },
        {
            value: 10,
            selectedVal: 0,
        },
        {
            value: 20,
            selectedVal: 0,
        },
        {
            value: 50,
            selectedVal: 0,
        },
        {
            value: 100,
            selectedVal: 0,
        }
        ,
        {
            value: 200,
            selectedVal: 0,
        },
        {
            value: 500,
            selectedVal: 0,
        },
        {
            value: 2000,
            selectedVal: 0,
        }
    ])



    const returnVal = (val) => {


        let data = selectedNote.filter((item) => item.value === val)


        return data[0].selectedVal
    }


    const AddOrRemoveNote = (val, type = "", selectedValue = 0) => {
        if (type === "minus") {
            if (selectedValue === 0) {
                Alert.alert("Cant remove note the value is 0 currently. please add instead")
                return
            }
        }
        let newSelectedArr = [...selectedNote];
        let updatedValue = newSelectedArr.map((item) => {
            if (item.value === val) {
                return {
                    value: item.value,
                    selectedVal: item.selectedVal + (type === "plus" ? + 1 : -1),
                }
            } else {
                return item
            }
        })
        setSelectedNote(updatedValue)
    }

    const totalMoneyCal = () => {
        let totalMoney = 0;

        for (let index = 0; index < selectedNote.length; index++) {
            const element = selectedNote[index];
            totalMoney = element.selectedVal * element.value + totalMoney
        }

        return totalMoney
    }



    
    return (

        <ScrollView >
            <Rtext style={{ fontSize: 18, paddingHorizontal: 20 }}>Please select the design note and coin</Rtext>
            <Rtext style={{ fontSize: 25, paddingHorizontal: 20, alignSelf: 'center' }} > Total Money to send: {totalMoneyCal()} </Rtext>
            <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', alignSelf: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                {
                    moneyArray.map((item, index) => (

                        <View style={{ width: width / 3 - 14, alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                            <Image style={{ height: 130, width: "80%", resizeMode: 'stretch' }} source={item.image} />
                            <Rtext style={{ marginTop: 10 }}>{item.value}</Rtext>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => AddOrRemoveNote(item.value, "minus", returnVal(item.value))} >
                                    <Image style={{ height: 35, width: 35, resizeMode: 'contain' }} source={require('../assets/moneyicons/min.png')} />
                                </TouchableOpacity>
                                <Rtext style={{ width: 30, textAlign: 'center' }}> {returnVal(item.value)} </Rtext>
                                <TouchableOpacity onPress={() => AddOrRemoveNote(item.value, "plus")}>
                                    <Image style={{ height: 35, width: 35, resizeMode: 'contain' }} source={require('../assets/moneyicons/pl.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))
                }


            </View>
            <CusButtom onpress={() => {


                if (totalMoneyCal() === 0) {
                    alert("Please add notes to send");
                    return
                }
                navigation.navigate('QRCode', { money: totalMoneyCal() , currencyNotes :selectedNote.filter((item) => item.selectedVal !==0)  })

            }} BTNstyle={{ width: "80%", alignSelf: 'center', borderRadius: 50 }} text={'Send ' + totalMoneyCal() + " ₹"} />
        </ScrollView>

    )
}
