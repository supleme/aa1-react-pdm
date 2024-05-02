import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import Logo from './Logo';
import { useRouter } from 'expo-router';

export default function Login() {
  // Define estados para 'user', 'password' e 'count' usando o useState hook 
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [count, setCount] = useState(0);

  let router = useRouter(); 

  // Função que cria um alerta de erro ao fazer login
  const createAlert = () => {
    Alert.alert('Erro ao logar', 'Usuário ou senha incorreta' , [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      {text: 'OK'},
    ])
  }

  // Função que manipula o evento de login
  const handleLogin = () => {
    if (user === "cesar" && password == "123"){
      router.navigate(`/home`)
    } 
    else {
      createAlert();
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setUser}
        style={styles.input}
        placeholder='Usuário'
      />
      <TextInput
        onChangeText={setPassword}
        style={styles.input} 
        placeholder='Password'
        textContentType='password'
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <View style={styles.containerTouch}>
          <Text style={styles.inputLogin} >Logar</Text>
          <Image source={require('../assets/images/logo.png')} style={styles.logo}/>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    height: 40,
    width: 40,
    marginLeft: 20
  },
  input: {
    height: 50,
    width: 250,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    textAlign: 'center'   
  },
  button: {
    width: 250,
    height: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0081f1',
    borderRadius: 15,
    textAlign: 'center'
  },
  inputLogin: {
    fontSize: 20, 
    fontWeight: 'bold',
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: 60, 
    marginTop: 6
  },
  containerTouch: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
})