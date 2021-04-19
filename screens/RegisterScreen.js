import React, {useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { KeyboardAvoidingView } from "react-native";
import { Button , Image , Input , Text} from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import {auth} from "./firebase/firebase";
import * as firebase from 'firebase';
import firestore from '@react-native-firebase/firestore';


const RegisterScreen = ( {navigation} ) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    async function register () {
        await auth.createUserWithEmailAndPassword(email.trim(),password)
        .then((user) => {
          const fSt =  firebase.firestore();
          const userID = user.user.uid;
          const userdata= fSt.collection('users').doc(userID);
          userdata.set({
            displayName:name,
            email:email,
            phoneNumber:phoneNumber,
          });
        })
        .catch((error) => alert(error.message));
    };


    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <StatusBar style="light"></StatusBar>
            <Text h2 >
                Create a account
            </Text>
            <View style={styles.inputContainer}>
                <Input 
                    placeholder="Full Name" 
                    autofocus 
                    type="text" 
                    value={name} 
                    onChangeText = {(text) => setName(text)}  
                />
                <Input 
                    placeholder="Phone Number" 
                    autofocus 
                    type="numberic" 
                    value={phoneNumber}  
                    onChangeText= {(text) => setPhoneNumber(text)}  
                />
                <Input 
                    placeholder="Email" 
                    autofocus 
                    type="text" 
                    value={email}  
                    onChangeText= {(text) => setEmail(text)}  
                />
                <Input 
                    placeholder="Password" 
                    secureTextEntry 
                    type="password" 
                    value={password} 
                    onChangeText= {(text) => setPassword(text)}
                    onSubmitEditing={register}
                />
            </View>
            <Button 
                containerStyle={styles.button}
                raised 
                onPress={register} 
                title="Register"
            />
    </KeyboardAvoidingView>
    )
}

export default RegisterScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
    },
    inputContainer:{
        width:300,
        marginTop: 30,
    },
    button: {
        marginTop: 15,
        width:220,
    },
});






