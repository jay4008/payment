import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { TEXT_INPUT_HEIGHT, AM_PM_SWITCHER_WIDTH, TIME_LABEL } from './constants';
import { colors } from '../../../../assets/comman/common';
// import colors from '../../../../styles/color';


const AmPmSwitcher = (props) => {
  const { is_selected_am, is_selected_pm, disabled } = props;
  return (
    <View style={styles.amPmContainer}>
      <SwitchButton
        label={TIME_LABEL.AM}
        onPress={props.onPressAmButton}
        is_selected={is_selected_am}
        disabled={disabled}
      />
      <View style={[styles.switchSeparator]} />
      <SwitchButton
        label={TIME_LABEL.PM}
        onPress={props.onPressPmButton}
        is_selected={is_selected_pm}
        disabled={disabled}
      />
    </View>
  );
};

const SwitchButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={props.disabled}
      style={[styles.switchButton, props.is_selected ?
        { backgroundColor:colors.silver } : {}]}
    >
      <View style={styles.switchButtonInner}>
        <Text style={[styles.amPmStyle, props.is_selected ? { color: colors.appPink} : {}]}>{props.label}</Text>
      </View>
    </TouchableOpacity>
  );
};

AmPmSwitcher.propTypes = {
  onPressAmButton: PropTypes.func.isRequired,
  onPressPmButton: PropTypes.func.isRequired,
  is_selected_am: PropTypes.bool,
  is_selected_pm: PropTypes.bool,
  disabled: PropTypes.bool
};

AmPmSwitcher.defaultProps = {
  is_selected_am: false,
  is_selected_pm: false,
  disabled: true,
  onPressAmButton: () => { console.log('onPressAmButton'); },
  onPressPmButton: () => { console.log('onPressPmButton'); }
};

const styles = StyleSheet.create({
  amPmContainer: {
    width: AM_PM_SWITCHER_WIDTH,
    height: TEXT_INPUT_HEIGHT,
    borderWidth: 2,
    overflow: 'hidden',
    borderColor: colors.silver,
    borderRadius: 5,
    // backgroundColor: 'pink'
  },
  switchSeparator: {
    height: 1,
    width: 48,
    backgroundColor:colors.appPink
  },
  switchButton: {
    flex: 1,
  },
  switchButtonInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  amPmStyle: {
    fontSize: 16,
    color: colors.blackProjectTxt,
    fontWeight: 'bold'
  }

});

export default AmPmSwitcher;