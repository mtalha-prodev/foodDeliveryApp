import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {StackActions, useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserLogin = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      // firebase
      // if (email != null && password != null) {
      //   const query = await firestore()
      //     .collection('users')
      //     .where('email', '==', email)
      //     .get();

      //   const data = query.docs.map(user => user._data);
      //   if (data[0].email == email && data[0].password == password) {
      //     // console.log(data[0].email);
      //     await AsyncStorage.setItem('EMAIL', email);
      //     navigation.dispatch(StackActions.replace('Home'));
      //   } else {
      //     Alert.alert('Alert', 'Wrong Email/Password');
      //   }

      if (email != null && password != null) {
        // console.log(data[0].email);
        await AsyncStorage.setItem('EMAIL', email);
        navigation.dispatch(StackActions.replace('Home'));

        Alert.alert('Alert', 'User Login Successfuly');
        email('');
        password('');
      } else {
        Alert.alert('Alert', 'Please enter Email/Password');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={style.container}>
      <Text style={style.loginText}> Users</Text>

      <View style={style.inputForm}>
        <TextInput
          style={style.textInput}
          placeholder="Enter Your Email ..."
          placeholderTextColor={'gray'}
          onChangeText={val => setEmail(val)}
        />
      </View>
      <View style={style.inputForm}>
        <TextInput
          style={style.textInput}
          placeholder="Enter Your Password ..."
          placeholderTextColor={'gray'}
          onChangeText={val => setPassword(val)}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={style.loginBtn} onPress={() => handleLogin()}>
        <Text style={style.btnText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.signup}
        onPress={() => navigation.navigate('Signup')}>
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
    color: '#000',
  },
  inputForm: {
    marginVertical: 10,
  },
  textInput: {
    marginTop: 10,
    width: width - 30,
    padding: 5,
    borderBottomWidth: 3,
    borderBottomColor: '#D4AC0D',
    fontSize: 18,
    color: '#000',
  },
  loginBtn: {
    backgroundColor: '#D4AC0D',
    padding: 8,
    alignItems: 'center',
    marginVertical: 25,
    borderRadius: 15,
    width: width - 30,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    letterSpacing: 1,
    fontWeight: 500,
    color: '#000',
  },
  signup: {
    marginTop: 20,
    alignItems: 'center',
    width: width - 30,
  },
  btnSign: {
    color: 'gray',
    fontSize: 13,
    textTransform: 'uppercase',
    fontWeight: 500,
    textDecorationLine: 'underline',
  },
});

export default UserLogin;
