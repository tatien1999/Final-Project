import React, {useLayoutEffect} from 'react'
import { SafeAreaView } from 'react-native'
import { StyleSheet, View, ScrollView, Button, Icon } from 'react-native'
import { Image , Input , Text } from 'react-native-elements';
import { auth } from './firebase/firebase'
import HomeScreen from './page/HomeScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './page/ProfileScreen';
import BookScreen from './page/BookScreen';
import ContactScreen from './page/ContactScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserCircle , faCameraRetro, faBuilding } from '@fortawesome/free-solid-svg-icons'
import { createStackNavigator } from '@react-navigation/stack';
import EditProfile from './page/EditProfile'
import Booknow from './page/Booknow'
// import step1 from './page/step1'
// import step2 from './page/step2'
// import step3 from './page/step3'



const BookScreenn = ({Navigator}) => {

const BookR = createStackNavigator();
    return (
        <BookR.Navigator 
        screenOptions={{
            headerShown: false
          }}>
            <BookR.Screen name='Book' component = {BookScreen} />
            <BookR.Screen name='Bookn' component = {Booknow} />
            {/* <BookR.Screen name='step1' component = {step1} />
            <BookR.Screen name='step2' component = {step2} />
            <BookR.Screen name='step3' component = {step3} /> */}
        </BookR.Navigator>
    )
};    

const ProfileScreenn = ({Navigator}) => {
    
const ProFile = createStackNavigator();
    return (
        <ProFile.Navigator 
        screenOptions={{
            headerShown: false
          }}>
            <ProFile.Screen name='Profile' component = {ProfileScreen} />
            <ProFile.Screen name='Edit Profile' component = {EditProfile} />
        </ProFile.Navigator>
    )
};

const HomeBottom = ({Navigator}) => {
    const Tab = createBottomTabNavigator();
    return (
            <Tab.Navigator initialRouteName="Home"
                tabBarOptions={{
                    labelStyle: {
                        fontSize: 16,        
                    },
                    activeTintColor: '#f2bd',
                    inactiveTintColor: 'black'
                }}
                >
                <Tab.Screen
                    name="Home"  
                    component={HomeScreen}
                    options={{ 
                        tabBarIcon: ({color}) =>  <FontAwesomeIcon 
                        icon={faCameraRetro} 
                        size={25} color={color}
                        />,
                    }}
                  />
                <Tab.Screen
                    name="Book" 
                    component={BookScreenn} 
                    options={{
                        tabBarIcon: ({color}) =>  <FontAwesomeIcon 
                        icon={faCameraRetro} 
                        color={color} size={25} 
                        title="Product"  />,
                    }}
                    />
                <Tab.Screen 
                    name="Profile" 
                    component={ProfileScreenn} 
                    options={{
                        tabBarIcon: ({color}) =>  <FontAwesomeIcon 
                        icon={faUserCircle} color={color} 
                        size={25} />,
                    }}
                    />
                <Tab.Screen 
                    name="About us" 
                    component={ContactScreen} 
                    options={{
                        tabBarIcon: ({color}) =>  <FontAwesomeIcon 
                        icon={faBuilding} color={color} 
                        size={25} />,
                    }}
                    />
            </Tab.Navigator>
    )
}

export default HomeBottom

const styles = StyleSheet.create({    
    container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    },
});
