import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

const Add = () => {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.hText}>Add Item</Text>
      </View>
      <TextInput
        style={style.inputStyle}
        placeholder="Enter Item Name ..."
        onChangeText={val => {}}
        value={''}
      />
      <TextInput
        style={style.inputStyle}
        placeholder="Enter Item Price ..."
        onChangeText={val => {}}
        value={''}
      />
      <TextInput
        style={style.inputStyle}
        placeholder="Enter Item Discount Price ..."
        onChangeText={val => {}}
        value={''}
      />
      <TextInput
        style={style.inputStyle}
        placeholder="Enter Item Description ..."
        onChangeText={val => {}}
        value={''}
      />
      <TextInput
        style={style.inputStyle}
        placeholder="Enter Item Image url ..."
        onChangeText={val => {}}
        value={''}
      />
      <Text
        style={{
          alignSelf: 'center',
          marginVertical: 15,
          color: '#E74C3C',
          fontWeight: 'bold',
        }}>
        OR
      </Text>
      <TouchableOpacity style={style.uploadImg}>
        <Text style={style.btnText}>Upload Item Image</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.addItem}>
        <Text style={style.btnText}>Add Item </Text>
      </TouchableOpacity>
    </View>
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
