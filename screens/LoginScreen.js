import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { baseUrl } from "../utils/constants";
import { Button, TextInput } from "react-native-paper";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ marginHorizontal: 30 }}>
        <View style={{ marginTop: 150 }}>
          <Text style={{ fontSize: 40, fontWeight: "bold" }}>
            Ingresa con tu cuenta
          </Text>
        </View>
        <View style={{ marginTop: 30 }}>
          <TextInput
            label="Correo Electrónico"
            mode="outlined"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={{ marginHorizontal: 15 }}
          />
          <TextInput
            label="Contraseña"
            mode="outlined"
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            secureTextEntry={true}
            style={{ marginTop: 50, marginHorizontal: 15 }}
          />
          <Text
            style={{
              textDecorationLine: "underline",
              fontSize: 13,
              marginTop: 3,
              marginLeft: 30,
            }}
          >
            Olvidaste tu contraseña?
          </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Button
            mode="contained"
            onPress={()=> navigation.navigate("MainStack")}
            style={{ marginTop: 20, width: "70%" }}
          >
            Iniciar Sesion
          </Button>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>
            No tienes cuenta?{" "}
          </Text>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text
              style={{
                textDecorationLine: "underline",
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              Regístrate aquí
            </Text>
          </Pressable>
        </View>

        {/* <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 30,
          }}
        >
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "#C0C0C0",
              marginRight: 10,
            }}
          />
          <Text style={{ color: "#C0C0C0" }}> o </Text>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "#C0C0C0",
              marginLeft: 10,
            }}
          />
        </View>

        <View style={{ alignItems: "center" }}>
          <Button
            mode="outlined"
            style={{ width: "70%" }}
            labelStyle={{ fontWeight: "bold" }}
            icon={'google'}
          >
            Ingresa con Google
          </Button>
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
