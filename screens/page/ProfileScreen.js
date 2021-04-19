import React, { useState, useEffect }  from 'react'
import { StyleSheet, View, ScrollView, Button, Icon, ActivityIndicator ,FlatList } from 'react-native'
import { Image , Input , Text , Avatar } from 'react-native-elements';
import { auth } from '../firebase/firebase';
import firestore from '@react-native-firebase/firestore';
import * as firebase from 'firebase';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserEdit , faPhoneAlt } from '@fortawesome/free-solid-svg-icons'



const ProfileScreen = ( {navigation}) => {

  
    const [userData,setUserData] = useState(null);
    const user = firebase.auth().currentUser;
    const [loading, setLoading] = useState(true); // Set loading to true on component mount



    const getUSER = async()=> {
      await firebase.firestore()
      .collection('users')
      .doc(user.uid)
      .get()
      .then(documentSnapshot => {
        // console.log('User exists: ', documentSnapshot.exists);
        if (documentSnapshot.exists) {
          // console.log('User data: ', documentSnapshot.data());
          setUserData(documentSnapshot.data());
        }
      })           
    }

    useEffect(()=> {
        getUSER();
        navigation.addListener("focus", ()=> setLoading(!loading));
    }, [navigation,loading ])



    //     const [users, setUsers] = useState([]); //
    //       useEffect(() => {
    //     const subscriber = firebase.firestore()
    //       .collection('users')
    //       .onSnapshot(querySnapshot => {
    //         const users = [];
      
    //         querySnapshot.forEach(documentSnapshot => {
    //           users.push({
    //             ...documentSnapshot.data(),
    //             key: documentSnapshot.uid,
    //           });
    //         });
      
    //         setUsers(users);
    //         setLoading(false);
    //       });
      
    //     // Unsubscribe from events when no longer in use
    //     return () => subscriber();
    //   }, []);
      if (loading) {
        return <ActivityIndicator />;
      }
    
    
    const signOutUser = () => {        
        auth.signOut().then(() => {
            navigation.replace("Login");
        })
        .catch(error => this.setState({ errorMessage: error.message }))
    };
    return (
        <View style={styles.container}
        
        PlaceholderContent={<ActivityIndicator />}> 
        {/* <FlatList
      data={users}
      renderItem={({ item }) => (
        <View style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>User ID: {item.uid}</Text>
          <Text>User Name: {item.displayName}. {item.phoneNumber}</Text>
        </View>
      )}
    /> */}
        <View style={styles.chia}>
            <Avatar 
                rounded
                source={{
                    uri:
                     userData ? userData.userImg
                    :'https://timesofindia.indiatimes.com/photo/67586673.cms',
                    
                    // this.state.user.avatar
                    // ? { uri: this.state.user.avatar }
                    // : require("../assets/tempAvatar.jpg")

                }}
                style={{ width: 200, height: 200,  }}
                />
            <View style={styles.inputContainer}>
              <Text h1={styles.h1} >
                      Hi! {userData ? userData.displayName: 'UserName?'}
                  </Text>
                  
              <Text h4={styles.h1} >
                      Phone number: {userData ? userData.phoneNumber: 'Phone?'}
                  </Text>
                  
              <Text h6={styles.h1}>
                      Address: {userData ? userData.address: 'Address?'}
                  </Text>

            </View>
          </View>

          <View style={styles.chia1}>
            <View style={styles.chia2}>  
              <FontAwesomeIcon 
                style={styles.ins} 
                size="30"
                icon={faUserEdit} >
              </FontAwesomeIcon>
              <Text  
                raised
                onPress={() => navigation.navigate("Edit Profile") }
                style={styles.ins}>
                Edit Profile
              </Text>
            </View>
            <View style={styles.chia3}>
              <Button 
                  color='black'
                  raised
                  onPress={signOutUser} title="Log Out" />
              </View>
          </View>
            
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        },
    h1: {
    }, 
    inputContainer:{
        width:350,
        marginTop: 30,
        alignItems: "center",
    },
    chia:{
      flex:2,
      alignItems: "center",
      justifyContent: "center",
    },
    chia1:{
      flex:1,
    },
    chia2:{
      flex:2,
      flexDirection: 'row',
      alignItems: "center",
      justifyContent: 'center',
    },
    chia3:{
      flex:1,
    },
    ins:{
        fontSize: 30,
        marginRight: 20,
        marginTop: 30,
    }
})

