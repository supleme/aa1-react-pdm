import { Button, StyleSheet, Text, View } from "react-native";
import Login_ from "../components/Login_";
import { Link, Redirect, useRouter } from "expo-router";
import Logo from "../components/Logo";

export default function Page() {
  
  let router = useRouter();

  return (
    <View style={styles.container}> 
      <View style={{ flex: 2 }}>
        <Logo/>
      </View>
      <View style={{ flex: 3 }}>
        <Login_/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    fontFamily: 'Helvetica',
    fontSize: 50
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  text: {
    fontFamily: 'Helvetica',
    fontSize: 30
  }
});
