import { View, Text,StyleSheet ,ScrollView } from 'react-native'
import React from 'react'
import { Container } from 'lucide-react-native'

const index = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}></View>
      <View style={styles.MainContainer}><Text>dkdk</Text></View>

    </ScrollView>
  )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
      
      },

})

export default index