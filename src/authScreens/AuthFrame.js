import React from 'react'
import { View, Text, StyleSheet ,Image ,SafeAreaView ,Dimensions } from 'react-native'
import { colors } from '../assets/common/Common'
const { height, width } = Dimensions.get('window')
export default function AuthFrame({ children , imageUri }) {
    return (
        <SafeAreaView style={styles.container}>
               <Image source = {imageUri} style = {styles.img} />
            {
                children
            }
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        padding : 10,
        height: height,
        width: width,
        backgroundColor: colors.white, 
        alignItems :'center',
        justifyContent :'center'
        
    },
    img :{
        marginTop : 20,
        width : width - 30 , 
        height  : 250 , 
        resizeMode :'contain'
    }
})