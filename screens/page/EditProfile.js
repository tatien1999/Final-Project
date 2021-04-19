import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Alert, ActivityIndicator } from 'react-native'
import { Button , Image , Input, Avatar} from 'react-native-elements';
import {auth} from "../firebase/firebase";
import * as firebase from 'firebase';
import firestore from '@react-native-firebase/firestore';
import * as ImagePicker from 'expo-image-picker';

const EditProfile = ({navigation}) => {


    const [uploading, setUpLoading] = useState(false);
    const [transferred, setTransferred] = useState(0);
    const [userData,setUserData] = useState(null);
    const [image, setImage] = useState(null);
    

    const user = firebase.auth().currentUser;

    const getUSER = async()=> {
        const current = await firebase.firestore()
      .collection('users')
      .doc(user.uid)
      .get()
      .then(documentSnapshot => {
        // console.log('User exists: ', documentSnapshot.exists);
        if (documentSnapshot.exists) {
            console.log(user.uid);
        //   console.log('User data: ', documentSnapshot.data());
          setUserData(documentSnapshot.data());
        }
      })           
    }
    
    useEffect(()=> {
        getUSER();
    }, [])

    async function updateprofile () {
        
        let imgUrl = await uploadImage();

        if (imgUrl == null && userData.userImg) {
            imgUrl = userData.userImg;
        }

        await   firebase.firestore()
        .collection('users')
        .doc(user.uid)
        .update({
            displayName: userData.displayName,
            phoneNumber:userData.phoneNumber,
            address: userData.address,
            userImg: imgUrl,
        })
        .then(() => {
            console.log('User updated!');
            Alert.alert(
                "Profile Updated!",
                "Your profile has been updated successfully.",
        );
        });

    }
    
    
        useEffect(() => {
          (async () => {
            if (Platform.OS !== 'web') {
              const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
              if (status !== 'granted') {
                  console.log(status);
                alert('Sorry, we need camera roll permissions to make this work!');
              }
            }
          })();
        }, []);
      
        const pickImage = async () => {
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            // allowsEditing: true,
            // aspect: [4, 3],
            // quality: 1,
          });
      
          console.log(result);
      
          if (!result.cancelled) {
            setImage(result.uri);
            
            console.log(result.uri);
          }
        };

        const uploadImage = async () => {
            if (image == null ) {
                return null;
            }
            const uploadUri = image;
            let filename = uploadUri.substring(uploadUri.lastIndexOf('/')+1);

            // const end = filename.split('.').pop();
            // const start = filename.split('.').slice(0, -1).join('.');
            // filename = start + Date.now() + '.' + end;

            setUpLoading(true);
            var metadata = {cacheControl: 'public,max-age=300',
                contentType: 'image/jpeg',
              };
        
            const storageRef = firebase.storage().ref().child(`profile/${user.uid}/${filename}`);
            const task = storageRef.put(filename.base64, metadata);


            try {
                await task;

                const url = await storageRef.getDownloadURL();
                
                setUpLoading(false);
                setImage(null);
                return url;
            } catch (e){
                console.log(e);
            }
            return(null);
        }
        


    return (
        <View style={styles.container}>
           
      {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
             <Avatar 
                rounded
                source={{
                     uri: image
                     ? image    
                     : userData
                     ? userData.image || 'https://cdn1.iconfinder.com/data/icons/camera-13/100/Artboard_62-512.png'
                     : 'https://cdn1.iconfinder.com/data/icons/camera-13/100/Artboard_62-512.png'
                    
                     // uri: image
                    // 'https://timesofindia.indiatimes.com/photo/67586673.cms',
                }}
                onPress={pickImage}
                style={{ width: 200, height: 200 }}
                PlaceholderContent={<ActivityIndicator />}
                />
            <View style={styles.inputContainer}>
                <Input 
                    placeholder="Full Name" 
                    autofocus 
                    type="text" 
                    value={userData ? userData.displayName: ''} 
                    onChangeText= {(text) => setUserData({ ... userData, displayName : text})}
                />
                <Input 
                    placeholder="Phone Number" 
                    autofocus 
                    type="numberic" 
                    value={userData ? userData.phoneNumber: ''} 
                    onChangeText= {(text) => setUserData({ ... userData, phoneNumber : text})}
                />
                <Input 
                    placeholder="Address" 
                    autofocus 
                    type="text" 
                    value={userData ? userData.address: ''} 
                    onChangeText= {(text) => setUserData({ ... userData, address : text})}
                   onSubmitEditing={updateprofile}
                />
            </View>
            <Button 
                containerStyle={styles.button}
                color='#f2bd'
                raised
                onPress={updateprofile} 
                title="Update" />
            <Button 
                containerStyle={styles.buttonn}
                color='black'
                raised
                onPress={() => navigation.replace("Profile") }
                title="Cancel" />                
        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
    },   
    inputContainer:{
        width:300,
        marginTop: 30,
    },
    button: {
        marginTop: 15,
        width:220,
    },
    buttonn: {
        backgroundColor: 'black',
        marginTop: 15,
        width:200,
    },
})
