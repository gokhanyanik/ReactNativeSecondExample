/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';


function DetailScreen(route: any, navigation: any) {
  const { username } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{username} 'in detay ekranı</Text>
      <Button
        title="geri git"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen(Anasayfa)</Text>
      <Button
        title="go to Detail page"
        onPress={() => navigation.navigate('Detail', { username: 'gökhan' })}
      />
    </View>
  );
}
const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Detail" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  bacground: {
    backgroundColor: "brown",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  }
});
export default App;
