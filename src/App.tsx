import { StyleSheet, Text, View } from 'react-native'
import React, { ReactElement } from 'react'
import AppStackNavigator from './navigators/AppStackNavigator'

const App = (): ReactElement => {
  return (
    <AppStackNavigator />
  )
}

export default App

const styles = StyleSheet.create({})