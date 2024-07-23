import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Button } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

const DetailScreen = () => {
  const route = useRoute();
  const { name, subtitle, image, description, price } = route.params;
  const [favourite, setFavourite] = useState(false)
  const iconName = favourite ? 'favorite' : 'favorite-border';
  const iconColor = favourite ? 'red' : 'black'

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ alignItems: "center", margin: 20 }}>
        <Image
          source={{ uri: image }}
          style={{
            width: "92%",
            height: 300,
            borderRadius: 20,
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: "#D1C4E9",
          padding: 20,
          marginHorizontal: 30,
          borderRadius: 10,
          elevation: 10,
        }}
      >
        <View style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <View >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>{name}</Text>
            <Text style={{ fontSize: 16 }}>{subtitle}</Text>
          </View>
          <Pressable onPress={() => setFavourite(!favourite)}>
            <MaterialIcons name={iconName} size={30} color={iconColor}/>
          </Pressable>
        </View>
        <Text style={{ marginTop: 15 }}>Descripción:</Text>
        <Text style={{ marginTop: 5 }}>{description}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>${price}</Text>
          <Button mode="contained">Agregar al carrito</Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
