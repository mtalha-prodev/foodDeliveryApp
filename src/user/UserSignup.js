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
    const [profile, setProfile] = useState(null);
    const [shows, setShows] = useState(false);
  
    const navigation = useNavigation();
  
    const handleSignup = async () => {
      try {
        // console.log(email)
        if (email.length > 0 && password.length > 0) {
          console.warn('account create successfuly');
  
          setEmail('');
          setPassword('');
          setShows(true)
        } else {
          console.log('please enter correct val');
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    // profile image 
    const handleProfile = async()=>{
      try {
        console.warn('image upload successfuly');
      } catch (error) {
          console.log(error)
      }
    }
  
    return (
      <View style={style.container}>
        <Text style={style.loginText}>Sign Up</Text>
        {!shows && (
          <>
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
                value={password}
                placeholder="Enter Your Password ..."
                onChangeText={val => setPassword(val)}
              />
            </View>
            <TouchableOpacity
              style={style.loginBtn}
              onPress={() => handleSignup()}>
              <Text style={style.btnText}>Next</Text>
            </TouchableOpacity>
          </>
        )}
        {/* user details */}
        {shows && (
          <>
            <View style={style.inputForm}>
              <TextInput
                style={style.textInput}
                value={name}
                placeholder="Enter Your Name ..."
                onChangeText={val => setName(val)}
              />
            </View>
            <TouchableOpacity
              style={style.profile}
              onPress={() => handleProfile()}>
              <Text style={style.btnText}>Select Profile Pic</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.loginBtn}
              onPress={() => handleLogin()}>
              <Text style={style.btnText}>Sign Up</Text>
            </TouchableOpacity>
          </>
        )}
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
    profile:{
      backgroundColor: '#2471A3',
      padding: 5,
      alignItems: 'center',
      marginTop:25,
      marginVertical: 15,
      borderRadius: 15,
      width: width - 30,
    },
    loginBtn: {
      backgroundColor: '#E74C3C',
      padding: 5,
      alignItems: 'center',
      marginVertical: 10,
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
  
  

export default UserSignup