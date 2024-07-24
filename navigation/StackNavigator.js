import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
import { FontAwesome, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import ShopsScreen from "../screens/ShopsScreen";
import WalletScreen from "../screens/WalletScreen";
import ConfigScreen from "../screens/ConfigScreen";
import AddPaymentMethod from "../screens/AddPaymentMethod";



const StackNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();  

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
          } else if (route.name === 'PerfilTab') {
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
      <Tab.Screen name="PerfilTab" component={ShowDrawerNavigation} options={{headerShown: false, title: "Perfil"}} />
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

  function goToAddPaymentMethod() {
    const navigation = useNavigation();
    return (
      <TouchableOpacity onPress={() => navigation.navigate("AddPaymentMethod")}>
        <MaterialCommunityIcons
          name="wallet-plus-outline"
          size={30}
          color="black"
          style={{ marginRight: 35 }}
        />
      </TouchableOpacity>
    );
  }

  function ShowDrawerNavigation() {
    return (
      <Drawer.Navigator
        initialRouteName="Perfil"
        drawerContent={(props) => {
          return (
            <DrawerContentScrollView {...props}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  marginVertical: 20,
                  marginHorizontal: 18,
                }}
              >
                Perfil
              </Text>
              <DrawerItem
                label={"Datos personales"}
                onPress={() => props.navigation.navigate("Perfil")}
                icon={() => (
                  <FontAwesome6
                    name="user"
                    color={'black'}
                    size={25}
                  />
                )}
                labelStyle={{color:'black', fontSize: 15}}
              />
              <DrawerItem
                label={"Mis Compras"}
                onPress={() => props.navigation.navigate("Shops")}
                icon={() => (
                  <MaterialCommunityIcons
                    name="shopping-outline"
                    color={'black'}
                    size={25}
                  />
                )}
                labelStyle={{color:'black', fontSize: 15}}
              />
              <DrawerItem
                label={"Mi billetera"}
                onPress={() => props.navigation.navigate("Wallet")}
                icon={() => (
                  <Ionicons
                    name="wallet-outline"
                    color={'black'}
                    size={25}
                  />
                )}
                labelStyle={{color:'black', fontSize: 15}}
              />
              <DrawerItem
                label={"Configuración"}
                onPress={() => props.navigation.navigate("Config")}
                icon={() => (
                  <SimpleLineIcons
                    name="settings"
                    color={'black'}
                    size={25}
                  />
                )}
                labelStyle={{color:'black', fontSize: 15}}
              />
              <DrawerItem
                label={"Cerrar sesión"}
                onPress={() => console.log("Cerrar sesion pressed")}
                icon={() => (
                  <MaterialIcons
                    name="logout"
                    color={'black'}
                    size={25}
                  />
                )}
                labelStyle={{color:'black', fontSize: 15}}
              />
            </DrawerContentScrollView>
          );
        }}
      >
        <Drawer.Screen name="Perfil" component={ProfileScreen} />
        <Drawer.Screen name="Shops" component={ShopsScreen} />
        <Drawer.Screen name="Wallet" component={WalletScreen} options={{headerRight: () => goToAddPaymentMethod()}} />
        <Drawer.Screen name="Config" component={ConfigScreen} />
        <Drawer.Screen name="AddPaymentMethod" component={AddPaymentMethod} />
      </Drawer.Navigator>
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