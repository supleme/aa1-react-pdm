import { View, Text } from 'react-native'
import React from 'react'
import List from '../components/List'
import Hamburguer from '../components/Hamburguer'
import { ActionSheetProvider, connectActionSheet } from '@expo/react-native-action-sheet'

export default function home() {
  return (
    <ActionSheetProvider>
      <View>
        <Hamburguer/>
        <List/>
      </View>
    </ActionSheetProvider>
  )
}