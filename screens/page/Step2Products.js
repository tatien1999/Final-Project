import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import * as firebase from 'firebase';
import { Button, makeStyles } from 'react-native-elements';

const Step2Products = ({ title, price, image, id }) => {

    const addToCart = () => {
        console.log(id);
        const cartItem = firebase.firestore().collection("cartItems").doc(id);
        cartItem.get()
        .then((doc)=>{
            console.log(doc);
            if(doc.exists){
                cartItem.update({
                    quantity: doc.data().quantity + 1
                })
            } else {
                firebase.firestore().collection("cartItems").doc(id).set({
                    name: title,
                    image: image,
                    price: price,
                    quantity: 1
                })
            }
        })
    };

    return (
        <View style={styles.vi}>
            <Image 
                rounded
                source={{uri: image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Noun_Project_question_mark_icon_1101884_cc.svg/1200px-Noun_Project_question_mark_icon_1101884_cc.svg.png'}}
                style={{ flex:0.9, width: 70, height: 70, borderRadius: 16,  }}
                /> 
            <View style={styles.pro}>
                <Text style={styles.textt}>Product: {title} </Text>
                <Text style={styles.textt}>Price: {price}$/day  </Text>
            </View>
            <View >
                <Button 
                    containerStyle={styles.button}
                    raised
                    titleStyle={{ color: 'white' }} 
                    type="clear"
                    title="ADD"
                    onPress={addToCart}>
                </Button>
            </View>
        </View>
    )
}

export default Step2Products

const styles = StyleSheet.create({
    vi: {
        flexDirection: 'row',
        backgroundColor: '#EC8B5E',
        padding: 10,
        borderRadius: 20,
        marginBottom: 5,
        marginHorizontal: 20,
        
     }, 
     pro:{
         flex:2,
         marginLeft: 20,
         alignContent: 'center',
         justifyContent: 'center',
     },
     button:{ 
        flex:0.5,color:'red',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor:'#141A46',
        padding: 10,
        borderRadius: 20,
    },
    textt:{
        color: 'white',
        fontSize: 15,
    }
})
