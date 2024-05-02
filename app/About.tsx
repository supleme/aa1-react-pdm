import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Logo from '../components/Logo'
import AboutApp from '../components/AboutApp'

export default function About() {
  return (
    <View style={styles.container}>
      <AboutApp/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent:'center',
    flex: 2
  },
})