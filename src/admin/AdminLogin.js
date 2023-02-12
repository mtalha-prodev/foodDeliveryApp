import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {

        

      if (email.length > 0 && password.length > 0) {
        console.warn('admin login Successfuly');
        console.log(email,password)
        setEmail('');
        setPassword('');
      }else{
        console.warn('please Enter valid Detaiels');
      }
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <View style={style.container}>
      <Text style={style.adminText}>Admin Login</Text>
      <View style={style.inputForm}>
        <TextInput
          style={style.inputText}
          onChangeText={val => setEmail(val)}
          value={email}
          placeholder="Enter Email ..."
        />
      </View>
      <View style={style.inputForm}>
        <TextInput
          style={style.inputText}
          onChangeText={val => setPassword(val)}
          value={password}
          placeholder="Enter Password ..."
        />
      </View>
      <TouchableOpacity style={style.adminBtn} onPress={() => handleLogin()}>
        <Text style={style.textBtn}>Admin Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const {width} = Dimensions.get('screen');
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  adminText: {
    fontSize: 22,
    fontWeight: '500',
    marginVertical: 25,
  },
  inputForm: {
    width: width - 30,
    borderBottomWidth: 3,
    borderBottomColor: '#D4AC0D',
    marginVertical: 15,
  },

  adminBtn: {
    width: width - 30,
    backgroundColor: '#D4AC0D',
    padding: 7,
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 20,
  },
  textBtn: {
    fontWeight: 600,
    fontSize: 16,
  },
});

export default AdminLogin;
