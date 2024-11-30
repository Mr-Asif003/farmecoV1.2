import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {PhoneCall, MoveRight,CircleUser,MapPinHouse } from 'lucide-react-native';
import { Redirect, router, useRouter } from 'expo-router';
import MainLayout from '../../(main)/_layout';
import Cart from "../../(main)/farmer/(tabs)/Cart";

import { db, storage, auth } from "../../firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
// import * as ImagePicker from "expo-image-picker";



const UserRegisterDetails = () => {
    const router=useRouter();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [profileImage, setProfileImage] = useState(null);

    // // const pickImage = async () => {
    // //   const result = await ImagePicker.launchImageLibraryAsync({
    // //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
    // //     allowsEditing: true,
    // //     aspect: [1, 1],
    // //     quality: 1,
    // //   });

    //   if (!result.canceled) {
    //     setProfileImage(result.uri);
    //   }
    // };

    const saveDetails = async () => {
        const user = auth.currentUser;
        if (!user) {
            alert("User not authenticated");
            return;
        }

        try {
            let profileImageUrl = null;
            if (profileImage) {
                const imageRef = ref(storage, `profileImages/${user.uid}.jpg`);
                const img = await fetch(profileImage);
                const bytes = await img.blob();
                await uploadBytes(imageRef, bytes);
                profileImageUrl = await getDownloadURL(imageRef);
            }

            await updateDoc(doc(db, "users", user.uid), {
                name,
                phone,
                profileImage: profileImageUrl,
            });

            alert("Details saved successfully!");
            router.replace('./RoleScreen')
            
        } catch (error) {
            alert("Error saving details: " + error.message);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.heroContainer}></View>
            <View style={styles.loginContainer}>
                {/* <Camera color="red" size={48} /> */}
                <View style={styles.topHeading}>
                    <Text style={styles.helloTxt}>Hi,</Text>
                    <Text style={styles.createAcc}>Enter Your Details</Text>
                </View>

                {/* fullname */}
                <View style={styles.outsideView}>
                    <View><Text style={styles.title}>Full Name :-   </Text></View>
                    <View style={styles.txtView} >
                    <CircleUser color='black' style={{marginLeft:2}}/>
                        <TextInput  
        placeholder="Name"
        value={name}
        onChangeText={setName} style={styles.txtInput} />
                    </View>
                </View>
                {/* phone num*/}
                <View style={styles.outsideView}>
               
                    <View><Text style={styles.Mobtitle}>Mob Number :- </Text></View>
                    <View style={styles.MobtxtView} >
                    <PhoneCall color='black' style={{marginLeft:2}}/>
                        <TextInput placeholder="Phone Number"
                            value={phone}
                            onChangeText={setPhone}
                            keyboardType="phone-pad" style={styles.txtInput} />
                    </View>
                </View>

                {/* Address line 1 */}
                <View style={styles.outsideView}>
                    <View><Text style={styles.Mobtitle}>Address  :-        </Text></View>
                    <View style={styles.txtView} >
                    <MapPinHouse color='black' style={{marginLeft:2}}/>
                        <TextInput placeholder='Address' style={styles.txtInput} />
                    </View>
                </View>















                <View style={styles.continueView}>
                    {/* continue btn */}
                    <TouchableOpacity style={styles.continuebtn} onPress={saveDetails}>
                        <Text style={styles.continuetxt}>Continue  </Text>
                        <MoveRight color={'white'} fontWeight={50} />
                    </TouchableOpacity>
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
        backgroundColor: '#28AC60',

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
        height: '25%',

    },
    topHeading: {
        width: "100%",
        display: "flex",
        justifyContent: 'center',
        marginLeft: 10,
        marginTop: 5
    },
    helloTxt: {
        fontSize: 32,
        fontWeight: '500',
        color: 'black',
        marginTop: 19,

        fontFamily: 'archivo'
    },
    createAcc: {
        fontSize: 32,
        fontWeight: '800',
        fontFamily: 'archivo',
        color: 'white'
    },
    txtView: {
        backgroundColor: 'white',
        width: "70%",
        elevation: 1,
        borderRadius: 15,
        marginTop: '4%',
        height: 43,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 0
    },
    txtInput: {
        height: 43,
        width: '100%',
        color: 'green',
        fontSize: 17,
    },

    continuebtn: {
        marginTop: '5%',
        height: 38,
        width: 120,
        backgroundColor: '#1E7F47',
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5
    },
    continuetxt: {
        color: 'white',
        fontWeight: '900',
        fontSize: 17
    },


    outsideView: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 9,
        alignItems: 'center',
        marginTop: 20
    },
    title: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: '600'
    },
    Mobtitle: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: '600'
    },
    MobtxtView: {
        backgroundColor: 'white',
        width: "50%",
        elevation: 1,
        borderRadius: 9,

        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 1
    },

    continueView: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }






})

export default UserRegisterDetails;
