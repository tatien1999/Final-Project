import React, { useState, useEffect } from 'react'
import * as firebase from 'firebase';
import { StyleSheet, Text, View,Image, Pressable } from 'react-native'


const Step3Total = ({getCount,getTotalPrice,cartItems}) => {
    return (
        <View>
            <View>
                <Text>Total:{getCount()}</Text>
            </View>
            <View style={{flex:1}}>
                <Text>Total price:{getTotalPrice()}$/day</Text>
            </View>
        </View>
    )
}

export default Step3Total

const styles = StyleSheet.create({})
