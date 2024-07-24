import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ListScreen from '../screens/ListScreen';
import DetailScreen from '../screens/DetailScreen';
import CartScreen from '../screens/CartScreen'
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";



const StackNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  

  function BottomTabs() {
    
    return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Productos') {
            iconName = focused ? 'home-sharp' : 'home-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Guardados') {
            iconName = focused ? 'bookmark' : 'bookmark-o';
            return <FontAwesome name={iconName} size={size} color={color} />;
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'user-circle' : 'user-circle-o';
            return <FontAwesome name={iconName} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'black',
      })}
    >
      <Tab.Screen name="Productos" component={ProductStack} options={{ headerShown: false }} />
      <Tab.Screen name="Guardados" component={FavouriteStack} options={{ headerShown: false }} />
      <Tab.Screen name="Perfil" component={ProfileScreen} options={{headerShown: true, headerRight: () => showDrawerNavigation()}} />
    </Tab.Navigator>
  );
  }

  function goToCart() {
    const navigation = useNavigation();
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Carrito")}>
        <MaterialCommunityIcons
          name="cart-outline"
          size={30}
          color="black"
          style={{ marginRight: 35 }}
        />
      </TouchableOpacity>
    );
  }

  function showDrawerNavigation() {
    return (
      <TouchableOpacity onPress={()=>{console.log("pressed")}}>
        <MaterialCommunityIcons
          name="menu"
          size={30}
          color="black"
          style={{ marginRight: 35 }}
        />
      </TouchableOpacity>
    );

  }

  function ProductStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: true,
            title: "Productos",
            headerRight: () => goToCart(),
          }}
        />
        <Stack.Screen
          name="Lista Productos"
          component={ListScreen}
          options={{
            headerShown: true,
            title: "Lista de Productos",
            headerRight: () => goToCart(),
          }}
        />
        <Stack.Screen
          name="Detalle Producto"
          component={DetailScreen}
          options={{
            headerShown: true,
            title: "Detalle",
            headerRight: () => goToCart(),
          }}
        />
        <Stack.Screen
          name="Carrito"
          component={CartScreen}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    );
  }

  function FavouriteStack() {
    return(
      <Stack.Navigator>
        <Stack.Screen
          name="Favoritos"
          component={FavouritesScreen}
          options={{
            headerShown: true,
            title: "Guardados",
            headerRight: () => goToCart(),
          }}
        />
        <Stack.Screen
          name="Detalle Producto"
          component={DetailScreen}
          options={{
            headerShown: true,
            title: "Detalle",
            headerRight: () => goToCart(),
          }}
        />
        <Stack.Screen
          name="Carrito"
          component={CartScreen}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    )
  }

  const AuthStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainStack"
          component={MainStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  };

  function MainStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Auth"
          component={AuthStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});