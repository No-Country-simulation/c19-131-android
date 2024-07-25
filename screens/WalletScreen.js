import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { paymentMethods } from "../utils/constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const formatCardNumber = (number) => {
    return number.replace(/\d(?=\d{4})/g, "*").replace(/(.{4})/g, "$1 ");
  };

const WalletScreen = () => {
  const PaymentMethodItem = ({
    bank,
    cardNumber,
    expDate,
    cardholder,
    provider,
    type,
  }) => {
    const formattedCardNumber = formatCardNumber(cardNumber);
    return (
      <View
        style={{
          backgroundColor: "#D1C4E9",
          margin: 20,
          borderRadius: 10,
          elevation: 10,
          padding: 15,
          flexDirection: "column",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{bank}</Text>
          <Pressable>
            <MaterialCommunityIcons
              name="trash-can-outline"
              color={"black"}
              size={25}
            />
          </Pressable>
        </View>
        <View style={{ marginVertical: 40 }}>
          <Text>{formattedCardNumber}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text>{expDate}</Text>
            <Text style={{fontSize: 16}}>{cardholder}</Text>
          </View>
          <View style={{alignItems: "flex-end"}}>
            <Text>{provider}</Text>
            <Text>{type}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <FlatList
        data={paymentMethods}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <PaymentMethodItem
            bank={item.bank}
            cardNumber={item.cardNumber}
            expDate={item.expDate}
            cardholder={item.cardholder}
            provider={item.provider}
            type={item.type}
          />
        )}
      ></FlatList>
    </View>
  );
};

export default WalletScreen;

const styles = StyleSheet.create({});
