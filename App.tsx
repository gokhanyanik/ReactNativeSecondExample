/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Platform,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.bacground}>
     
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  bacground: {
    backgroundColor: Platform.OS == "ios" ? "yellow" : "gray",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default App;
