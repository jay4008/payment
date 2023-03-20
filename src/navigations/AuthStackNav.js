// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { View, Text, StyleSheet ,Dimensions} from 'react-native';
import { colors } from '../assets/common/Common';
import Adhar from '../authScreens/Adhar';
import PhoneNumber from '../authScreens/PhoneNumber';
import AddMoney from '../mainScreens/AddMoney';
import DashBoard from '../mainScreens/DashBoard';
import QRCode from '../mainScreens/QrCode';
import SendMoney from '../mainScreens/SendMoney';
const {height , width } = Dimensions.get('window')
const Stack = createNativeStackNavigator();
// const Stack = createStackNavigator();
function AuthStackNav() {
    return (
        <Stack.Navigator initialRouteName = {'PhoneNumber'}  screenOptions = {{ headerShown : false}}>
            <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
            <Stack.Screen name="Adhar" component={Adhar} />
            <Stack.Screen name="DashBoard" component={DashBoard} />
            <Stack.Screen name="QRCode" component={QRCode} options = {{headerShown : true , headerTintColor :colors.purple}} />
            <Stack.Screen name="AddMoney" component={AddMoney} options = {{headerShown : true , headerTintColor :colors.purple}} />
            <Stack.Screen name="SendMoney" component={SendMoney} options = {{headerShown : true , headerTintColor :colors.purple}} />
        </Stack.Navigator>
    );
}

export default AuthStackNav;
const styles = StyleSheet.create({
    container: {
   height : height , 
   width : width,
    
    },
  });