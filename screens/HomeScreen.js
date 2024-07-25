import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Card, FAB } from "react-native-paper";

const HomeScreen = () => {
  const navigation = useNavigation();
  const categories = [
    { id: 1, name: "Sala", iconName: "bed" },
    { id: 2, name: "Dormitorio", iconName: "chair" },
    { id: 3, name: "Cocina", iconName: "weekend" },
    { id: 4, name: "Exteriores", iconName: "shelves" },
    { id: 5, name: "Sala", iconName: "bed" },
    { id: 6, name: "Dormitorio", iconName: "chair" },
    { id: 7, name: "Cocina", iconName: "weekend" },
    { id: 8, name: "Exteriores", iconName: "shelves" },
  ];

  const CategoryItem = ({ id, iconName }) => {
    return (
      <Pressable
        style={{
          marginHorizontal: 5,
          backgroundColor: "lightgrey",
          borderRadius: 50,
          width: 50,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 30,
        }}
        onPress={() =>
          navigation.navigate("Lista Productos", { categoryId: id })
        }
      >
        <MaterialIcons name={iconName} size={30} color="black" />
      </Pressable>
    );
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView
        horizontal
        style={{ marginVertical: 20 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {categories.map((item) => (
          <CategoryItem key={item.id} id={item.id} iconName={item.iconName} />
        ))}
      </ScrollView>
      <Text style={{ fontSize: 30, marginHorizontal: 30 }}>Lorem</Text>
      <Card
        style={{
          padding: 25,
          marginHorizontal: 30,
          height: 400,
          marginBottom: 60,
          position: "relative",
        }}
      >
        <Card.Cover
          source={{ uri: "https://picsum.photos/700" }}
          style={{ height: 325 }}
        />
        <Card.Actions style={{ margin: 20 }}>
          <FAB
            icon="plus"
            style={{
              position: "absolute",
              bottom: -3,
              right: -20,
              backgroundColor: "#6200ea",
              borderRadius: 15,
              height: 30,
              width: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
            color="white"
            onPress={() => console.log("Pressed")}
          />
        </Card.Actions>
      </Card>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
