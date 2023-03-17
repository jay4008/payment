import React, {Component} from 'react';
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
// import { TouchableOpacity } from "react-native-gesture-handler";
import {Rtext} from '../Rtext';
const winHeight = Dimensions.get('window').height;
const BottomQuestionBtn = ({title, onpress , newStyle}) => {
  return (
    <View style={{   position: 'absolute',
    right: 0,
   bottom: 0,
    width: '100%',...newStyle}}>
      <TouchableOpacity style={styles.SubmitBtn} onPress={onpress}>
        <Rtext style={styles.BtnTxt}> {title}</Rtext>
      </TouchableOpacity>
    </View>
  );
};

export default BottomQuestionBtn;

const styles = StyleSheet.create({
  TopImageView: {
    marginTop: 20,
    height: 140,
    backgroundColor: '#3697FE',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  ImgProfile: {
    height: 70,
    width: 70,
    borderRadius: 35,
    resizeMode: 'stretch',
  },
  SubmitBtn: {
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 0.3,
    elevation: 3,
    borderColor :"#C4C4C4",
    borderWidth : 0.3,
    shadowRadius: 15,
    shadowOffset: {width: 4, height: 4},
    backgroundColor: '#fff',
    padding: 15,
    alignItems: 'center',
  },
  BtnTxt: {
    color: '#000',
    fontSize: 13,
  },
  buttonView: {
    position: 'absolute',
    right: 0,
   bottom: 0,
    width: '100%',
  },
});
