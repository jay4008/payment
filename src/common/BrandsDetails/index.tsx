import React from 'react';
import { TouchableOpacity, View, StyleSheet, Image, Text } from 'react-native';
import { Rtext } from '../Rtext';
import { normalizeSize } from '../../../utility/MyUtility';
import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';

const accodionDataFormat = [
    'description','indications','precautions_and_warnings','reconstitution','dosage_and_administration', 'pharmacology',
    'overdose_effects', 'side_effects', 'contraindications', 'interaction',
    'pregrnancy_and_lactation', 'storage_conditions', 'use_in_special_population','also_available_as'
];



const BrandsDetails = ({ style = {}, title = '', onPress = () => { }, data = {}, icon = require('../../../assets/icons/pill2.png') }) => {

    const [activeSections, setActiveSections] = React.useState([0]);

    const accordionContent = formatAccordionFields(data);

    const _renderHeader = (section, index, isActive) => {
        const arrow = isActive ? "keyboard-arrow-down" : "keyboard-arrow-left";
        return (
            <View style={styles.accHeader}>
                <Rtext fontSize={15.5}>{section.title}</Rtext>
                <Icon name={arrow} size={20}></Icon>
            </View>
        );
    };

    const _renderContent = (section, index, isActive) => {
        return (
            <View
                style={styles.accContent}>
                <Rtext color="#818181">{section.content}</Rtext>
            </View>
        );
    };

    const _updateSections = (activeSections) => {
        setActiveSections(activeSections);
    };

    return (

        <ScrollView>
            <TouchableOpacity style={[styles.container, style]} onPress={onPress}>


                <Image style={[styles.indiImage, { height: normalizeSize(33) }]}
                    source={{ uri: data.type.icon_white }}
                />

                <View style={styles.mainContent}>

                        <View style={styles.mainContentTop}>
                            <Rtext fontSize={22} color="#FFFFFF">{data.name}</Rtext>
                            <Rtext fontSize={13} color="#FFFFFF">{data.strength}</Rtext>
                        </View>
                        <Rtext fontSize={13} color="#FFFFFF" style={{ marginBottom: 10 }}>{data.type.type_name}</Rtext>
                        <Rtext color="#FFFFFF">{data.pherma.company_name}</Rtext>
                        <Rtext fontSize={13} color="#FFFFFF">{data.group.group_name}</Rtext>


                </View>


            </TouchableOpacity>



            <Accordion
                sections={accordionContent}
                activeSections={activeSections}
                // renderSectionTitle={_renderSectionTitle}
                renderHeader={_renderHeader}
                renderContent={_renderContent}
                onChange={_updateSections}
                sectionContainerStyle={{
                    backgroundColor: "#fff", marginBottom: 10, borderRadius: 10, paddingVertical: 12,
                    paddingHorizontal: 20
                }}
                containerStyle={{ marginBottom: 15 }}
                touchableComponent={TouchableOpacity}
            />
        </ScrollView>
    )
};


const formatAccordionFields = (data) => {
    let aData: any = [];
    accodionDataFormat.map(value => {
        if (data['group'][value] != '') {
            aData.push({
                title: toTitleCase(value),
                content: data['group'][value]
            });
        }
    })

    return aData;
}

const toTitleCase = (str) => {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    ).replace(/_/g, " ");;
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginBottom: 10,
        backgroundColor: "#1B95E0",
        padding: 20,
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
        // flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flex: 8
    },

    mainContentTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    },

    indiImage: {
        marginRight: 15,
        resizeMode: "contain",
        flex: 1,
        marginTop: normalizeSize(8)
    },

    accHeader: {
        // paddingVertical: 10,
        // paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    accContent: {
        borderTopColor: "#b1b1ee",
        borderTopWidth: 1,
        paddingTop: 10,
        marginTop: 10,
        marginBottom: 10
    }
})

export { BrandsDetails };

