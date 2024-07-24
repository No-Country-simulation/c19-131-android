import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { allProducts } from "../utils/constants";
import { useNavigation } from "@react-navigation/native";

const FavouritesScreen = () => {
  const navigation = useNavigation();
  const favouritesProducts = allProducts.filter(
    (product) => product.favourite === true
  );

  const FavouriteItem = ({ name, subtitle, image, description, price }) => {
    return (
      <Pressable onPress={() => navigation.navigate("Detalle Producto", {name: name, subtitle: subtitle, image: image, description: description, price: price})}
        style={{
          marginHorizontal: 20,
          marginVertical: 10,
          flexDirection: "row",
          borderRadius: 10,
          backgroundColor: '#D1C4E9',
          elevation: 10,
        }}
      >
        <View>
          <Image
            source={{ uri: image }}
            style={{
              width: 90,
              height: 80,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          />
        </View>
        <View style={{ paddingLeft: 20, justifyContent: "center" }}>
          <Text style={{ marginVertical: 3, fontSize: 16, fontWeight: "bold" }}>
            {name}
          </Text>
          <Text style={{ marginVertical: 3, fontSize: 14 }}>{subtitle}</Text>
        </View>
      </Pressable>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
        data={favouritesProducts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <FavouriteItem
            name={item.name}
            subtitle={item.subtitle}
            image={item.image}
            description={item.description}
            price={item.price}
          />
        )}
      ></FlatList>
    </SafeAreaView>
  );
};

export default FavouritesScreen;

const styles = StyleSheet.create({});
