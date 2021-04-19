import React from 'react'
import { StyleSheet, View, Dimensions  } from 'react-native'
import MapView from 'react-native-maps'
import { Image , Input , Text } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPaperPlane , faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'


const ContactScreen = () => {
    return (
        <View style={styles.container}> 
            <View style={styles.chiao}>
                <MapView style={{ flex: 1 }}
                    initialRegion={{
                        latitude: 16.08220,
                        longitude: 108.23606,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }} >
                <MapView.Marker
                    coordinate={{
                        latitude: 16.08220,
                        longitude: 108.23606,}}
                    title={"Rental Camera Marker"}
                    description={"Hotline:  +84 999998888"}
                />
                </MapView>
            </View>

            <View style={styles.chiao1}>

                <View style={styles.chiao2}>
                    <FontAwesomeIcon 
                        style={styles.ins}
                        size="30"
                        icon={faMapMarkerAlt} >
                    </FontAwesomeIcon>
                    <Text style={styles.ins}>
                        658 Ngo Quyen street, Da Nang city
                    </Text>
                </View>

                <View style={styles.chiao2}>
                    <FontAwesomeIcon 
                        style={styles.ins}
                        size="30"
                        icon={faPhoneAlt} >
                    </FontAwesomeIcon>
                    <Text style={styles.ins}>
                        +84 999998888
                    </Text>
                </View>

                <View style={styles.chiao2}>
                    <FontAwesomeIcon 
                        style={styles.ins} 
                        size="30"
                        icon={faPaperPlane} >
                    </FontAwesomeIcon>
                    <Text                      
                        style={styles.ins}>
                        rentalapp@contact.com
                    </Text>
                </View>

            </View> 
            
        </View>
    )
}

export default ContactScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
    },
    chiao:{
        flex:2,
        flexDirection: 'column',
    },
    map: {
       width: 410,
       height:365,
    },
    chiao1:{
        marginTop:20,
        flex:1,
        flexDirection: 'column',
    },
    chiao2:{
        flex:1,
        alignContent: 'center',
        marginLeft: 10,
        flexDirection: 'row',
    },
    ins:{
        marginLeft: 30, 
        fontSize: 18,
    }
    
})
