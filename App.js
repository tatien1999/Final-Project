import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,LogBox} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeBottom from './screens/HomeBottom';


const Stack = createStackNavigator();
const appScreenOption = {
  headerStyle: { backgroundColor: "#f2bd"},
  headerTitleStyle: { color: "white"}, 
  headerTintColor: "white",
  headerTitleAlign: 'center',
}

export default function App() {
  LogBox.ignoreLogs(['Remote debugger']);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Rental Camera App"
        screenOptions={appScreenOption}
       >
        <Stack.Screen name='Login' component = {LoginScreen} />
        <Stack.Screen name='Register' component = {RegisterScreen} />
        <Stack.Screen name='Rental Camera App' component = {HomeBottom}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
