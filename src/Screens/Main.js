import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Main = () => {
  const navigation = useNavigation()
  return (
    <View style={style.container}>
      <Text style={style.title} >Select Login Types</Text>
      <TouchableOpacity style={style.btn} onPress={()=>navigation.navigate('Admin')} >
        <Text style={style.text} >Admin Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.btn} onPress={()=>navigation.navigate('User')} >
        <Text style={style.text} >User Login</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    marginBottom:25,
    fontSize:20,
    color:'#000',
    fontWeight:'bold',
    textTransform: 'uppercase'
  },
  btn: {
    backgroundColor:'#D4AC0D',
    marginVertical:10,
    width:'90%',
    alignSelf:'center',
    height:35,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    color:'#000',
    fontWeight:'500',
    fontSize:16
  }
});

export default Main;
