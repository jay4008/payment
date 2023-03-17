import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { FONTS, noData } from '../../../assets/comman/common'
import { Rtext } from '../Rtext'
export default function NoData({text = "Data" , cusTxt = ""}) {
    return (

        <View style={styles.container}>

            <Image style={styles.noData} source={{ uri: noData }} />
            {
                cusTxt === "" &&  <Rtext style={styles.noTxt}>No {text} found in your city</Rtext>
            }
          {
               cusTxt !== ""  && <Rtext style={styles.noTxt}>{cusTxt}</Rtext>
          }
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        marginTop : 100,
        height: 100,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    noData: {
        height: 60, width: 60, resizeMode: 'contain', alignSelf: 'center'
    },
    noTxt: {
        fontSize: 14,
        marginTop: 10,
        fontFamily: FONTS.LatoBlack,
        textAlign: 'center'
    },
})