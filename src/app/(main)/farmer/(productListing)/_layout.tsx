import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
const _layout = () => {
  return (
    <Stack>
    
     <Stack.Screen name='SelectVeg' options={{headerShown:false,headerStyle: {
backgroundColor: '#28AC60'
},headerTitle: 'Vegetable Selection',}}/>
    
     <Stack.Screen name='SelectFruits'options={{headerShown:false,headerStyle: {
backgroundColor: 'apple'
},}}/>
<Stack.Screen name='ListingPage' />
    </Stack>
  )
}

export default _layout