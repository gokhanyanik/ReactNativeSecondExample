
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import { Provider } from 'react-redux';
import { Store } from './Store';
import { Counter } from './Counter';
import { Foo } from './Foo';
import { Bar } from './Bar';


function App(): React.JSX.Element {
  return (
    //provider' lar sarmalı içine aldığı tüm komponentlere global state'e erişim olanağı sağlar.Bir adet props alır ve değerine kendi store'umuzun ismini veririz.
    <Provider store={Store}>   

      <View style={styles.container}>
        <Bar/>
        <Foo />
        <Counter />
      </View>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

});
export default App;
