import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { colors, FONTS } from '../../../assets/comman/common'
import { Rtext } from '../Rtext'
import { Rating, AirbnbRating } from 'react-native-ratings';

export default function Avtar({ uri = "", onPress , ratingStart =0,ratingPeople = 40, name = "", email = ""  , rating = 0}) {
    return (
        <View>
            <View style={styles.userView}>
                <TouchableOpacity onPress = {onPress}>
                <Image style={styles.avtarImg} source={{ uri: uri }} />
                </TouchableOpacity>
           
                <View style={{ marginLeft: 10 }}>
                    <Rtext style={styles.name}>{name}</Rtext>
                    <Rtext style={{ color: colors.silver, fontSize: 14 }}>{email}</Rtext>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <Rating

                            ratingColor='#3498db'
                            ratingBackgroundColor='#c8c7c8'
                            ratingCount={5}
                            imageSize={15}
                            startingValue={ratingStart}
                            readonly={true}
                            // onFinishRating={this.ratingCompleted}
                            style={{ paddingVertical: 7 }}
                        />
                        <Rtext style={styles.ratingCount}>({ratingPeople})</Rtext>
                    </View>
                </View>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    userView: {
        backgroundColor: colors.white,
        marginTop: 10, padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    avtarImg: {
        height: 60, width: 60, resizeMode: 'contain', borderRadius: 50
    },
    name: {
        fontSize: 20, fontFamily: FONTS.LatoSemibold
    },
    ratingCount: {
        fontSize: 14,
        marginLeft: 10, color: colors.silver
    },
})
