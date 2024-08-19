/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



function App(): React.JSX.Element {


  return (
    /* İlk textte bir özellik ve style verme anlatıldı
    ikinci texte text içinde metod kullanma anlatıldı */
    <SafeAreaView style={{ flex: 1, backgroundColor: "red", justifyContent: "center", alignItems: "center" }}>
      <Text numberOfLines={2} style={{ color: "white", fontWeight: "bold" }}>
        lorem ipsun dolar set amet lorem ipsun dolar set amet lorem ipsun dolar set amet lorem ipsun dolar set amet lorem ipsun dolar set amet
      </Text>
      <Text onPress={() => console.log("event gerçekleşti...")}>hello mydarling</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "red",
  },

});

export default App;
