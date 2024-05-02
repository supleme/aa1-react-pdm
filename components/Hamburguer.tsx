import React from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

export default function Hamburguer() {
  const { showActionSheetWithOptions } = useActionSheet();
  const navigation = useNavigation();

  const onPress = () => {
    const options = ['Sobre', 'Logout', 'Cancel'];
    const destructiveButtonIndex = 1;
    const cancelButtonIndex = 2;

    showActionSheetWithOptions({
      options,
      cancelButtonIndex,
      destructiveButtonIndex
    }, (selectedIndex?: number) => {
      if (selectedIndex !== undefined) {
        switch (selectedIndex) {
          case 0:
            router.navigate('About');
            break;

          case destructiveButtonIndex:
            navigation.reset({
              index: 0,
              routes: [{ name: 'index'}],
            })
            break;

          case cancelButtonIndex:
            break;

          default:
            break;
        }
      }
    });
  };

  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Image source={require('../assets/images/menu-aberto.png')} style={styles.logo}/>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 20,
    height: 20,
    paddingTop: 10,
    justifyContent: 'flex-start'
  }  
});
