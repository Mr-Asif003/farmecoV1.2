import { View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { Camera, Mails, LockKeyhole, MoveRight } from 'lucide-react-native';
import { Redirect, router } from 'expo-router';


const UserRegisterDetails = () => {

    return (
        <View style={styles.container}>
            <View style={styles.heroContainer}></View>
            <View style={styles.loginContainer}>
                {/* <Camera color="red" size={48} /> */}
                <View style={styles.topHeading}>
                    <Text style={styles.helloTxt}>Details !</Text>
                    <Text style={styles.createAcc}>Please Enter Your Correct Information</Text>
                </View>

                {/* fullname */}
                <View style={styles.outsideView}>
                        <View><Text style={styles.title}>Full Name :- </Text></View>
                        <View style={styles.txtView} >
                            <TextInput placeholder='Enter Your Name' style={styles.txtInput}/>
                        </View>
                    </View>
                 {/* phone num*/}
                 <View style={styles.outsideView}>
                        <View><Text style={styles.Mobtitle}>Mob Number:- </Text></View>
                        <View style={styles.MobtxtView} >
                            <TextInput placeholder='Enter Your Name' style={styles.txtInput}/>
                        </View>
                    </View>
                 <Text style={{fontWeight:'800',marginTop:5,marginLeft:5}}>Select Your Role : -</Text>
                 <View style={styles.rollOutsideView}>
                        <Pressable style={styles.rolebtn}>

                        </Pressable>
                        <Pressable style={styles.rolebtn}>

                        </Pressable>
                        
                    </View>
                

                    


                  


                    





                    {/* continue btn */}
                    <TouchableOpacity style={styles.continuebtn}>
                        <Text style={styles.continuetxt}>Continue  </Text>
                        <MoveRight color={'white'} fontWeight={50} />
                    </TouchableOpacity>



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
        height: '70%',
        backgroundColor: 'white',

        shadowColor: 'black',
        shadowOffset: { width: 100, height: 100 },
        shadowOpacity: 1,
        shadowRadius: 2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 10,
        margin: 0


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
        width: "70%",
        elevation: 1,
        borderRadius: 9,
        marginTop: '3%',
        height: 35,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 1
    },
    txtInput: {
        height: 37,
        color: 'green'
    },
   
    continuebtn: {
        marginTop: '9%',
        height: 38,
        width: 120,
        backgroundColor: '#38B000',
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10
    },
    continuetxt: {
        color: 'white',
        fontWeight: '900',
        fontSize: 16
    },
    
  
    outsideView: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft:9,
        alignItems: 'center'
    },
    title:{
        marginTop:5,
        fontSize:15,
        fontWeight:'600'
    },
    Mobtitle:{
        marginTop:5,
        fontSize:13,
        fontWeight:'600'
    },
    MobtxtView: {
        backgroundColor: 'white',
        width: "50%",
        elevation: 10,
        borderRadius: 9,
        marginTop: '3%',
        height: 35,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 1
    },
    rolebtn:{
        margin:5,
        height:50,
        width:100,
        backgroundColor:'#29AD61',
        borderRadius:10
    },
    rollOutsideView:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-around'
    }
    
    
    



})

export default UserRegisterDetails;
