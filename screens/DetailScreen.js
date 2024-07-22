import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { Button } from "react-native-paper";

const DetailScreen = () => {
  const route = useRoute();
  const { name, subtitle, image } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{alignItems: "center", margin: 20}}>
        <Image
          source={{ uri: image }}
          style={{
            width: "90%",
            height: 300,
            borderRadius: 20,
          }}
        />
      </View>

      <Text>{name}</Text>
      <Text>{subtitle}</Text>
      <Button mode="contained">Agregar al carrito</Button>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
