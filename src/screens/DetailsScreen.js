import React from "react";
import { useNavigation , useRoute } from "@react-navigation/native";
import { View, Text, Button,StyleSheet } from "react-native";


function DetailsScreen() {
const navigation=useNavigation()
   const route=useRoute()
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Details Screen</Text>
            <Text style={styles.text}>Merhaba {route.params.name}</Text>
            <Button
                title="Go Back"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor:"purple"
    },
    text: {
      fontSize: 30,
      fontWeight: "bold",
    }
  });

export default DetailsScreen;