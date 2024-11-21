import { View, Text, Button, ScrollView, Image, StyleSheet, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { Link, Redirect } from 'expo-router'

import AppIntroSlider from 'react-native-app-intro-slider'

const index = () => {


  const [showSlider, setShowSlider] = useState(true)

  const slides = [
    {
      key: 1,
      title: 'Title 1',
      text: 'Description.\nSay something cool',
      image: require('../../assets/images/favicon.png'),
      backgroundColor: '#59b2ab',
    },
    {
      key: 2,
      title: 'Title 2',
      text: 'Other cool stuff',
      image: require('../../assets/images/favicon.png'),
      backgroundColor: '#febe29',
    },
    {
      key: 3,
      title: 'Rocket guy',
      text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
      image: require('../../assets/images/favicon.png'),
      backgroundColor: '#22bcb5',
    }
  ];

  const renderSlide = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text>{item.title}</Text>
        <Image source={item.image} style={styles.imageStyle} />
        <Text >{item.text}</Text>

      </View>
    )
  }
  const _onDone = () => {
    setShowSlider(false)
  }

  return (
    <ScrollView>
      <View style={styles.container} >
        {
          showSlider ? <AppIntroSlider data={slides} renderItem={renderSlide} onDone={_onDone} /> :<Redirect href={'./select'}/>
          
        }
      </View>
    </ScrollView>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    height:'100%',
    backgroundColor: 'yellow',
    color: 'black',

  },

  imageStyle: {
    width:'50%',
    height:'50%',
    aspectRatio: 1,
    borderRadius: 20,
    marginLeft: 26,
    marginTop: 100
  },

  slide: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },

  ImageText: {

  },
  afterIntroContainer: {
    display: 'flex',
    flexDirection:'column',
    flex: 1,
    height: '100%',
    backgroundColor: 'yellow',
  },
  image: {

  },
  topview:{ 
    height:'60%',
    backgroundColor:'aqua',
  },
  bottomView:{
   height:'40%',
   backgroundColor:'red',
  
  }


})