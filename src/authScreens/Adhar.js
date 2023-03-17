import React from 'react'
import { View, Text  ,StyleSheet} from 'react-native'
import { Rtext } from '../common/Rtext';
import { Ainput } from '../common/Ainput'
import AuthFrame from './AuthFrame'
import { colors } from '../assets/common/Common';
import { CusButtom } from '../common/CusButtom';
import { useNavigation } from '@react-navigation/native';
export default function Adhar() {
    const navigation = useNavigation()
    return (
       <AuthFrame imageUri = {require('../assets/image/adhar.png')}>
       <View style = {{marginHorizontal : 20 , width :"90%"}}>
            <Rtext style = {styles.heading}>KYC informations</Rtext>
            <Rtext style = {styles.head2}>Pay using UPI,Wallet, Bank Accounts and Cards</Rtext>
            <View style = {styles.Phone}>
            <Ainput placeholder ={"Adhar Number"} value = {""} heading = {"Adhar No"} />
            </View>
            <CusButtom onpress = {() => navigation.navigate('DashBoard')} text ={'proceed'} />
            </View>
       </AuthFrame>
    )
}

const styles = StyleSheet.create({
    Phone :{
     marginTop : 20
    },
    heading:{
       fontSize : 18 , 
       color : colors.black, 
       fontWeight : '700' ,
       marginTop : 20    },
       head2:{
           fontSize : 14 , 
           color :colors.black
       }
  });