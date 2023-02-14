import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import DocumentPicker from 'react-native-document-picker';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const Add = () => {
  const [itemName, setItemName] = useState(null);
  const [price, setPrice] = useState(null);
  const [discountPrice, setDiscountPrice] = useState(null);
  const [desc, setDesc] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const SelectImg = async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
        copyTo: 'cachesDirectory',
      });

      setImageUrl(res);

      // console.log(res);
    } catch (error) {
      console.warn(error);
    }
  };

  const addItem = async () => {
    try {
      if (itemName && price && discountPrice && desc && imageUrl) {
        await firestore().collection('items').add({
          itemName,
          price,
          discountPrice,
          desc,
          imageUrl,
        });

        await storage()
          .ref(`items/${imageUrl.name}`)
          .putFile(imageUrl.fileCopyUri);
        Alert.alert('Item upload successfuly');

        setTimeout(() => {
          setItemName('');
          setPrice('');
          setDiscountPrice('');
          setImageUrl('');
          setDesc('');
        }, 2000);
      } else {
        console.warn('Something Wrong !');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ScrollView style={style.container}>
      <View style={style.container}>
        <View style={style.header}>
          <Text style={style.hText}>Add Item</Text>
        </View>
        <TextInput
          style={style.inputStyle}
          placeholder="Enter Item Name ..."
          onChangeText={val => {
            setItemName(val);
          }}
          value={itemName}
        />
        <TextInput
          style={style.inputStyle}
          placeholder="Enter Item Price ..."
          onChangeText={val => {
            setPrice(val);
          }}
          value={price}
        />
        <TextInput
          style={style.inputStyle}
          placeholder="Enter Item Discount Price ..."
          onChangeText={val => {
            setDiscountPrice(val);
          }}
          value={discountPrice}
        />
        <TextInput
          style={style.inputStyle}
          placeholder="Enter Item Description ..."
          onChangeText={val => {
            setDesc(val);
          }}
          value={desc}
        />
        {/* <TextInput
          style={style.inputStyle}
          placeholder="Enter Item Image url ..."
          onChangeText={val => {
            setImageUrl(val);
          }}
          value={imageUrl}
        /> */}
        <Text
          style={{
            alignSelf: 'center',
            marginVertical: 15,
            color: '#E74C3C',
            fontWeight: 'bold',
          }}>
          OR
        </Text>
        <TouchableOpacity style={style.uploadImg} onPress={() => SelectImg()}>
          <Text style={style.btnText}>Upload Item Image</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.addItem} onPress={() => addItem()}>
          <Text style={style.btnText}>Add Item </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 60,
    elevation: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 15,
    marginBottom: 10,
  },
  hText: {
    fontSize: 18,
    fontWeight: 500,
    color: '#000',
  },
  inputStyle: {
    width: '90%',
    borderWidth: 1,
    marginVertical: 10,
    alignSelf: 'center',
    borderRadius: 12,
    padding: 7,
    borderColor: '#E74C3C',
  },
  uploadImg: {
    backgroundColor: '#2596be',
    width: '90%',
    alignSelf: 'center',
    height: 40,
    justifyContent: 'center',
    borderRadius: 15,
  },
  addItem: {
    marginTop: 20,
    backgroundColor: '#E74C3C',
    width: '90%',
    alignSelf: 'center',
    height: 40,
    justifyContent: 'center',
    borderRadius: 15,
  },
  btnText: {
    color: '#fff',
    fontWeight: 700,
    alignSelf: 'center',
  },
});

export default Add;
