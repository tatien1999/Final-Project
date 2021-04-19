import React from 'react'
import { StyleSheet, Text, View, Button  } from 'react-native'

const Step1 = ({navigation}) => {
    return (
        <View style={styles.container} >
            <View style={styles.vi}>
                <View style={styles.vil}>
                    <Text style={styles.h1}>
                        Select the date you want to rent 
                    </Text>
                </View>
                <View style={styles.vil}>
                    <Text>
                        Edit Profile
                    </Text>
                </View>
            </View>
        </View>
 )
}

export default Step1

const styles = StyleSheet.create({
 container: {
     flex: 1,
 },
 h1:{
    fontSize:20,
 },
 vi:{
     flex: 5,
 },
 vil:{
     flex: 5,
     alignItems: "center",

 },
 vi1:{
     flex:1,
     justifyContent: 'center',
     alignItems: "center",
 },
})
