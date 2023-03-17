import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet,TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
const RactionButton = ({ style = {},onPress=()=>{}}) => {

    return (
            <RectButton style={[styles.default, style]} onPress={onPress}>
                <MaterialIcons name="add" size={40} color="#fff" />
            </RectButton>

    )
};

const styles = StyleSheet.create({
    default: {
        backgroundColor: "#1B95E0",
        height: 58,
        width: 58,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 30,
        right: 20,
        elevation: 5
    }
})

export { RactionButton };

