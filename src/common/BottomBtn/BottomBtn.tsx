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
const BottomBtn = ({title, onpress , newStyle}) => {
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

export default BottomBtn;

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
    
    backgroundColor: '#ED682D',
    padding: 15,
    alignItems: 'center',
  },
  BtnTxt: {
    color: '#fff',
    fontSize: 13,
  },
  buttonView: {
    position: 'absolute',
    right: 0,
   bottom: 0,
    width: '100%',
  },
});
