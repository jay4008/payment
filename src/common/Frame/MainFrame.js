import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { FONTS , colors } from '../../../assets/comman/common';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
export default function Frame({ children }) {
    const {height , width} = Dimensions.get('window')
    return (
        <View >
            {/* <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[colors.white, colors.extraLightPink, colors.white,]} style={styles.linearGradient}> */}
                <View style = {{height : height , width : width }}>

                     <KeyboardAwareScrollView style = {{ padding : 10 ,}} keyboardShouldPersistTaps="handled">
                     {children}
                     <View style = {{paddingBottom : 200}}/>
                         </KeyboardAwareScrollView> 
            
                </View>
            {/* </LinearGradient> */}
        </View>
    )
}


var styles = StyleSheet.create({

    linearGradient: {
        height: "100%",
    
    },
});
