import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, ScrollView ,FlatList, Pressable    } from 'react-native'
import { auth } from '../firebase/firebase';
import * as firebase from 'firebase';
import { Button, makeStyles } from 'react-native-elements';
import Step2Products from './Step2Products';

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
                  key: documentSnapshot.id,
                });
              });
              setProducts(products);
              setLoading(false);
              console.log(products);
          });
    
        // Unsubscribe from events when no longer in use
        return () => subscriber();
      }, []);

      
    return (
      <FlatList style={styles.container}
              data={products}
              renderItem={({ item ,index }) => (
                  <Step2Products
                      id={item.key}
                      title={item.name}
                      price={item.price}
                      image={item.imguri}
                      index={index}
                  />
              )}keyExtractor={(item) =>item.key}
              />
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
    borderRadius: 20,
},
textt:{
    color: 'white',
    fontSize: 15,
}

})