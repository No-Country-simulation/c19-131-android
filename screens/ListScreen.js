import { FlatList, Pressable, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';

const ListScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { categoryId } = route.params;

  const allProducts = [
    { id: 1, name: "Product 1", subtitle: "Subtitle 1", category: 1, image: 'https://picsum.photos/700' },
    { id: 2, name: "Product 2", subtitle: "Subtitle 2", category: 1, image: 'https://picsum.photos/700' },
    { id: 3, name: "Product 3", subtitle: "Subtitle 3", category: 2, image: 'https://picsum.photos/700' },
    { id: 4, name: "Product 4", subtitle: "Subtitle 4", category: 2, image: 'https://picsum.photos/700' },
    { id: 5, name: "Product 5", subtitle: "Subtitle 5", category: 3, image: 'https://picsum.photos/700' },
    { id: 6, name: "Product 6", subtitle: "Subtitle 6", category: 4, image: 'https://picsum.photos/700' },
    { id: 7, name: "Product 7", subtitle: "Subtitle 7", category: 1, image: 'https://picsum.photos/700' },
    { id: 8, name: "Product 8", subtitle: "Subtitle 8", category: 1, image: 'https://picsum.photos/700' },
    { id: 9, name: "Product 9", subtitle: "Subtitle 9", category: 1, image: 'https://picsum.photos/700' },
    { id: 10, name: "Product 10", subtitle: "Subtitle 10", category: 1, image: 'https://picsum.photos/700' },
    { id: 11, name: "Product 11", subtitle: "Subtitle 11", category: 1, image: 'https://picsum.photos/700' },
    { id: 12, name: "Product 12", subtitle: "Subtitle 12", category: 1, image: 'https://picsum.photos/700' },
    { id: 13, name: "Product 13", subtitle: "Subtitle 13", category: 1, image: 'https://picsum.photos/700' },
    { id: 14, name: "Product 14", subtitle: "Subtitle 14", category: 1, image: 'https://picsum.photos/700' },
  ];

  const products = allProducts.filter(product => product.category === categoryId);

  const ProductItem = ({ name, subtitle, image }) => {
    return (
      <Pressable
        style={{
          marginHorizontal: 10,
          marginBottom: 10,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: 'black',
          width: "45%",
          height: 'auto',
          backgroundColor: '#D1C4E9'
        }}
        onPress={() => navigation.navigate("Detalle Producto", {name: name, subtitle: subtitle, image: image})}
      >
        <Image
          source={{ uri: image }}
          style={{
            width: "100%",
            height: 200,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        />
        <Text style={{ marginHorizontal: 20, marginTop: 10, fontSize: 14, fontWeight: "bold" }}>{name}</Text>
        <Text style={{ marginHorizontal: 20, marginTop: 5, marginBottom: 15, fontSize: 12 }}>{subtitle}</Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <FlatList
        data={products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (<ProductItem name={item.name} subtitle={item.subtitle} image={item.image} />)}
        numColumns={2}
      ></FlatList>
    </SafeAreaView>
  );
};

export default ListScreen;

const styles = StyleSheet.create({});
