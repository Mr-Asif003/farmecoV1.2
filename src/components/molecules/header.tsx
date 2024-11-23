import { View, Text,StyleSheet ,Image} from 'react-native'
import React from 'react'
import { UserRoundCog } from 'lucide-react';
const Header = () => {
  return (
    <View style={styles.headerContainer}>
        <View style={styles.imgview}>
        <Image source={ require('../../assets/images/FarmecoLogo.png')}  style={styles.logoimg}/>
        <Text style={styles.logoname}>FarmEco</Text>
        
        </View>
        <View style={styles.avatarcontainer} >
            <View> < UserRoundCog/></View>
        </View>
    
    </View>
  )
}
const styles=StyleSheet.create({
    headerContainer:{
       height:100,
       width:'100%',
       backgroundColor:'#28AC60',
       flex:1,
       display:'flex'
       
    },
    imgview:{
        height:'1%',
         flex:1,
       display:'flex',
       flexDirection:'row',
       justifyContent:'flex-start',
       margin:10

    },
    logoimg:{
        margin:0,
      height:50,
      width:50,
      resizeMode:'cover',
      borderRadius:6

    },
    avatarcontainer:{
        height:40,
        width:42,
        backgroundColor:'white',
        borderRadius:40,
        justifyContent:'center',
        alignItems:'center'
    },
    logoname:{
      marginTop:30
    }
})

export default Header