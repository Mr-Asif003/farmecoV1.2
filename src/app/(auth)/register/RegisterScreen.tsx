import { View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Camera, Mails, LockKeyhole,MoveRight,Key } from 'lucide-react-native';
import { Redirect, router } from 'expo-router';


const RegisterScreen = () => {
  
  return (
    <View style={styles.container}>
      <View style={styles.heroContainer}></View>
      <View style={styles.loginContainer}>
        {/* <Camera color="red" size={48} /> */}
        <View style={styles.topHeading}>
        <Text style={styles.helloTxt}>Welcome,</Text>
        <Text style={styles.createAcc}>Create Your Account</Text>
          
        </View>
        <View style={styles.inputContainer}>
          {/* //email */}
          <View style={styles.txtView}>
            <Mails color="#C5C5C5" />
            <TextInput placeholder='Enter Your email' style={styles.txtInput} />
          </View>


          {/* password */}
          <View style={styles.txtView}>
          <LockKeyhole color="#C5C5C5" />
            <TextInput placeholder='Password' style={styles.txtInput} />
          </View>


          {/* confirm password */}
          <View style={styles.txtView}>
            <LockKeyhole color="#C5C5C5" />
            <TextInput placeholder='Confirm Password' style={styles.txtInput} />
          </View>

          {/* continue btn */}
           <TouchableOpacity style={styles.continuebtn}>
            <Text style={styles.continuetxt} onPress={()=>router.replace('./UserRegisterDetails')}>Continue  </Text>
            
           </TouchableOpacity>
           {/* select postion */}
           <View style={styles.selectContainer}>
          <TouchableOpacity style={styles.login}  onPress={()=>router.replace('/(auth)/login/LoginScreen')}><Text style={styles.logintxt}>Login</Text></TouchableOpacity>
          <TouchableOpacity style={styles.Register} onPress={()=>router.replace('/(auth)/register/RegisterScreen')}><Text style={styles.registertxt}>Register</Text></TouchableOpacity>
        </View>
        </View>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
   backgroundColor: '#AFF1E5'
  },
  loginContainer: {
    position: 'relative',
    display: 'flex',
    height: '80%',
    backgroundColor: '#28Ac60',

    shadowColor: 'black',
    shadowOffset: { width: 100, height: 100 },
    shadowOpacity: 1,
    shadowRadius: 2,
    borderTopLeftRadius: 25,  
    borderTopRightRadius: 25,
    elevation: 10,
    margin: 0


  },
  heroContainer: {
    position: 'relative',
    display: 'flex',
    height: '20%',

  },
  topHeading: {
    width: "100%",
    display: "flex",
     margin:10
  },
  helloTxt: {
    fontSize: 32,
    fontWeight: '500',
    color: 'black',
    marginTop:19,
    
    fontFamily:'archivo'
  },
  createAcc: {
    fontSize:32,
    fontWeight: '800',
    fontFamily:'archivo',
    color:'white'
  },
  txtView: {
    backgroundColor: 'white',
    width: "85%",
    elevation: 1,
    borderRadius: 15,
    marginTop: '4%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5
  },
  txtInput: {
    height: 43,
    color: 'green'
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',

    alignItems: 'center'
  },
continuebtn:{
  marginTop:'9%',
 height:38,
 width:120,
 backgroundColor:'#1E7F47',
 borderRadius:20,
 display:'flex',
 flexDirection:'row',
 justifyContent:'center',
 alignItems:'center',
 elevation:1
},
continuetxt:{
color:'white',
fontWeight:'600',
fontSize:16
},
selectContainer:{
  position:'relative',
  marginTop:'15%',
  backgroundColor:'white',
  width:250,
  height:40,
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between',
  borderRadius:10,
  elevation:1
},
login:{
  
   width:124,
   height:40,
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',

  
},
logintxt:{
  // color:'red',
  // fontWeight:'900',
  // fontSize:16
},
registertxt:{
  color:'white',
  fontWeight:'700',
  fontSize:16
},

Register:{
  backgroundColor:'#1E7F47',
   
  width:124,
  height:40,
 display:'flex',
 flexDirection:'row',
 alignItems:'center',
 justifyContent:'center',
 borderRadius:10,
 elevation:1,
}



})

export default RegisterScreen;
