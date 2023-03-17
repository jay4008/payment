import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
} from 'react-native';
import { colors } from '../../assets/common/Common';
// import { colors, FONTS } from '../../../assets/comman/common';
const winHeight = Dimensions.get('window').height
import { Rtext } from '../Rtext';
const Ainput = ({
  value,
  onChangeText = () => { },
  multiline = false,
  onBlur = () => { },
  containerStyle,
  placeholder = '',
  numberOfLines = 1,
  secureTextEntry = false,
  editable = true,
  style = {},
  onFocus,
  image = false,
  eye = false,
  heading = "",
  source, keyboardType = 'default', search = false
}) => {

  const [lcSecureTextEntry, setLcSecureTextEntry] = useState(secureTextEntry);
  return (
    <View >
      <View style={{ ...styles.containerStyle, ...containerStyle }}>
        {image && (
          <TouchableOpacity
            style={styles.searchIcon}
            onPress={() => {
              setLcSecureTextEntry(!lcSecureTextEntry);
            }}>

            <Image
              style={{ height: 20, width: 20, resizeMode: 'stretch' }}
              source={source}
            />
          </TouchableOpacity>
        )}

        <TextInput
          onFocus={onFocus}
          value={value}
          onChangeText={onChangeText}
          style={editable ? (image ? { ...styles.inputStyle, paddingLeft: 35, ...style } : { ...styles.inputStyle, ...style }) : styles.inputEditableFalseStyle}
          editable={editable}
          // style={[styles.inputStyle,style, {borderColor:border, paddingRight: view ? 20 : 15}] }
          autoCorrect={false}
          autoCapitalize={'none'}
          placeholder={placeholder}
          placeholderTextColor={Platform.OS === 'ios' ? colors.silver : colors.silver}
          onBlur={onBlur}
          multiline={multiline}
          numberOfLines={numberOfLines}
          keyboardType={keyboardType}
          secureTextEntry={lcSecureTextEntry}
        />
{/* 
        {
          eye && <TouchableOpacity style={{ position: 'absolute', top: 10, right: 10 }} onPress={() => setLcSecureTextEntry(prev => !prev)}>
            {
              lcSecureTextEntry ? <Image style={styles.icon} source={require('../../../assets/icon/eye.png')} /> :
                <Image style={styles.icon} source={require('../../../assets/icon/hidden.png')} />
            }

          </TouchableOpacity>
        } */}


        {/* {
          search && <TouchableOpacity style={{ position: 'absolute', top: 10, right: 10 }} >
            <Image style={{ height: 24, width: 24, resizeMode: 'contain', tintColor: colors.appPink }} source={require('../../../assets/icon/magnifier.png')} />
          </TouchableOpacity>
        } */}

      </View>
      {
        heading !== "" && (value !== "") && <Rtext style={{ position: 'absolute', top: 7, left: 7, backgroundColor: "#fff", color: colors.purple, paddingHorizontal: 10, paddingVertical: 3, fontSize: 10, borderColor: colors.silver, borderWidth: 1, borderRadius: 5 }}>{heading}</Rtext>
      }
    </View>

  );
};

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    flexDirection: 'column',
    backgroundColor: '#fff',
    // width: 70,
    marginTop: 15,
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 0.3,
    elevation: 5,
    shadowRadius: 15,
    shadowOffset: { width: 4, height: 4 },
  },
  inputStyle: {
    padding: 10,
    shadowColor: '#000',

    paddingLeft: 15,
    paddingRight: 15,

    fontSize: 15,
    lineHeight: 20,
    color: 'black',
    borderColor: '#C4C4C4',
    borderWidth: 0.5,
    // fontFamily: FONTS.LatoRegular,
    height: 45,
    borderRadius: 10,
  },

  inputEditableFalseStyle: {
    padding: 10,
    shadowColor: '#000',

    paddingLeft: 15,
    paddingRight: 15,

    fontSize: 15,
    lineHeight: 20,
    color: '#224585',
    borderColor: '#224585',
    borderWidth: 0.5,

    height: 45,
    borderRadius: 10,
  },
  searchIcon: {
    position: 'absolute',
    left: 15,
    top: 12,
  },
  icon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    marginRight: 10,
    tintColor: colors.silver,
  },
});



export { Ainput };
