import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { colors } from '../../../../assets/comman/common';
// import colors from '../../../../styles/color';
import AmPmSwitcher from './AmPmSwitcher';
import {
  DEFAULT_TIME_VALUE,
  HOUR_HELPER_TEXT,
  HOUR_MINUTE_SEPARATOR_WIDTH,
  INPUT_SWITCHER_SEPARATOR_WIDTH,
  MINUTE_HELPER_TEXT,
  TEXT_INPUT_HEIGHT,
  TEXT_INPUT_WIDTH,
} from './constants';

const TimeInputUIComponent = (props) => {
  const {
    subTitle,
    hourRef,
    minuteRef,
    hourValue,
    minuteValue,
    is_selected_am,
    is_selected_pm,
    start_error_msg,
    end_error_msg,
    editMinuteInput,
  } = props;
  return (
    <View style={styles.timeInputContainer}>
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitleStyle}>{subTitle}</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.hourContainer}>
          <TimeTextInput
            refs={hourRef}
            value={hourValue}
            onChangeText={props.hourOnChangeText}
            editable={true}
          />
          <View>
            {start_error_msg.length > 0 && end_error_msg.length > 0 && (
              <Text style={styles.helperTextLabel}>{HOUR_HELPER_TEXT}</Text>
            )}
          </View>
        </View>
        <View style={styles.hoursAndMinutesSeparator}>
          <View style={styles.spaceDot} />
          <View style={styles.dot} />
          <View style={styles.betweenDot} />
          <View style={styles.dot} />
          <View style={styles.spaceDot} />
        </View>
        <View style={styles.hourContainer}>
          <TimeTextInput
            refs={minuteRef}
            value={minuteValue}
            onChangeText={props.minuteOnChangeText}
            editable={editMinuteInput}
          />
          {start_error_msg.length > 0 && end_error_msg.length > 0 && (
            <View>
              <Text style={styles.helperTextLabel}>{MINUTE_HELPER_TEXT}</Text>
            </View>
          )}
        </View>
        <View style={styles.spaceBetweenInputsAndSwitcher} />
        <AmPmSwitcher
          onPressAmButton={props.onPressAmButton}
          onPressPmButton={props.onPressPmButton}
          is_selected_am={is_selected_am}
          is_selected_pm={is_selected_pm}
          disabled={!parseInt(hourValue) > 0}
        />
      </View>
      {start_error_msg?.length > 0 && (
        <Text style={styles.errorLabelStyle}>{start_error_msg}</Text>
      )}
      {end_error_msg?.length > 0 && (
        <Text style={styles.errorLabelStyle}>{end_error_msg}</Text>
      )}
    </View>
  );
};

const TimeTextInput = (props) => {
  const { value } = props;
  return (
    <TextInputMask
      ref={props.refs}
      type={'only-numbers'}
      value={value}
      onChangeText={props.onChangeText}
      maxLength={2}
      editable={props.editable}
      style={styles.textInputStyle}
    />
  );
};

TimeInputUIComponent.propTypes = {
  subTitle: PropTypes.string,
  hourRef: PropTypes.any,
  minuteRef: PropTypes.any,
  hourValue: PropTypes.string,
  minuteValue: PropTypes.string,
  hourOnChangeText: PropTypes.func,
  minuteOnChangeText: PropTypes.func,
  onPressAmButton: PropTypes.func.isRequired,
  onPressPmButton: PropTypes.func.isRequired,
  is_selected_am: PropTypes.bool,
  is_selected_pm: PropTypes.bool,
  start_error_msg: PropTypes.string,
  end_error_msg: PropTypes.string,
  editMinuteInput: PropTypes.bool,
};

TimeInputUIComponent.defaultProps = {
  subTitle: '',
  hourValue: DEFAULT_TIME_VALUE,
  minuteValue: DEFAULT_TIME_VALUE,
  is_selected_am: false,
  is_selected_pm: false,
  start_error_msg: '',
  end_error_msg: '',
  editMinuteInput: true,
  hourOnChangeText: () => {
    console.log('hourOnChangeText');
  },
  minuteOnChangeText: () => {
    console.log('minuteOnChangeText');
  },
  onPressAmButton: () => {
    console.log('onPressAmButton');
  },
  onPressPmButton: () => {
    console.log('onPressPmButton');
  },
};

const styles = StyleSheet.create({
  spaceBetweenInputsAndSwitcher: {
    width: INPUT_SWITCHER_SEPARATOR_WIDTH,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingTop: 15,
  },
  hoursAndMinutesSeparator: {
    fontSize: 65,
    width: HOUR_MINUTE_SEPARATOR_WIDTH,
    alignItems: 'center',
    // backgroundColor:'red',
    height: TEXT_INPUT_HEIGHT,
  },
  spaceDot: {
    flex: 1,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.appPink,
  },
  betweenDot: {
    height: 12,
  },
  subTitleContainer: {},
  subTitleStyle: {
    fontSize: 18,
    color: colors.appPink,
  },
  hourContainer: {
    flexDirection: 'column',
    // backgroundColor: 'pink'
  },
  helperTextLabel: {
    color: colors.appPink,
    marginTop: 8,
    fontSize: 14,
  },
  errorLabelStyle: {
    color: colors.failurRed,
    marginTop: 8,
    fontSize: 12,
  },
  timeInputContainer: {
    marginTop: 25,
    // backgroundColor: 'orange'
  },
  textInputStyle: {
    fontSize: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    width: TEXT_INPUT_WIDTH,
    height: TEXT_INPUT_HEIGHT,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.silver,
    color: colors.appPink,
  },
});

export default TimeInputUIComponent;
