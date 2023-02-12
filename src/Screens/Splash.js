import { View, Text } from 'react-native'
import React, {useEffect} from 'react'
import {useNavigation, StackActions} from "@react-navigation/native"


const Splash = () => {
    const navigation= useNavigation()
    useEffect(() => {
        setTimeout(() => {
            navigation.dispatch(StackActions.replace('Admin'))
        }, 2000);
    }, [])

  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center',backgroundColor:'#E74C3C'}} > 
      <Text style={{fontSize:25,color:"white"}} >FoodApp</Text>
    </View>
  )
}

export default Splash