import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ alignItems: "center", marginTop: 80 }}>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>Bienvenido</Text>
      </View>

      <View>
        
      </View>

      <Pressable
        style={{
          backgroundColor: "#594c80",
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          height: 40,
          marginVertical: 20,
          marginHorizontal: 65,
        }}
        onPress={() => navigation.navigate("MainStack")}
      >
        <Text style={{ color: "white", fontSize: 14 }}>Registrarse</Text>
      </Pressable>
    </SafeAreaView>
  );
}

export default RegisterScreen

const styles = StyleSheet.create({})