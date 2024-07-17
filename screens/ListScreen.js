import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';

const ListScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { categoryId } = route.params;

  const allProducts = [
    { id: 1, name: "Product 1", category: 1 },
    { id: 2, name: "Product 2", category: 1 },
    { id: 3, name: "Product 3", category: 2 },
    { id: 4, name: "Product 4", category: 2 },
    { id: 5, name: "Product 5", category: 3 },
    { id: 6, name: "Product 6", category: 4 },
  ];

  const products = allProducts.filter(product => product.category === categoryId);

  const ProductItem = ({ name }) => {
    return (
      <Pressable style={{ marginVertical: 5 }} onPress={() => navigation.navigate('Detalle Producto')}>
        <Text>{name}</Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView style={{ marginHorizontal: 20, marginVertical: 10 }}>
        {products.map(product => (
          <ProductItem key={product.id} name={product.name} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListScreen;

const styles = StyleSheet.create({});
