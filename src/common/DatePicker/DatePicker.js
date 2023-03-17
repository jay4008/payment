import moment from 'moment';
import React from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import Modal from 'react-native-modal';
import { colors, FONTS } from '../../../assets/comman/common';
import { Buttons } from './Buttons';
import { CusButtom } from '../CusButtom';
const { width, height } = Dimensions.get('window');
import * as Animatable from 'react-native-animatable';
const DatePickerr = ({
    modalVisble,
    onDateChange,
    selectedDate,
    BtnTxt,
    onSubmit,
    projectDate = false,
    isMentor = false,
}) => {

    let Today = new Date();
    return (
        <Modal
            isVisible={true}
            backdropOpacity={1}
            onBackdropPress={() => {
                modalVisble(false);
            }}
            backdropColor="#00000029"
        >
            <Animatable.View animation={'slideInUp'} duration={1000} style={styles.modalMainView}>
                <DatePicker
                    mode="date"
                    maximumDate={
                        moment(Today, moment.defaultFormat).toDate()
                    }
                    date={selectedDate}
                    androidVariant={Platform.OS === 'ios' ? 'iosClone' : 'nativeAndroid'}
                    onDateChange={onDateChange}
                    style={{ alignSelf: 'center' }}
                />
                <CusButtom onpress = {() =>  modalVisble(false)} BTNstyle={{ backgroundColor: colors.appPink }} text={BtnTxt} />
            </Animatable.View>
        </Modal>
    );
};

export default DatePickerr;

const styles = StyleSheet.create({
    modalMainView: {
        justifyContent: 'flex-start',
        backgroundColor: colors.white,
        width: width * 0.9,
        borderRadius: 5,
        padding: 20,
    },
    btnTxt: {
        fontSize: 20,
        alignItems: 'center',
        textAlign: 'center',
        color: colors.HeadingBlue,
        fontFamily: FONTS.LatoBold,
    },
    btnStyle: {
        padding: 10,
        borderWidth: 2,
        width: 150,
        alignSelf: 'center',
        borderRadius: 30,
        borderColor: colors.HeadingBlue,
    },
});
