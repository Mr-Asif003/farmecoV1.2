import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Header from '@/src/components/molecules/header'
import { SafeAreaView } from 'react-native-safe-area-context'
const index = () => {
  return (
   <SafeAreaView>
    <Header/>
   </SafeAreaView>
  )
}

export default index;