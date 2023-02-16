import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

const Item = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation()

  useEffect(() => {
    getAllItems();
  }, []);

  // get All items in firestore

  const getAllItems = async () => {
    try {
      firestore()
        .collection('items')
        .get()
        .then(data => {
          let tempData = [];
          data.forEach(itmes => {
            tempData.push({id: itmes.id, data: itmes.data()});
            // console.log(`userId: ${itmes.id} : ${itmes.data()}`);
          });
          setData(tempData);
        });
    } catch (error) {
      console.log(error);
    }
  };

  // edit Item in firestore

  const editItem = async (item) => {
    try {
      navigation.navigate('EditItem', {id:item.id, item:item.data})
      console.log('Edit items!');
    } catch (error) {
      console.log(error);
    }
  };

  // delete Item in firestore

  const deleteItem = async id => {
    try {
      const del = await firestore().collection('items').doc(id).delete();

      // console.log("delete items !", del)
      Alert.alert('Alert', 'Item Delete Successfuly !');

      getAllItems();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={style.constiner}>
      <View style={{marginBottom: 70}}>
        <FlatList
          data={data}
          renderItem={({item, index}) => {
            // console.log(item.id);
            return (
              <View style={style.cartBox} key={index}>
                <View style={{flexDirection: 'row'}}>
                  <Image source={{uri: item.data.url}} style={style.imgStyle} />
                  <View style={style.cartDetail}>
                    <Text style={{fontWeight: 500, color: 'red'}}>
                      {item.data.itemName}
                    </Text>
                    <Text>{item.data.desc}</Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{marginRight: 5, color: 'green'}}>
                        ${item.data.discountPrice}
                      </Text>
                      <Text style={{textDecorationLine: 'line-through'}}>
                        ${item.data.price}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={style.cartAction}>
                  <TouchableOpacity onPress={() => editItem(item)}>
                    <Image
                      source={require('../../../assets/icons/edit.png')}
                      style={style.icons}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => deleteItem(item.id)}>
                    <Image
                      source={require('../../../assets/icons/delete.png')}
                      style={style.icons}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  constiner: {
    flex: 1,
    marginTop: 15,
  },
  cartBox: {
    width: '90%',
    height: 90,
    elevation: 4,
    alignSelf: 'center',
    marginVertical: 10,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cartDetail: {
    justifyContent: 'space-evenly',
  },
  imgStyle: {
    width: 90,
    height: '90%',
    borderRadius: 8,
    marginRight: 10,
  },
  cartAction: {
    justifyContent: 'space-between',
  },
  icons: {
    width: 22,
    height: 22,
    alignSelf: 'flex-end',
  },
});

export default Item;
