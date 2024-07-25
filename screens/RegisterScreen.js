import {
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Button, TextInput } from "react-native-paper";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasswords] = useState("");
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <KeyboardAvoidingView style={{ marginHorizontal: 30 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View
            style={{ alignItems: "center", marginTop: 80, marginBottom: 30 }}
          >
            <Text style={{ fontSize: 40, fontWeight: "bold" }}>Bienvenido</Text>
          </View>

          <View>
            <TextInput
              label="Nombre"
              mode="outlined"
              value={firstName}
              onChangeText={setFirstName}
              keyboardType="default"
            />
            <TextInput
              label="Apellido"
              mode="outlined"
              value={lastName}
              onChangeText={setLastName}
              keyboardType="default"
              style={{ marginTop: 30 }}
            />
            <TextInput
              label="Dirección"
              mode="outlined"
              value={address}
              onChangeText={setAddress}
              keyboardType="default"
              style={{ marginTop: 30 }}
            />
            <TextInput
              label="Teléfono"
              mode="outlined"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="numeric"
              style={{ marginTop: 30 }}
            />
            <TextInput
              label="Correo Electrónico"
              mode="outlined"
              value={email}
              onChangeText={setEmail}
              keyboardType="default"
              style={{ marginTop: 30 }}
            />
            <TextInput
              label="Contraseña"
              mode="outlined"
              value={password}
              onChangeText={setPasswords}
              keyboardType="default"
              autoCapitalize="none"
              style={{ marginTop: 30 }}
              secureTextEntry={true}
            />
          </View>

          <Button mode="contained" style={{ marginTop: 50, marginBottom: 30 }} onPress={() => navigation.navigate('MainStack')}>
            Registrarse
          </Button>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
