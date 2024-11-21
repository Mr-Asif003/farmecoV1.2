import { View, Text ,StyleSheet,Image, ImageBackground} from 'react-native'
import React from 'react'
import { BottomTabView } from '@react-navigation/bottom-tabs'

const select = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upView}>
        
      </View>

      <View style={styles.bottomView}>
      <ImageBackground source={require('../../assets/images/intropage1.png')} resizeMode="cover" style={styles.image}>
      <Text>ffkffk</Text>
      </ImageBackground>
      
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        height:'100%',
      
      
    },
    bottomImg:{
        height:'100%',
        width:8,
        elevation:9

    },
    upView:{
     height:'50%',
    },
    bottomView:{
      height:"50%",
      width:400,
      
    },
    image: {
        flex: 1,
        justifyContent: 'center',
      },

})

export default select