import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>LoginScreen</Text>

      <Pressable onPress={() => navigation.navigate('Register')}>
        <Text>Register Screen</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('MainStack')}>
        <Text>Log in</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})