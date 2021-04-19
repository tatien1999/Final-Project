import React from 'react'
import { StyleSheet, View, ScrollView, Icon } from 'react-native'
import { Image , Input , Text, Button } from 'react-native-elements';
import { auth } from '../firebase/firebase'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const BookScreen = ({navigation}) => {

    return (
    <View style={styles.container} >
           <View style={styles.vi}>
                <View style={styles.vil}>
                    <Text>
                        Edit Profile
                </Text>
              </View>
           </View>
           <View style={styles.vi1}>
               <View style={{width: 200}}>
                <Button 
                    style={styles.button}
                    raised
                    title="Book now"
                    onPress = {() => navigation.navigate("Bookn") }>
                </Button>
               </View>
           </View>
           
      </View>
    )
}

export default BookScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        height: 60,
    }, 
    vi:{
        flex: 5,
    },
    vil:{
        flex: 5,
        marginTop: 20,
        marginLeft:20,
        backgroundColor:"black",
    },
    vi1:{
        flex:1,
        justifyContent: 'center',
        alignItems: "center",
    },
})

