import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";   // navigation kullanımı için import edildi.
import { View, Text, Button, StyleSheet, TextInput } from "react-native";


function HomeScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen(Anasayfa)</Text>
      <TextInput
        style={styles.input}
        placeholder="Whats your name"
        value={name}
        onChangeText={setName}
      />
      <Button
        title="go to Detail page"
        onPress={() => navigation.navigate('Detail', { name: name })}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow"
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    width: 200,
    height: 50,
    borderWidth: 1,
    borderColor: "green",
    padding: 7,
    color: "green",
    fontSize: 15
  }
});

export default HomeScreen;
