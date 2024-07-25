import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Switch } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

const ConfigScreen = () => {
    const [isLocationEnabled, setIsLocationEnabled] = useState(false)
    const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false)

    const toggleLocationSwitch = () => setIsLocationEnabled(!isLocationEnabled);
    const toggleNotificationsSwitch = () => setIsNotificationsEnabled(!isNotificationsEnabled);
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1, padding: 30 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 10,
          borderBottomWidth: 1,
          borderColor: "#D3D3D3",
        }}
      >
        <Text style={{ fontSize: 18 }}>Ubicación</Text>
        <Switch value={isLocationEnabled} onValueChange={toggleLocationSwitch} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 10,
          borderBottomWidth: 1,
          borderColor: "#D3D3D3",
        }}
      >
        <Text style={{ fontSize: 18 }}>Notificaciones</Text>
        <Switch value={isNotificationsEnabled} onValueChange={toggleNotificationsSwitch}/>
      </View>
      <Pressable
        style={{
          marginVertical: 25,
          borderBottomWidth: 1,
          borderColor: "#D3D3D3",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 18 }}>Preferencias</Text>
        <MaterialIcons name="arrow-forward-ios" size={20} />
      </Pressable>
    </SafeAreaView>
  );
};

export default ConfigScreen;

const styles = StyleSheet.create({});
