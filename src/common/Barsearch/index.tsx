import React, { useState } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { Rtext } from '../Rtext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { normalizeSize } from '../../../utility/MyUtility';

const textFontSize = normalizeSize(13);
const Barsearch = ({ style = {}, title = '', onPress = () => { } }) => {

    const [lebel, setLebel] = useState('');
    const deviceHeight = Dimensions.get('window').height - 160;
    const barTextHeight = deviceHeight / 27;
    const getAlphabets = (onPress: any) => {
        let items = [];
    
        for (let i = 65; i < 91; i++) {
            items.push(
                <TouchableOpacity
                    onPressIn={()=>{onPress(String.fromCharCode(i)); setLebel(String.fromCharCode(i))}}
                    onPressOut={()=>{setTimeout(()=>{setLebel('')},200)}}
                    key={i}
                    style={[styles.textArea,{height: barTextHeight}]}>
                    <Rtext normalizeFontSize={textFontSize} color="#fff">{String.fromCharCode(i)}
                    </Rtext>
                </TouchableOpacity>
            );
        }
    
        return items;
    }
    
    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => onPress('#')}>
                    <Image style={styles.upImage}
                        source={require('../../../assets/icons/uparrow.png')}
                    />
                </TouchableOpacity>

                {
                    getAlphabets(onPress)
                }

            </View>
            {
                (lebel != '') &&
                <View style={styles.fltTxt}>
                    <Rtext fontSize={30} fontWeight="bold" style={styles.fltTxtCnt}>{lebel}</Rtext>
                </View>
            }
        </>
    )
};



const styles = StyleSheet.create({
    container: {
        width: 20,
        position: "absolute",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "rgba(27, 149, 224,0.7)",
        borderRadius: 10,
        bottom: "5%",
        right: "3%",
        paddingTop: 5,
        paddingBottom: 5
    },

    upImage: {
        width: 16,
        resizeMode: "contain"
    },

    textArea: {
        // height: `${100 / 27}%`,
        width: 20,
        // width: "90%",
        alignItems: "center"
    },
    fltTxt: {
        height: "100%",
        width: "100%",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center"
    },
    fltTxtCnt: {
        backgroundColor: "rgba(27, 149, 224,0.7)",
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10
    }
})

export { Barsearch };

