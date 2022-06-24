import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Home from './src/components/Home/Home'

const App = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c4c4c4',
    flex: 1,
    margin: 15,
    borderRadius: 10,
  }
})

export default App