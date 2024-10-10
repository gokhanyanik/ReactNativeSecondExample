
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


function App(): React.JSX.Element {
  return (
    <Provider store={Store}>

      <View style={styles.container}>
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
