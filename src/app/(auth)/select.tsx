import { View, Text ,StyleSheet,Image, ImageBackground} from 'react-native'
import React from 'react'
import { BottomTabView } from '@react-navigation/bottom-tabs'
import { Link } from 'expo-router'
import Account from '../(main)/farmer/(tabs)/Account';
import CropTypeSelection from '../(main)/farmer/(productListing)/CropTypes';
import ListingPage from '../(main)/farmer/(productListing)/ListingPage';
import Language from '../Language';



const select = () => {
  return (
    <ImageBackground source={require('../../assets/images/stylebg.png')} resizeMode="cover"  style={styles.bgContainer}>

     
<Link href={'/register/RegisterScreen'}>go to register</Link>
<Link href={'./login/LoginScreen'}>go to login</Link>
<Link href={'../(main)/farmer/(tabs)/Account'}>go to famer homescreen</Link>

<Link href={'../(main)/farmer/CropTypes'}>go to crop type selection</Link> 

<Link href={'../(main)/farmer/SelectVeg'}>go to select crops</Link>
<Link href={'../(main)/farmer/ListingPage'}>go to listing veg</Link>

<Link href={'/(auth)/register/UserRegisterDetails'}>go details</Link>
<Link href={'/(auth)/register/RoleScreen'}>go to role</Link>

<Link href={'../(main)/farmer/(productListing)/Preorder'}>go to preorder</Link>

<Link href={'./trans'}>go to translation</Link>

<Language/>

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