import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const UserSignup = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(false);

  const navigation = useNavigation();

  const handleSignup = async () => {
    try {
      // console.log(email)
      if (email.length > 0 && password.length > 0) {
        console.warn('account create successfuly');

        setEmail('');
        setPassword('');
        setShows(true);
      } else {
        console.log('please enter correct val');
      }
    } catch (error) {
      console.log(error);
    }
  };

  // profile image
  const handleProfile = async () => {
    try {
      console.warn('image upload successfuly');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={style.container}>
      <Text style={style.loginText}>Sign Up</Text>
      <View style={style.inputForm}>
        <TextInput
          style={style.textInput}
          value={name}
          placeholder="Enter Your Name ..."
          onChangeText={val => setName(val)}
        />
      </View>
      <View style={style.inputForm}>
        <TextInput
          style={style.textInput}
          value={email}
          placeholder="Enter Your Email ..."
          onChangeText={val => setEmail(val)}
        />
      </View>
      <View style={style.inputForm}>
        <TextInput
          style={style.textInput}
          keyboardType={"phone-pad"}
          value={phone}
          placeholder="Enter Your Phone ..."
          onChangeText={val => setPhone(val)}
        />
      </View>
      <View style={style.inputForm}>
        <TextInput
          style={style.textInput}
          value={password}
          placeholder="Enter Your Password ..."
          onChangeText={val => setPassword(val)}
        />
      </View>

      
      <TouchableOpacity style={style.loginBtn} onPress={() => handleSignup()}>
        <Text style={style.btnText}>Sign Up</Text>
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
    borderBottomColor: '#D4AC0D',
  },
  loginBtn: {
    backgroundColor: '#D4AC0D',
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
});

export default UserSignup;
