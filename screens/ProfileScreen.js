import React from "react";
import { View, Text, Image } from "react-native";
import { Avatar, IconButton } from "react-native-paper";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <View style={{ alignItems: "center", marginTop: 100, marginBottom: 10 }}>
        <Avatar.Image
          size={175}
          source={{ uri: "https://picsum.photos/700" }}
        />
        <View style={{ alignItems: "center", marginTop: -40,}}>
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 25,
              elevation: 10,
              height: 50,
              width: 50
            }}
          >
            <IconButton icon="pencil" size={24} onPress={() => {console.log("edit icon pressed")}} />
          </View>
        </View>
      </View>
      <View
        style={{
          margin: 16,
          padding: 16,
          backgroundColor: "#FFFFFF",
          borderRadius: 8,
          elevation: 2,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 16 }}>
          Información personal
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <MaterialIcons name="person" size={24} />
          <View style={{ marginLeft: 16 }}>
            <Text style={{ fontSize: 14, color: "#888888" }}>Nombre</Text>
            <Text style={{ fontSize: 16 }}>Juana Diaz</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <MaterialIcons name="phone" size={24} />
          <View style={{ marginLeft: 16 }}>
            <Text style={{ fontSize: 14, color: "#888888" }}>Telefono</Text>
            <Text style={{ fontSize: 16 }}>+543816778899</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <MaterialIcons name="email" size={24} />
          <View style={{ marginLeft: 16 }}>
            <Text style={{ fontSize: 14, color: "#888888" }}>
              Correo electrónico
            </Text>
            <Text style={{ fontSize: 16 }}>juana.diaz@gmail.com</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <MaterialIcons name="location-on" size={24} />
          <View style={{ marginLeft: 16 }}>
            <Text style={{ fontSize: 14, color: "#888888" }}>Dirección</Text>
            <Text style={{ fontSize: 16 }}>Jose Marmol 2554</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
