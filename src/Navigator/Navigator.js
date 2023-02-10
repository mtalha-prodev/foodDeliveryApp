import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../Screens/Splash'
import Login from '../Screens/Login'
import Signup from '../Screens/Signup'
import Home from '../Screens/Home'


const Navigator = () => {
   const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Splash'component={Splash} options={{headerShown:false}} />
            <Stack.Screen name='Login' component={Login} options={{headerShown:false}} />
            <Stack.Screen name='Signup' component={Signup} />
            <Stack.Screen name='Home' component={Home}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator