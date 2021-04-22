import React, { useState, useEffect } from 'react'
import * as firebase from 'firebase';
import { StyleSheet, Text, View,Image, Pressable } from 'react-native'


const Step3Products = ({ id,quantity, price, title,image,index}) => {

    
    const deleteItem = () => {
        firebase.firestore()
        .collection('cartItems')
        .doc(id)
        .delete();
    } 
    const changeQuantity = (newQuantity) =>{
        firebase.firestore().collection('cartItems').doc(id).update({
            quantity: parseInt(newQuantity)
        })
    }
    const setA = () =>{
        firebase.firestore().collection('cartItems').doc(id).update({
            quantity: quantity,
        })
    }

    
    
    return (
    <View style={styles.vi}>
        <View style={styles.img}>
            <Image 
                rounded
                source={{uri: image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Noun_Project_question_mark_icon_1101884_cc.svg/1200px-Noun_Project_question_mark_icon_1101884_cc.svg.png'}}
                style={{width: 70, height: 70, borderRadius: 16,  }}
                /> 
        </View>
        <View style={styles.pro}>
            <Text style={styles.textt}>Name: {title} </Text>
            <Text style={styles.textt}>Price: {price}/day</Text>
        </View>

        <View style={styles.but}>
            <Pressable
                onPress={() => setA(Math.max(0,quantity--))}
                style={styles.button}>
                <Text style={{ fontSize: 25, color: 'black',backgroundColor:"white", borderRadius:10,}}>  -</Text>
            </Pressable>
            <Pressable>
                <Text style={{ marginHorizontal:18,fontSize: 20}}
                value={quantity}
                onChange= {(e) => changeQuantity(e.value)}>{quantity}</Text>
            </Pressable>
            <Pressable
                onPress={() => setA(quantity++)}
                style={styles.button}>
                <Text style={{color: 'black',fontSize:25,backgroundColor:"white",borderRadius:10,}}> +</Text>
            </Pressable>
            <Pressable
                onPress={deleteItem}
                style={styles.button}>
                <Text style={{ color: 'red',fontSize:25,backgroundColor:"white",borderRadius:10, marginLeft:5}}> x</Text>
            </Pressable>
        </View>
    </View>
    )
}

export default Step3Products

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    vi: {
        flexDirection: 'row',
        backgroundColor: '#DDDDDD',
        padding: 10,
        borderRadius: 20,
        marginBottom: 5,
        marginHorizontal: 10,
        
    }, 
    pro:{
        flex:1.5,
        marginLeft: 20,
        alignContent: 'center',
        justifyContent: 'center',
    },
    button:{ 
        height: 30,
        width: 30,
    },
    ins:{
        color:'#FF3333',
    },
    textt:{
        color: 'black',
        fontSize: 15,
    },
    faw:{
        flex:0.3,
        alignItems:'center',
        justifyContent: 'center',
    },
    img:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    },
    but:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
    }
})
