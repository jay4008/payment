import React from 'react';
import {TouchableOpacity, View,StyleSheet,Image} from 'react-native';
import { Rtext } from '../Rtext';
import { normalizeSize, openUrl } from '../../../utility/MyUtility';
import Moment from 'moment';


const News = ({style={},title='',time='',imageUrl='',newsUrl='https://google.com'}) => {

    return(
        <TouchableOpacity style={[styles.container,style]} onPress={()=>{openUrl(newsUrl)}}>
            <Image    style={styles.newsImage}
                      source={{uri: imageUrl}}
            />
            <View style={styles.newsContainer}>
                <Rtext fontSize={14} style={{flexWrap: 'wrap',lineHeight: normalizeSize(18)}} numberOfLines={2}>{title}</Rtext>
                <View style={styles.newsTextContainer}>
                   <Rtext fontSize={13} style={styles.newsTime}>{Moment(time).format('DD MMM YYYY | hh:mm A')}</Rtext>
                </View>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
      container: {
        flexDirection: "row",
        height: normalizeSize(70,60),
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 24
        
      },
      newsImage: {
        width: normalizeSize(100,90), 
        height: normalizeSize(70,60),
        borderRadius: 5,
        flex:2,
        borderWidth: 0.2,
        borderColor: "gray"

      },
      newsContainer: {
        flex:4,
        paddingLeft: 12,
        height:"100%",
        justifyContent: "space-between",
        // alignItems: "",
      
      },

      newsTextContainer: {
        paddingBottom:6,
        borderBottomWidth: 1,
        borderColor: "#C4C4C4"
      },
      newsTime: {

          color:"#818181",
         
      }
})

export {News};

