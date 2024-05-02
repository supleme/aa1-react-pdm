import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Logo() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>
      <Text style={styles.text}>CLOCK</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent:'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignContent:'center',
  },
  logo: {
    alignContent: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    marginBottom: 15
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 26 
  }
});