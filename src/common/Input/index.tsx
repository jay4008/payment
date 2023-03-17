import React from 'react';
import { View, TextInput,StyleSheet,TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { normalizeSize } from '../../../utility/MyUtility';

const Input = ({value='', onChangeText=()=>{},autoFocus=false, onFocus=()=>{}, placeholder='', secureTextEntry=false, border="#1B95E0", style={}, search=false}) => {


    return(
        <View style={[styles.containerStyle,style]}>
            <TextInput
                defaultValue={value}
                onChangeText = { onChangeText }
                onFocus = {onFocus}
                autoFocus= {autoFocus}
                style={[styles.inputStyle, {borderColor:border, paddingRight: search ? 20 : 15}] }
                autoCorrect={ false }
                placeholder = { placeholder }
                secureTextEntry = { secureTextEntry }
            /> 
            {
                search ?
                <TouchableOpacity style={styles.searchIcon}>
                    <Ionicons name="ios-search" color="gray" size={26}></Ionicons>
                </TouchableOpacity>
                : null
            }
        </View>
    )
};

const styles =  StyleSheet.create({

    containerStyle: {
        flexDirection: 'column',
        marginBottom:25
    },
    inputStyle: {
        paddingVertical: normalizeSize(8),
        paddingHorizontal:15,
        // height: normalizeSize(38),
        fontSize: 17,
        borderRadius:10,
        lineHeight: 20,
        color: 'black',
        borderWidth: 1,
        backgroundColor: "#fff"
    },
    searchIcon: {
        position: "absolute",
        right:normalizeSize(13),
        top: normalizeSize(9,12,10)
    }

});

export {Input};

