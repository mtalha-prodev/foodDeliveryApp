import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {useNavigation, StackActions} from '@react-navigation/native';

const AdminLogin = () => {
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    // firestore().collection('admin').add({
    //     email:'admin@gmail.com',
    //     password:'admin0018'
    // })
  }, []);

  const handleLogin = async () => {
    try {
      // const admin = await firestore().collection('admin').get();
      // const {email, password} = admin.docs[0]._data;
      // console.log(email,password);

      // if (adminEmail == email && adminPassword == password) { // firestore
      if (adminEmail != null && adminPassword != null) {
        // console.log(email, password);
        Alert.alert('Alert', 'Admin Login Successfuly');

        navigation.dispatch(StackActions.replace('Dashboard'));

        setTimeout(() => {
          setAdminEmail('');
          setAdminPassword('');
        }, 2000);
      } else {
        console.warn('Wrong email/password');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={style.container}>
      <Text style={style.adminText}>Admin</Text>
      <View style={style.inputForm}>
        <TextInput
          style={style.inputText}
          value={adminEmail}
          onChangeText={val => setAdminEmail(val)}
          placeholder="Enter Email ..."
          placeholderTextColor={'gray'}
        />
      </View>
      <View style={style.inputForm}>
        <TextInput
          style={style.inputText}
          value={adminPassword}
          onChangeText={val => setAdminPassword(val)}
          placeholder="Enter Password ..."
          placeholderTextColor={'gray'}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={style.adminBtn} onPress={() => handleLogin()}>
        <Text style={style.textBtn}>Login</Text>
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
    fontSize: 25,
    fontWeight: '600',
    marginVertical: 25,
    color: '#000',
  },
  inputForm: {
    width: width - 30,
    borderBottomWidth: 3,
    borderBottomColor: '#D4AC0D',
    marginVertical: 15,
  },
  inputText: {
    color: '#000',
    fontSize: 17,
  },
  adminBtn: {
    width: width - 30,
    backgroundColor: '#D4AC0D',
    padding: 8,
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 30,
  },
  textBtn: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
  },
});

export default AdminLogin;
