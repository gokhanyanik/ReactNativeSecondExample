/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';



function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.bacground}>
     
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  bacground: {
    backgroundColor: "brown",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default App;
