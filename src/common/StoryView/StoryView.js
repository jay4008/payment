import React, { useEffect } from 'react'
import { useState } from 'react';
import { View, Text, Alert, Dimensions, TouchableOpacity, Modal, Image } from 'react-native'
import { StoryContainer } from 'react-native-stories-view'
import { useSelector } from 'react-redux';
import { colors } from '../../../assets/comman/common';
import { request } from '../../../utility/common';
import { baseUrl } from '../../../utility/MyUtility';
export default function StoryView({ storyViewArr, userData , descArr, userName = "", setShowModel, index = 0 }) {
    const [newIndex, setIndex] = useState(index);
    const auth = useSelector(state => state.auth)
    console.log("userData========>>>" , userData ,{
        _id : userData._id , 
        url : storyViewArr[index],
        userId :auth.userData._id
    })

    const userSeen = (index)=>{
        request('post', baseUrl +'/UserSeen', {

            _id : userData._id , 
            url : storyViewArr[index],
            userId :auth.userData._id
        }).then((res) =>{
            console.log("result=====>>>>" , res);

        }).catch(() =>{

        })
    }
    useEffect(() => {

console.log("storyViewArr[index]",storyViewArr[index] , newIndex)
        setIndex(index);
        userSeen(index)
    }, [index])
    return (
        <View>
            <Modal >
                <StoryContainer
                    imageStyle={{
                        width: Dimensions.get("window").width,
                        height: Dimensions.get("window").height,
                        alignSelf: "center",
                        resizeMode: "contain",
                    }}
                    visible={true}
                    setInitialIndex={index}
                    enableProgress={true}
                    images={[...storyViewArr]}
                    duration={100}
                    onChangeIndex
                    onComplete={() => setShowModel(false)}
                    onChangeIndex={(index) => {
                        console.log("index", index);
                        userSeen(index);
                        setIndex(index)}}
                    // onChange= {(change) => console.log("change",change)}
                    userProfile={{
                        // userImage: "https://res.cloudinary.com/dzakvcgsx/image/upload/v1674984030/kq0ocv4lhv7itlrzwh0g.jpg",
                        userName:userName,
                        userMessage: descArr[newIndex],
                        //   imageArrow: BACK,
                        onImageClick: () => {
                            console.log('lskndclksnc');
                            Alert.alert('User profile image tapped');
                        },
                    }}
                // footerComponent={<View>
                //     <Rtext style={{ fontSize: 18, fontWeight: FONTS.LatoSemibold, color: colors.white, paddingHorizontal: 20 }}>ksfkjshdjhsakjdhkjashdkjhaskjdhaskjhdkash sahdjksahdjhas ajkshdkjashdkjh asfkjhkjf sdfdjshfjkshdf sdjkfhjkdshf dsfhskjdhf dsfhjksdhfjksd sdhfkjsdhkjf sdjfhjksdhf sdjkfhkjsdhf jkhfkjsdhjfh jhsjkdfhjksdf jkhfjkshdjfh</Rtext>
                // </View>}
                />
                <TouchableOpacity style={{
                    tintColor: colors.black,
                    position: 'absolute',
                    top: 35, right: 20
                }} onPress={() => { setShowModel(false) }}>
                    <Image style={{ height: 40, width: 30, resizeMode: 'contain', tintColor: colors.black }} source={require('../../../assets/icon/cancel.png')} />
                </TouchableOpacity>
            </Modal>
        </View>
    )
}
