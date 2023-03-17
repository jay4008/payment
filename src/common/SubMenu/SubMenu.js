import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Switch } from 'react-native-switch';
import { colors , FONTS } from '../../../assets/comman/common';
// import { FONTS } from '../constants';
// import colors from '../styles/color';

const SubMenu = ({
    title = "",
    subTitle= "",
    action ,
    showBottomSeparator=  false,
    showSwitch = false,
    switchAction ,
    switchValue = false}) => {
    return (
        <>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.container}
                onPress={() => {
                  action?.();
                }}
            >
                <View style={styles.contentWrapper}>
                    <View style={styles.textWrapper}>
                        <View
                            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
                        >
                            <Text style={styles.titleText} numberOfLines={1}>
                                {title}
                            </Text>
                            {showSwitch ? (
                                <View style={{ marginEnd: '7%', paddingVertical: 6 }}>
                                    <Switch
                                        value={switchValue}
                                        onValueChange={switchAction}
                                        circleSize={19}
                                        barHeight={22}
                                        circleBorderWidth={0}
                                        backgroundActive={colors.white}
                                        backgroundInactive={colors.white}
                                        circleActiveColor={colors.pinkish}
                                        circleInActiveColor={colors.HeadingBlue}
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
                                </View>
                            ) : null}
                        </View>

                        {subTitle ? (
                            <Text style={styles.subtext}>{subTitle}</Text>
                        ) : null}
                    </View>
                </View>

                {showBottomSeparator ? (
                    <View style={styles.fullSeparator} />
                ) : null}
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#EFEFEF',
        paddingVertical: 3,
    },
    contentWrapper: { flexDirection: 'row', alignItems: 'center', width: '100%' },

    textWrapper: {
        marginLeft: 15,
        width: '98%',
    },
    titleText: {
        fontSize: 17,
        fontFamily: FONTS.LatoMedium,
        color: colors.HeadingBlue,
        letterSpacing: -0.41,
        paddingVertical: 6,
    },

    fullSeparator: {
        height: 1.5,
        width: '92%',
        marginTop: '1%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: colors.SeparatorGrey,
    },

    subtext: {
        color: colors.TextSilver,
        fontSize: 12,
        textAlign: 'left',
        justifyContent: 'flex-start',
        marginBottom: '2%',
    },
});

export default SubMenu;
