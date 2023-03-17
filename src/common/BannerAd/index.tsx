import React, { memo } from 'react';
import { StyleSheet, Dimensions, Linking } from 'react-native';
import { Image } from 'react-native-animatable';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { openUrl } from '../../../utility/MyUtility';

const win = Dimensions.get('window');
const PureBannerAd = ({ adDetails = {}, style = {} }) => {

    const winWidth = win.width - 30; // 30 is static because of the padding
    const ratio = winWidth / adDetails.advertisement_image_width;
    const imageStyle = { width: winWidth, height: adDetails.advertisement_image_height * ratio };
    return (

        <TouchableOpacity onPress={()=>{openUrl(adDetails.redirect_url)}}>
            <Image
                style={[styles.container, imageStyle, style]}
                source={{ uri: adDetails.advertisement_image }}
            />
        </TouchableOpacity>

    )
};

const styles = StyleSheet.create({
    container: {
        resizeMode: 'contain',
        borderRadius: 5,
        marginBottom: 0,
    },
    default: {
    }
})

const BannerAd = memo(
    PureBannerAd
);
export { BannerAd };

