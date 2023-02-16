import {View, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
import AdminLogin from '../admin/AdminLogin';
import Dashboard from '../admin/Dashboard';
import EditItem from '../admin/tabs/EditItem';
import Main from '../Screens/Main';
import UserSignup from '../user/UserSignup';
import Home from '../user/Home';
import UserLogin from '../user/UserLogin';

const Navigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} backgroundColor="#E74C3C" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Main"
            component={Main}
            options={{headerShown: false}}
          />
          
          {/* admin screen */}
          <Stack.Screen
            name="Admin"
            component={AdminLogin}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditItem"
            component={EditItem}
            options={{headerShown: false}}
          />

          {/* user screen */}
          <Stack.Screen
            name="Login"
            component={UserLogin}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signup"
            component={UserSignup}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Navigator;
