import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Dimensions } from 'react-native';
import {Rtext} from './src/common/Rtext';
import { NavigationContainer } from '@react-navigation/native';
import AuthStackNav from './src/navigations/AuthStackNav';

const {height , width } = Dimensions.get('window')
export default function App() {
  return (<>
   <StatusBar style="light" />
    <View style={styles.container}>
    <NavigationContainer>
      <AuthStackNav/>
    </NavigationContainer>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
 height : height , 
 width : width,
  
  },
});
