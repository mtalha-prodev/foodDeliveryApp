import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const navigation= useNavigation()

  const handleLogin = async () => {
    try {
      if (email.length > 0 && password.length > 0) {
        console.warn('account create successfuly');
        
        email('')
        password('')
      }else{
        console.log('please enter correct val')
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={style.container}>
      <Text style={style.loginText}> Login</Text>

      <View style={style.inputForm}>
        <TextInput style={style.textInput} placeholder="Enter Your Email ..." />
      </View>
      <View style={style.inputForm}>
        <TextInput
          style={style.textInput}
          placeholder="Enter Your Password ..."
        />
      </View>
      <TouchableOpacity style={style.loginBtn} onPress={()=>handleLogin()} >
        <Text style={style.btnText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.signup} onPress={()=>navigation.navigate('Signup')}>
        <Text style={style.btnSign}>You don,t have an Account !</Text>
      </TouchableOpacity>
    </View>
  );
};

const {width} = Dimensions.get('screen');

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    marginBottom: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
  inputForm: {
    marginVertical: 10,
  },
  textInput: {
    marginTop: 10,
    width: width - 30,
    padding: 5,
    borderBottomWidth: 3,
    borderBottomColor: '#E74C3C',
  },
  loginBtn: {
    backgroundColor: '#E74C3C',
    padding: 5,
    alignItems: 'center',
    marginVertical: 25,
    borderRadius: 15,
    width: width - 30,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: 500,
  },
  signup: {
    marginTop: 20,
    alignItems: 'center',
    width: width - 30,
  },
  btnSign: {
    color: '#3498DB',
    fontSize: 18,
  },
});

export default Login;
