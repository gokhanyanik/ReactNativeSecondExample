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
    <SafeAreaView style={{flex:1,backgroundColor:"red",justifyContent:"center",alignItems:"center"}}>
      <Text>hello mydarling
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex:1,
    backgroundColor:"red",
  },
 
});

export default App;
