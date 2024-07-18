import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const categories = [
    { id: 1, name: "Sala" },
    { id: 2, name: "Dormitorio" },
    { id: 3, name: "Cocina" },
    { id: 4, name: "Exteriores" }
  ];

  const CategoryItem = ({ id, name }) => {
    return (
      <Pressable style={{ marginVertical: 5 }} onPress={() => navigation.navigate('Lista Productos', { categoryId: id })}>
        <Text>{name}</Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView style={{ marginHorizontal: 20, marginVertical: 10 }}>
        {categories.map(item => (
          <CategoryItem key={item.id} id={item.id} name={item.name} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
