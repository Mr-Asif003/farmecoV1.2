import { View, Text ,StyleSheet,Image, ImageBackground} from 'react-native'
import React from 'react'
import { BottomTabView } from '@react-navigation/bottom-tabs'
import { Link } from 'expo-router'

const select = () => {
  return (
    <ImageBackground source={require('../../assets/images/stylebg.png')} resizeMode="cover"  style={styles.bgContainer}>

     
<Link href={'/register/RegisterScreen'}>go to register</Link>
<Link href={'/login/LoginScreen'}>go to login</Link>
      
      </ImageBackground>
  )
}

const styles=StyleSheet.create({
    bgContainer:{
        flex:1,
        height:'100%',
        width:'100%'
    },
    

})

export default select