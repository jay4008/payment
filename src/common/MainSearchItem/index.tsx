import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Rtext } from '../Rtext';
import { normalizeSize } from '../../../utility/MyUtility';
import { TouchableOpacity } from 'react-native-gesture-handler';


const SearchItem = ({ titleFontSize=14.5, style = {}, title = '',onPress=()=>{}, icon=require('../../../assets/icons/pill2.png')}) => {

    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Image style={styles.indiImage}
                source={icon}
            />

            <Rtext normalizeFontSize={titleFontSize} style={styles.itemText} numberOfLines={2}>{title}</Rtext>

        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginBottom: 10,
        backgroundColor: "#fff",
        padding: 13,
        paddingVertical: 14,
        paddingRight: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        height: 55,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1.5
    },
    
    indiImage: {
        height: normalizeSize(18),
        marginRight: 15,
        resizeMode: "contain",
        flex: 1
    },

    itemText: {
        flex:7
    }
})


const MainSearchItem= React.memo(
    SearchItem
  );
  
export {MainSearchItem};


