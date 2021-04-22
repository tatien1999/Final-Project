import React, { useState, useEffect } from 'react'
import * as firebase from 'firebase';
import { FlatList, Image,ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View , SafeAreaView } from 'react-native'
import Step3Products from "./Step3Products"
import Step3Total from "./Step3Total"

const Step3 = (props) => {

    const [cartItems, setCartItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const subscriber = firebase.firestore()
        .collection('cartItems')
        .onSnapshot((querySnapshot) => {
            querySnapshot.forEach(documentSnapshot => {
                cartItems.push({
                ... documentSnapshot.data(),
                key: documentSnapshot.id,
                });
            });
            setCartItems(cartItems);
            setLoading(false);
        });
        console.log(cartItems)
        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);

    const getTotalPrice = () => {
        let total = 0;
        cartItems.forEach(item => {
            total += (item.price * item.quantity)
        }); 
        return total;   
    }
    const getCount = () => {
        let count = 0;
        cartItems.forEach((item) => {
            count += item.quantity;
        })
        return count;
    }

    
    return (
        <View style={styles.container}>
           
               {
                   loading ? <ActivityIndicator/> : (
                        <FlatList  style={{flex:3}}
                                data={cartItems}
                                renderItem={({ item , index}) => (
                                    <Step3Products
                                        id={item.key}
                                        image={item.image}
                                        title={item.name}
                                        price={item.price}
                                        quantity={item.quantity}
                                        index={index}
                                    />
                                )} keyExtractor={(item) =>item.key}
                            />
                   )
               } 
                    <Step3Total
                        cartItems={cartItems}
                        getCount={getCount}
                        getTotalPrice={getTotalPrice}
                    />
        </View>
    )  
}

export default Step3

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

