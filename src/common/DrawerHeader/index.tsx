
import React from 'react';
import { View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { Avatar, Title, Caption, } from 'react-native-paper';
import * as config from '../config';
// import { CusButtom } from '../components/common/CusButtom';
import UserAvatar from 'react-native-user-avatar';
import { CusButtom } from '../CusButtom';
export const DrawerHeader = () => {
    return (


        <ImageBackground style={{

            paddingTop: 30,
            paddingBottom: 30,
            paddingLeft: 20,
            backgroundColor: "#fff",
        }}
            imageStyle={{ resizeMode: 'stretch' }}
            source={require('../../../assets/images/headerback.png')}

        >
            <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: "center", }}>
                    <TouchableOpacity
                        onPress={() => console.log("pressed ok ")}
                        style={{ height: 35, width: 35, marginRight: 10, }}>

                        <UserAvatar size={35} name="ko gh" />
                    </TouchableOpacity>
                    <View style={{ marginLeft: 0 }}>
                        <Title style={{
                            fontSize: 16,
                            marginTop: 1,
                            fontWeight: 'bold',
                            color: "#fff"
                        }}>jay shah</Title>
                        <Caption style={{
                            fontSize: 14,
                            lineHeight: 14,
                            color: "#fff"
                        }}>jayshah4005@gmail.com </Caption>
                    </View>
                </View>
                <CusButtom onpress={() => console.log("edit profile")
                } BTNstyle={{ padding: 5, paddingVertical: 5, alignItems: 'center', marginRight: 10, borderRadius: 5 }} ImgStyle={{ height: 15, width: 15, resizeMode: "stretch", tintColor: '#fff' }} image={true} source={require('../../../assets/icons/edit.png')}>
                </CusButtom>
            </View>
        </ImageBackground>

    )
}




