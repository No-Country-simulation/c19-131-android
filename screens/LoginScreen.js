import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { baseUrl } from '../utils/constants';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  function handleOnTapLoginButton() {
    const userData = { email: email, password: password };
    axios
      .post(baseUrl + "/login", userData)
      .then((res) => {
        console.log(res.data);
        if (res.data.status === 200) {
          navigation.navigate("MainStack");
          console.log("Ingreso exitoso");
          setEmail("");
          setPassword("");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        if (error.response && error.response.status === 401) {
          alert("Credenciales inválidas.");
        } else {
          alert("Ocurrió un error. Intente de nuevo más tarde.");
        }
      });
  }
  return (
    <SafeAreaView>
      <View style={{marginHorizontal: 20, marginTop: 30}}>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 5,
            borderColor: "black",
            fontSize: 14,
            height: 41,
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              flex: 1,
              fontSize: 14,
            }}
            value={email}
            onChangeText={setEmail}
            placeholder="Inserte email"
            placeholderTextColor="#C0C0C0"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 5,
            borderColor: "black",
            fontSize: 14,
            height: 41,
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <TextInput
            style={{
              flex: 1,
              fontSize: 14,
            }}
            value={password}
            onChangeText={setPassword}
            placeholder="Inserte contraseña"
            placeholderTextColor="#C0C0C0"
            autoCapitalize="none"
            secureTextEntry={true}
          />
        </View>
      </View>

      <Pressable onPress={handleOnTapLoginButton}>
        <Text>Log in</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("Register")}>
        <Text>Register Screen</Text>
      </Pressable>

      
    </SafeAreaView>
  );
}

export default LoginScreen

const styles = StyleSheet.create({})