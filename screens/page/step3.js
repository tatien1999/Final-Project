import React from 'react'
import { StyleSheet, Text, View, Button  } from 'react-native'

const Step3 = ({navigation}) => {
    return (
        <View style={styles.container} >
        <View style={styles.vi}>
             <View style={styles.vil}>
                 <Text>
                     Edit Profile 3
             </Text>
           </View>
        </View>        
   </View>
 )
}

export default Step3

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
 },
 vi1:{
     flex:1,
     justifyContent: 'center',
     alignItems: "center",
 },
})