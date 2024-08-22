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
  View
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.bacground}>
     <View style={{width:100,height:75,backgroundColor:"purple"}}/>
     <View style={{width:100,height:75,backgroundColor:"yellow"}}/>
     <View style={{width:100,height:75,backgroundColor:"orange"}}/>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  bacground: {
    backgroundColor: "brown",
    flex: 1,  // flex viewlerin boyutunu belirler ve 1 değerini alması alanın tamamını kaplar.
    flexDirection:"row" // elementleri sağdan sola dizer.
  }
});
export default App;
