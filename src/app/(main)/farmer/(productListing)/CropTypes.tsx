import { FlatList, View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'


// import auth from '../../../firebaseConfig'
import { db, auth } from '@/src/app/firebaseConfig';

import { doc, getDoc } from "firebase/firestore";
import { BlurView } from 'expo-blur';
import selectVeg from './selectVeg';
import SelectCrops from './SelectCrops';
//icons
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import { useRouter } from 'expo-router';


const CropTypeSelection = () => {
  const router = useRouter()
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


  //blur selection ...
  const [selectedType, setSelectedType] = useState(null);

  console.log(selectedType)
  if (selectedType === 1) {
    router.push('./SelectCrops')
  }

  const types = [
    { id: 1, name: 'Crops' },
    { id: 2, name: 'Vegetables' },
    { id: 3, name: 'Fruits' },
  ];

  const onTapFunction = (id) => {
   
    tapChoose(id)
  }
  const tapChoose=(id)=>{
    if (id === 1) {
      router.push('./SelectCrops')
    }
    else if(id === 2) {
      router.push('./SelectVeg')
    }
    else if(id === 3) {
      router.push('./SelectFruits')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header userName={''} />
      </View>
      <View style={styles.MainContainer}>
        <View style={styles.mainitems}>
          <View style={styles.userNameContainer}>
            <Text style={styles.HiText}>Hi</Text>
            <Text style={styles.userName}>{userName}</Text>
            <Text style={styles.chooseText}>Which type of Crops do you want to sell!</Text>
          </View>
          <View style={styles.categoriesContainer}>

            <View style={styles.choosecontainer}>
              {types.map((type) => (
                <TouchableOpacity
                  key={type.id}
                  style={styles.option}

                  onPress={() => onTapFunction(type.id)}
                >
                  <BlurView
                    intensity={selectedType === type.id ? 50 : 30}
                    tint={selectedType === type.id ? 'light' : 'dark'}
                    style={styles.blurView}
                  >
                    <Text style={styles.optionText}>
                      {type.name} {selectedType === type.id ? '(Selected)' : ''}
                    </Text>
                  </BlurView>
                </TouchableOpacity>
              ))}
            </View>









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
    backgroundColor: '#28Ac60'
  },
  headerContainer: {
    height: '14%',
  },
  MainContainer: {


    display: 'flex',
    height: 2000,
    backgroundColor: 'white',

    shadowColor: 'black',
    shadowOffset: { width: 100, height: 100 },
    shadowOpacity: 1,
    shadowRadius: 2,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 10,
    margin: 5,
    marginBottom: 0,


  },
  mainitems: {
    flex: 1,
    margin: 10,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: 0,
    display: 'flex',
    flexDirection: 'column',
    elevation: 3,
  },
  userNameContainer: {

  },
  chooseText: {
    fontSize: 20,
    fontWeight: '500'
  },
  HiText: {
    fontSize: 25,
    fontWeight: '400'
  },
  userName: {
    fontSize: 25,
    fontWeight: '600'
  },
  categoriesContainer: {
    marginTop: 20,
    height: 500,
  },

  selectCategoriesContainer: {

    width: '100%',
    display: 'flex',

  },

  choosecontainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  option: {
    width: '90%',
    height: 120,
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 20,
  },
  blurView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    fontSize: 20,
  },
  optionText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },








})

export default CropTypeSelection;

