import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Switch } from 'react-native-switch';
import { colors ,FONTS } from '../../../assets/comman/common';

const MenuItems = ({
    title= "",
    imagePath,
    action,
    hideIcon,
    showSwitch,
    switchAction,
    rightText,
    description,
    subText,
    height,
    imgHeight = 30,
    imgWidth= 30,
    isCancel,
    cancelAction,
    imagestyle
}) => {
    const [switchShow, setSwitch] = useState(false);

    const onSwitchChange = () => {
        setSwitch(!switchShow);
        // if(switchShow){
        // .switchAction?.();
        // }
    };

    return (
        <>
            <TouchableOpacity
                // activeOpacity={0.8}
                style={{ ...styles.container, height: height }}
                onPress={() => {
                    action?.();
                }}
            >
                <View style={styles.contentWrapper}>
                    <View style={styles.iconContainer}>
                        {imagePath ? (
                            <Image
                                style={{ height: imgHeight, width: imgWidth , tintColor : colors.appPink , ...imagestyle }}
                                source={imagePath}
                            />
                        ) : (
                            <View style={styles.iconPlaceholder} />
                        )}
                    </View>
                    <View style={styles.textWrapper}>
                        <Text style={styles.titleText} numberOfLines={1}>
                            {title}
                        </Text>
                        {subText && (
                            <Text style={styles.subText}>{subText}</Text>
                        )}
                    </View>
                    {rightText && (
                        <View>
                            <Text style={styles.rightText}>{rightText}</Text>
                        </View>
                    )}
                    {isCancel && (
                        <TouchableOpacity
                            style={{
                                width: 14,
                                height: 14,
                                borderRadius: 30,
                                backgroundColor: colors.appPink,
                            }}
                        >
                            <Text
                                style={{
                                    color: colors.white,
                                    fontSize: 10,
                                    textAlign: 'center',
                                    padding: 1,
                                }}
                            >
                                X
                            </Text>
                        </TouchableOpacity>
                    )}
                    {showSwitch && (
                        <Switch
                       
                            value={switchShow}
                            onValueChange={onSwitchChange}
                            circleSize={19}
                            barHeight={22}
                            circleBorderWidth={0}
                            backgroundActive={colors.silver}
                            backgroundInactive={colors.silver}
                            circleActiveColor={colors.appPink}
                            circleInActiveColor={colors.white}
                            changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                            innerCircleStyle={{
                                alignItems: 'center',
                                justifyContent: 'center',
                            }} // style for inner animated circle for what you (may) be rendering inside the circle
                            outerCircleStyle={{}} // style for outer animated circle
                            renderActiveText={false}
                            renderInActiveText={false}
                            switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                            switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                            switchWidthMultiplier={2} // multiplied by the `circleSize` prop to calculate total width of the Switch
                            switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
                        />
                    )}
                </View>
                {description && (
                    <View>
                        <Text style={styles.description}>{description}</Text>
                    </View>
                )}
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '98%',
        flexDirection: 'column',
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#ffffff',
        marginBottom: '1%',
        paddingRight : 30,
        marginHorizontal: '1%',
        borderRadius: 4,
        shadowColor: '#00000029',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 6,
        borderColor: '#00000029',
        borderWidth: 1,
    },
    contentWrapper: { flexDirection: 'row', alignItems: 'center', width: '100%' },
    iconContainer: {
        height: 28,
        width: 28,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconPlaceholder: {
        height: 28,
        width: 28,
        borderRadius: 5,
        backgroundColor: colors.silver,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textWrapper: {
        marginLeft: 15,
        width: '80%',
    },
    titleText: {
        fontSize: 16,
        fontFamily: FONTS.LatoSemibold,
        color: colors.silver,
        letterSpacing: -0.41,
    },
    itemImg: {
        height: 30,
        width: 30,
    },
    rightText: {
        fontSize: 14,
        color: colors.silver,
        paddingLeft: -50,
    },
    description: {
        color: colors.silver,
        fontSize: 12,
        textAlign: 'left',
        justifyContent: 'flex-start',
        marginLeft: '12%',
        paddingVertical: 5,
    },
    subText: {
        color: colors.silver,
        textAlign: 'left',
        fontFamily: FONTS.LatoSemibold,
        opacity: 1,
        fontSize: 10,
        paddingVertical: 5,
    },
});

export default MenuItems;
