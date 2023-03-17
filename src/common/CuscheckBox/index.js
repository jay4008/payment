import React from 'react';
import { TouchableOpacity, ActivityIndicator, Image, View } from 'react-native';
import { Rtext } from '../Rtext';
import CheckBox from "@react-native-community/checkbox";
const CuscheckBox = ({
  onValueChange,
  CheckStyle,
  containerStyle,
  TextStyle, value, disabled = false, text = "", trueColor = '#4785ff' , falseColor  = '#fff'

}) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' ,...containerStyle }}>
      <CheckBox
        tintColors={{
          true: trueColor, false : falseColor
        }}
        disabled={disabled}
        value={value}
        style={{ ...CheckStyle }}
        onValueChange={onValueChange}
      />
      <Rtext
        style={{
          fontSize: 14,
          color: "#fff", ...TextStyle
        }}
      >
        {text}
  </Rtext>
    </View>
  );
};



export { CuscheckBox };
