import { View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Camera, Mails, LockKeyhole,MoveRight } from 'lucide-react-native';



const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heroContainer}></View>
      <View style={styles.loginContainer}>
        {/* <Camera color="red" size={48} /> */}
        <View style={styles.topHeading}>
          <Text style={styles.helloTxt}>Hello!</Text>
          <Text style={styles.createAcc}>Create Your Account</Text>
        </View>
        <View style={styles.inputContainer}>
          {/* //email */}
          <View style={styles.txtView}>
            <Mails color="green" />
            <TextInput placeholder='Enter Your email' style={styles.txtInput} />
          </View>


          {/* password */}
          <View style={styles.txtView}>
            <LockKeyhole color="red" />
            <TextInput placeholder='Password' style={styles.txtInput} />
          </View>


          {/* confirm password */}
          <View style={styles.txtView}>
            <LockKeyhole color="red" />
            <TextInput placeholder='Confirm Password' style={styles.txtInput} />
          </View>

          {/* continue btn */}
           <TouchableOpacity style={styles.continuebtn}>
            <Text style={styles.continuetxt}>Continue  </Text>
            <MoveRight color={'white'} fontWeight={50}/>
           </TouchableOpacity>
           {/* select postion */}
           <View style={styles.selectContainer}>
          <TouchableOpacity style={styles.login}  onPress={()=>{}}><Text style={styles.logintxt}>Login</Text></TouchableOpacity>
          <TouchableOpacity style={styles.Register}><Text style={styles.registertxt}>Register</Text></TouchableOpacity>
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
    backgroundColor: '#68D8D6'
  },
  loginContainer: {
    position: 'relative',
    display: 'flex',
    height: '70%',
    backgroundColor: 'white',

    shadowColor: 'black',
    shadowOffset: { width: 100, height: 100 },
    shadowOpacity: 1,
    shadowRadius: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
    margin: 5


  },
  heroContainer: {
    position: 'relative',
    display: 'flex',
    height: '30%',

  },
  topHeading: {
    width: "100%",
    display: "flex",
    justifyContent: 'center',
    alignItems: "center"
  },
  helloTxt: {
    fontSize: 30,
    fontWeight: '700',
    color: '#1E7F47'
  },
  createAcc: {
    fontSize: 15,
    fontWeight: '500'
  },
  txtView: {
    backgroundColor: 'white',
    width: "90%",
    elevation: 10,
    borderRadius: 9,
    marginTop: '3%',
    height: 45,
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
 backgroundColor:'#38B000',
 borderRadius:20,
 display:'flex',
 flexDirection:'row',
 justifyContent:'center',
 alignItems:'center',
 elevation:10
},
continuetxt:{
color:'white',
fontWeight:'900',
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
  elevation:10
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
  fontWeight:'900',
  fontSize:16
},

Register:{
  backgroundColor:'red',
   
  width:124,
  height:40,
 display:'flex',
 flexDirection:'row',
 alignItems:'center',
 justifyContent:'center',
 borderRadius:10,
 elevation:5,
}



})

export default LoginScreen;
