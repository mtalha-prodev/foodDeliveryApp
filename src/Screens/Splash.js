import { View, Text } from 'react-native'
import React, {useEffect} from 'react'
import {useNavigation, StackActions} from "@react-navigation/native"


const Splash = () => {
    const navigation= useNavigation()
    useEffect(() => {
        setTimeout(() => {
            navigation.dispatch(StackActions.replace('Login'))
        }, 2000);
    }, [])

  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center',backgroundColor:'#273746'}} > 
      <Text style={{fontSize:25,color:"white"}} >Splash</Text>
    </View>
  )
}

export default Splash