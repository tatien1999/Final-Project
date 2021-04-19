import React, {useState, useEffect} from 'react'
import { StyleSheet , View, Text } from 'react-native'
import { Button , Image , Input } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView } from 'react-native';
import {auth} from "./firebase/firebase"

const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) =>{ 
            if (authUser) {
                navigation.replace("Rental Camera App")
            }
        });
        return unsubscribe;
    }, []);

    const signIn = () => {
        auth
        .signInWithEmailAndPassword(email.trim(), password)
        .catch((error) => alert(error));
    };

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar styles="light"></StatusBar>
                <Image styles={styles.img}
                    source= {{
                        uri:
                        "https://banner2.cleanpng.com/20180503/sgq/kisspng-computer-icons-camera-royalty-free-clip-art-camera-leisure-5aeb446ec3e8c5.1672412315253679188025.jpg",
                        // "",
                    }} 
                    style={{ width: 200, height:200}}
                />
            <View style={styles.inputContainer}>
                <Input 
                    placeholder="Email" 
                    autoFocus 
                    type="email" 
                    value={email} 
                    onChangeText={text=> setEmail(text)} />
                <Input 
                    placeholder="Password" 
                    secureTextEntry 
                    type="password"
                    value={password} 
                    onChangeText={text=> setPassword(text)}
                    onSubmitEditing={signIn} />
            </View>
            <Button 
                containerStyle={styles.button} onPress={signIn} title="Login" />                
            <Text
              style={styles.registerText}
              onPress={() => navigation.navigate("Register") }>
              New Here ? Register
            </Text>
 
            <View style={{height:100}} />
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white',
    },
    inputContainer: {
        marginTop: 20,
        width: 300,
    },
    button: {
        marginTop: 10,
        width: 250,
        color:'#f2bd',
    },
    registerText:{
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginTop: 25,
        
    },
    img: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

