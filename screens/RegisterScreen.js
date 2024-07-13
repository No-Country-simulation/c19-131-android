import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>RegisterScreen</Text>

      <Pressable onPress={() => navigation.navigate('MainStack')}>
        <Text>Crear cuenta</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})