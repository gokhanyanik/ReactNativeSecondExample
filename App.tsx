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
  View,
  Text
} from 'react-native';
const ColeredView=(props:any)=>{
  return(
    <View style={{ flex:1, backgroundColor:props.arkaPlan }}>
      <Text>{props.text}</Text>
    </View>
  )
}
function App(): React.JSX.Element {
  return (
    // propsları yazarken parantez kullanmak şart değildir.Parantez olmadan da string ifade yazılabilir.
    <SafeAreaView style={styles.bacground}>
      <ColeredView arkaPlan={"purple"} text="ali"   />  
      <ColeredView arkaPlan="yellow" text="veli"  />
      <ColeredView arkaPlan="orange" text="mehmet"/>
      
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  bacground: {
    backgroundColor: "brown",
    flex: 1,  
    
  }
});
export default App;
