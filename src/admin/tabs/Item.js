import {View, Text, StyleSheet, Image, Button} from 'react-native';
import React,{useState} from 'react';
import firestore from '@react-native-firebase/firestore';

const Item = () => {
  const [data, setData] = useState(null)

  const getAllItems = ()=>{
    try {
        firestore().get().then((data)=>{
          console.log(data)
          data.forEach(itmes => {
            console.log(`userId: ${itmes.id} : ${itmes.data}`)
          });
        })
      // console.log(response._data)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <View style={style.constiner}>
      <View style={style.cartBox}>
        {/* <Image source={require()} /> */}
        <View style={style.cartDetail}>
          <Text>name</Text>
          <Text>modal</Text>
          <View>
            <Text>price</Text>
            <Text>discount Price</Text>
          </View>
        </View>
        <View style={style.cartAction}>
          <Text>Delete</Text>
          <Text>Add Card</Text>
        </View>
      </View>
      <Button title='Get Items' onPress={()=>getAllItems()} />
    </View>
  );
};

const style = StyleSheet.create({
  constiner: {
    flex: 1,
  },
  cartBox: {
    width: '90%',
    height: 100,
    elevation: 4,
    alignSelf: 'center',
    marginVertical: 10,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 8,
    flexDirection:'row'
  },
});

export default Item;
