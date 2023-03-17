import React from 'react';
import { Dimensions, Text, Platform, PixelRatio, Linking } from 'react-native';

const Rtext = ({ style = {}, normalizeFontSize = 0, fontSize = 14.5, lgFontSize = 0, smFontSize = 0, fontStyle = 'normal', children, color = "#353535", fontWeight = "normal", numberOfLines = 0, onPress = null }) => {

    const cusStyle = {
        fontStyle,
        color,
        fontSize: normalizeFontSize == 0 ? normalizeSize(fontSize, lgFontSize, smFontSize) : normalizeFontSize,
        fontWeight,
    }
    return (
        <Text onPress={onPress} style={{ ...styles.default, ...cusStyle, ...style, }} numberOfLines={numberOfLines} >
            {children}
        </Text>
    )
};

const styles = {
    default: {
        fontSize: 14,
    }
}

export { Rtext };


const {
    width: SCREEN_WIDTH,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export const normalizeSize = (size, lgSize = 0, smSize = 0) => {

    if (SCREEN_WIDTH >= 600)
        size = (lgSize != 0 ? lgSize : size) - 2;
    else if (SCREEN_WIDTH <= 330)
        size = (smSize != 0 ? smSize : size) - 1;

    const newSize = size * scale
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}

