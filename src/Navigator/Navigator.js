import {View, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import Home from '../Screens/Home';
import AdminLogin from '../admin/AdminLogin';
import Dashboard from '../admin/Dashboard';
import EditItem from '../admin/tabs/EditItem';

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
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
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
          

        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Navigator;
