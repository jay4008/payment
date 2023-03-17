import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-paper';
import TimeAgo from 'react-native-timeago';
import HTML from 'react-native-render-html';
import { normalizeSize } from '../../../utility/MyUtility';

const classesStyles = { 
                        'heading': { fontWeight: 'bold' },
                        'highlight': { fontWeight: 'bold',color: 'blue'}
                    }
const Notification = ({style={},onPress = () => { }, read=false,data={}}) => {

    return (
        <TouchableOpacity style={[styles.container, style,{ backgroundColor: read === true ? "#fff" : "ivory"}]} onPress={()=>onPress(data.route)}>

             <Avatar.Text size={45} labelStyle={{fontSize: normalizeSize(15)}} label={getShortName(data.user_name)} />
            <View style={styles.mainContent}>
            <HTML html={data.body} containerStyle={styles.notiText} baseFontStyle={{fontSize: normalizeSize(15),fontFamily: 'Roboto'}} classesStyles={classesStyles}/>
            <TimeAgo time={data.created_date} />
            </View>

        </TouchableOpacity>
    )
};

const getShortName = (fullname:string)=>{
    if(fullname != '') {
        const splittedName = fullname.split(" ");
        let shortName = splittedName[1] ? (splittedName[0].charAt(0) + splittedName[1].charAt(0)) : splittedName[0].charAt(0);
        return shortName;

    }
    return 'U';
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        paddingVertical: 15,
        backgroundColor: "#fff",
        marginBottom: 13,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1.5
    },

    mainContent: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "space-between",
        alignItems: "flex-start",
        paddingLeft: 10
    },
    notiText: {
        marginBottom: 7
    }

})




export { Notification };

