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
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  useEffect(() => {
    console.log("Her ubdate edildiğinde çalişicak", count)
  }) //Her ubdate edildiğinde çalişir.
  useEffect(() => {
    console.log("sadece ilk rander edildiğinde çalişicak", count)
  }, [])//ilk render edildiğinde çalışır
  useEffect(() => {
    console.log("Sadece count değeri ubdate edildiğinde çalişir", count)
  }, [count])//Her count useEffect'i update ecildiğinde çalişir.Yani farklı bir useEffet ubdate edildiğinde çalişmayacak.Count değerine bağli olarak çalişir
  return (
    <SafeAreaView style={styles.bacground}>
      <Text style={{ color: "white" }}>Count: {count}</Text>
      <Button
        title="up"
        onPress={() => setCount(count + 1)}
      />
       <Text style={{ color: "white" }}>Count2: {count2}</Text>
      <Button
        title="up"
        onPress={() => setCount2(count2 + 1)}
      />

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
