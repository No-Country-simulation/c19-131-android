import { FlatList, Pressable, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { allProducts } from '../utils/constants';

const ListScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { categoryId } = route.params;

  const products = allProducts.filter(product => product.category === categoryId);

  const ProductItem = ({ name, subtitle, image, description, price }) => {
    return (
      <Pressable
        style={{
          marginHorizontal: 10,
          marginBottom: 10,
          borderRadius: 10,
          borderColor: 'black',
          width: "45%",
          height: 'auto',
          backgroundColor: '#D1C4E9',
          elevation: 2
        }}
        onPress={() => navigation.navigate("Detalle Producto", {name: name, subtitle: subtitle, image: image, description: description, price: price})}
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
        renderItem={({ item }) => (
          <ProductItem
            name={item.name}
            subtitle={item.subtitle}
            image={item.image}
            description={item.description}
            price={item.price}
          />
        )}
        numColumns={2}
      ></FlatList>
    </SafeAreaView>
  );
};

export default ListScreen;

const styles = StyleSheet.create({});
