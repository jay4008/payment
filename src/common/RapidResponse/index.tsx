import React from 'react';
import { StyleSheet } from 'react-native'
import { View } from "react-native-animatable";
import { Rtext } from "../Rtext";
import { normalizeSize } from '../../../utility/MyUtility';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Moment from 'moment';

const RapidResponse = ({ id = 0, date= '',type = "OPEN",body='', onPress = () => { } }) => {
    // RapidResponseListDetails
    const dateToFormat = '1976-04-19T12:59-0500';
    return (
        <TouchableOpacity style={styles.responseBox} onPress={onPress}>
            <View style={styles.responseBoxUpper}>
                <View style={styles.responseIdBlock}>
                    <Rtext color="#1B95E0" fontSize={13}>ID: {id}</Rtext>
                    {/* <Rtext style={{ marginTop: 3 }} fontSize={13} color="#818181">12 June 2020 | 10:43 pm</Rtext> */}
                    <Rtext style={{ marginTop: 3 }} fontSize={13} color="#818181">{Moment(date).format('DD MMM YYYY | hh:mm A')}</Rtext>
                    
                </View>
                <View>
                    <ResponseLbl type={type}></ResponseLbl>

                </View>

            </View>

            <View style={styles.responseBoxLower}>
                <Rtext numberOfLines={1} color="#818181" fontSize={15.5}>
                    {body}
                </Rtext>
            </View>
        </TouchableOpacity>
    );

}

const ResponseLbl = ({ type }) => {
    let bgColor = "#19CF86";
    if (type == "PENDING")
        bgColor = "#FF8080";
    else if (type == "RESOLVED")
        bgColor = "#65AFFF";

    return (
        <View style={[styles.responseLbl, { backgroundColor: bgColor }]}>
            <Rtext color="#fff" fontSize={12} fontWeight="bold" >{type}</Rtext>
        </View>
    )
}

const styles = StyleSheet.create({

    responseBox: {

        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginBottom: 15,
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 6,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1.5
    },

    responseBoxUpper: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start"

    },
    responseLbl: {
        width: normalizeSize(60),
        height: normalizeSize(20),
        // paddingHorizontal:8,
        // borderRadius:5,
        alignItems: "center",
        paddingBottom: normalizeSize(3.3),
        justifyContent: "center"
    },
    responseIdBlock: {
        justifyContent: "space-between",
    },
    responseBoxLower: {
        marginTop: 10
    }

})


export { RapidResponse }
