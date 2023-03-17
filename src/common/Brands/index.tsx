import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Rtext } from '../Rtext';
import { normalizeSize } from '../../../utility/MyUtility';
import { TouchableOpacity } from 'react-native-gesture-handler';


const MainBrand = ({ style = {}, title = '', onPress = () => { }, data = {}, icon = require('../../../assets/icons/pill2.png') }) => {

    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <View style={styles.brandImgCont}>
                <Image style={[styles.indiImage, { height: normalizeSize(24), width: 30 }]}
                    source={{ uri: data.type.icon_blue }}
                />
            </View>
            <View style={styles.mainContent}>
                <View style={styles.mainContentTop}>
                    <Rtext fontSize={16.5}>{data.name}</Rtext>
                    <Rtext color="#818181" fontSize={13.5}>{data.strength}</Rtext>
                </View>
                <Rtext style={{ marginBottom: 10 }} color="#818181" fontSize={13}>{data.type.type_name}</Rtext>
                <Rtext fontSize={13}>{data.pherma.company_name}</Rtext>
                <Rtext color="#818181" fontSize={13}>{data.group.group_name || ''}</Rtext>

                
            </View>

        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginBottom: 10,
        backgroundColor: "#fff",
        padding: 15,
        paddingRight: 25,
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
        justifyContent: "space-between",
        alignItems: "flex-start",
        flex: 6
    },
    mainContentTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    },
    brandImgCont: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingTop: 10
    },
    indiImage: {
        marginRight: 15,
        resizeMode: "contain",
        // flex: 1
    }
})

const Brands= React.memo(
    MainBrand
  );
  

export { Brands };

