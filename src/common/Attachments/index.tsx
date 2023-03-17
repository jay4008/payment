import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Rtext } from '../Rtext';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ActivityIndicator } from 'react-native-paper';


const Attachments = (props: any) => {

    let { attachments,onCancel } = props;

        return (

            <View style={styles.container}>

                {
                    attachments.map((att: any, index: number) => {
                        return (
                            ['pending','completed'].includes(att.status) &&

                            <View style={styles.fileIconContainer} key={index}>
                                <Icon style={styles.fileIcon} name={att.fileIcon.name} color={att.fileIcon.color} size={50}></Icon>
                                {
                                    att.status == 'completed' ?

                                    <TouchableOpacity onPress={() => { onCancel(index) }}><Rtext fontSize={12} color="red">CLOSE</Rtext></TouchableOpacity>
                                    :
                                    
                                    <ActivityIndicator style={styles.loader} size="small"/>
                                }
                            </View>
                        )
                    })
                }


            </View>

        )
    };

    const styles = StyleSheet.create({
        container: {
            flexDirection: "row",
        },
        fileIcon: {

        },
        fileIconContainer: {
            marginRight: 20,
            alignItems: "center"
        },
        loader: {
            position:"absolute",
            top:18
        }

    });

    export { Attachments };