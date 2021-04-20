import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, ScrollView ,FlatList, Avatar    } from 'react-native'
import { auth } from '../firebase/firebase';
import * as firebase from 'firebase';
import { Button, makeStyles } from 'react-native-elements';

const Step2 = ({navigation}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const subscriber = firebase.firestore()
          .collection('products')
          .onSnapshot((querySnapshot) => {
            querySnapshot.forEach(documentSnapshot => {
                products.push({
                  ...documentSnapshot.data(),
                  key: documentSnapshot.uid,
                });
              });
        
              setProducts(products);
              setLoading(false);
          });
    
        // Unsubscribe from events when no longer in use
        return () => subscriber();
      }, []);

      
    // const getProducts = () => {
    //     firebase.firestore()
    //     .collection('products')
    //     .onSnapshot((querySnapshot) => {
    //         const products = []
    //         querySnapshot.forEach(documentSnapshot => {
    //             products.push({
    //             ...documentSnapshot.data(),
    //             key: documentSnapshot.uid,
    //             });
    //         });
    //         setProducts(products);
    //     })
    // }
    return (
        <ScrollView style={styles.container} >
            {/* <View>
                <Image>

                </Image>
            </View> */}
                <FlatList
                        data={products}
                        renderItem={({ item }) => (
                            <View style={styles.vi}>
                            <Image 
                                rounded
                                source={{uri: item.imguri || 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Noun_Project_question_mark_icon_1101884_cc.svg/1200px-Noun_Project_question_mark_icon_1101884_cc.svg.png'}}
                                style={{ flex:0.9, width: 70, height: 70, borderRadius: 16,  }}
                                /> 
                            <View style={styles.pro}>
                                <Text>Product Name {item.name}</Text>
                                <Text>Price per day: {item.price}$/day {item.uid} </Text>
                            </View>
                            <View >
                                <Button 
                                    containerStyle={styles.button}
                                    raised
                                    titleStyle={{ color: 'white' }} 
                                    type="clear"
                                    title="Pick">

                                </Button>
                            </View>

                            
                            </View>
                        )}
                        />

            {/* <View style={styles.container} >
                <View style={styles.vi}>
                    <View style={styles.vil}>
                        <View style={styles.text}>
                            <Text style={{color:"white"}} >dasd</Text>
                            
                        <Image re></Image>
                        <Text style={{color:"black"}} >dasd</Text>
                        </View>
                    </View>
                </View>        
            </View> */}
        </ScrollView>
        )
}

export default Step2

const styles = StyleSheet.create({
 container: {
     flex: 1,
 },
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
    borderRadius: 20,}
})