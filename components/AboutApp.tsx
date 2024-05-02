import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function AboutApp() {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: 'white'}}>
        <View style={styles.header}>
          <Text style={styles.headerText}>CLOCK</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentText}>
            Versão: 1.0
          </Text>
          <Text style={styles.contentText}>
            Desenvolvedor: Cesar Valentim Abreu
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
  },
});
