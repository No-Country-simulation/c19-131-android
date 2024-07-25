import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";

const AddPaymentMethod = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [bank, setBank] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cardholder, setCardholder] = useState("");
  const [provider, setProvider] = useState("");
  const [type, setType] = useState("");
  const [securityCode, setSecurityCode] = useState("");

  const handleExpDateChange = (text) => {
    const cleaned = text.replace(/\D/g, "");
    let formatted = cleaned;
    if (cleaned.length > 2) {
      formatted = `${cleaned.substring(0, 2)}/${cleaned.substring(2, 4)}`;
    }
    setExpDate(formatted);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <KeyboardAvoidingView
        style={{ marginHorizontal: 30, marginVertical: 20, }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <TextInput
            label="Nombre del titular"
            mode="outlined"
            value={cardholder}
            onChangeText={setCardholder}
            keyboardType="default"
          />
          <TextInput
            label="Número de tarjeta"
            mode="outlined"
            value={cardNumber}
            onChangeText={setCardNumber}
            keyboardType="numeric"
            style={{ marginTop: 30 }}
          />
          <TextInput
            label="CVC"
            mode="outlined"
            value={securityCode}
            onChangeText={setSecurityCode}
            keyboardType="numeric"
            style={{ marginTop: 30 }}
            secureTextEntry={true}
          />
          <TextInput
            label="Vencimiento"
            mode="outlined"
            value={expDate}
            onChangeText={handleExpDateChange}
            keyboardType="numeric"
            style={{ marginTop: 30 }}
          />
          <TextInput
            label="Banco"
            mode="outlined"
            value={bank}
            onChangeText={setBank}
            keyboardType="default"
            style={{ marginTop: 30 }}
          />
          <TextInput
            label="Tipo de tarjeta"
            mode="outlined"
            value={type}
            onChangeText={setType}
            keyboardType="default"
            style={{ marginTop: 30 }}
          />
          <Button mode="contained" style={{marginTop: 70}} onPress={() => console.log("Agregar Pressed")}>Agregar</Button>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddPaymentMethod;

const styles = StyleSheet.create({});
