import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Rtext } from '../Rtext';


const ItemSearch = ({ children = null, itemLength = 0, searchTextLength = 0 }) => {


    return (
        <View style={styles.container}>
            <Ionicons name="md-search-sharp" color="gray" size={60}></Ionicons>
            {
                getTextContent(itemLength, searchTextLength)
            }

        </View>
    )
};

const getTextContent = (itemLength:number, searchTextLength:number) => {

    let text = "";
    if (searchTextLength == 0)
        text = "Type something to search";
    else if (searchTextLength == 1)
        text = "Please enter at leaset two charecters";
    else if (searchTextLength > 1 && itemLength == 0)
        text = "Sorry! No item found";
    else
        text = "Searching";

    return <Rtext color='gray'>{text}</Rtext>
}

const styles = StyleSheet.create({
    container: {
        marginTop: 150,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    default: {
    }
})

export { ItemSearch };

