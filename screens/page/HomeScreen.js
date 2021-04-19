import React, {useLayoutEffect} from 'react'
import { StyleSheet, View, ScrollView, Button, Icon } from 'react-native'
import { Image , Input , Text } from 'react-native-elements';
import { auth } from '../firebase/firebase'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const HomeScreen = ({navigation}) => {

    return (
    <View>
        <FontAwesomeIcon icon={faCoffee} />
        <FontAwesomeIcon icon={faCoffee} />
        <FontAwesomeIcon icon={faCoffee} />
        <FontAwesomeIcon icon={faCoffee} />
      </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    h1: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

