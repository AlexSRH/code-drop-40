import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import * as Updates from 'expo-updates'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  useEffect(() => {
    async function updateApp() {
      const {} = async Updates.
    }

    updateApp()
  }, [])

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
