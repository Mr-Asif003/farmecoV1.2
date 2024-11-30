import { FlatList, View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Container } from 'lucide-react-native'
import Header from '../../../../components/molecules/Header';
import TabBarOption from '@/src/components/molecules/TabBarOption';
// import auth from '../../../firebaseConfig'
import { db, auth } from '@/src/app/firebaseConfig';

import { doc, getDoc } from "firebase/firestore";
import { trendingProducts, seasonalProducts, closureImgs } from '../fdb/trendingProduct'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import FruitTabBarOption from '@/src/components/molecules/fruitTabBar';



const SelectFruits = () => {
  const navigation = useNavigation()
  const router=useRouter()
  //extracting name

  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));//to get collection from user i write this code
          if (userDoc.exists()) {
            const userData = userDoc.data();//to get data from user i write this code
            setUserName(userData.name || "User"); // Fallback to "User" if name is not set
          } else {
            console.warn("User data not found in Firestore.");
          }
        } catch (error) {
          console.error("Error fetching user data:", error.message);
        }
      } else {
        console.warn("No authenticated user.");
      }
      setIsLoading(false);
    };

    fetchUserData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.openDrawer()} // Opens the right-side drawer
        >
          <FontAwesome name="align-left" color="#000" size={24} />
        </TouchableOpacity>
       <View>
        <View><Text style={styles.hello}> Hello {userName}</Text></View>
       </View>
       <Text style={styles.welcome}>Welcome to the Fruit Sell Store</Text>
        
      </View>
      <View style={styles.tranButton}>
        <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.vegbtn} onPress={()=>router.replace('./SelectVeg')}  ><Text style={styles.vegtxt} >Vegetables</Text></TouchableOpacity>
        <TouchableOpacity style={styles.fruitbtn} ><Text style={styles.fruittxt} >Fruits</Text></TouchableOpacity>
        </View>
        </View>

        {/* tabbar */}

      <View style={styles.tabBar}>
         <FruitTabBarOption/>

      </View>



      <View style={styles.mainContainer}></View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  header: {
    backgroundColor: '#d80032',
    height: 120
  },
  tabBar: {
   height:75,
  },


  mainContainer: {

  },
  button: {
    padding: 5,
    marginTop: 10,
    borderRadius: 5,
    marginLeft: 10
  },
  hello:{
  fontSize:20,
  fontWeight:'500'
  },
  welcome:{
    marginTop:10,
  fontSize:16,
  fontWeight:'400'
  },
  tranButton:{
    backgroundColor: '#d80032',
   marginBottom:10,
    padding:5
  },
  vegbtn:{
    height:34.5,
    width:'50%',
   
    display:'flex',
    justifyContent:'center',
    alignItems:'center',

  },
  fruitbtn:{
  
    height:35,
    width:'50%',
    backgroundColor:'#9d0208',
    display:'flex',
    justifyContent:'center',
     alignItems:'center',
   
    
     borderRadius:20,
   elevation:10
    
  },
  fruittxt:{
    fontSize:25,
    fontWeight:'500',
     color:'white'
  },
  vegtxt:{
    fontSize:22,
    fontWeight:'400',
    color:'black'
  },
  btnContainer:{
    height: 34,
    display:'flex',
    flexDirection:'row',
    backgroundColor:'#f7cad0',
    borderRadius:20,
    marginHorizontal:10,
  
  }
  


})

export default SelectFruits;
