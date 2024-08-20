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
  Text,
  TextInput,
  Button,

} from 'react-native';

function App(): React.JSX.Element {
  const [text, setText] = useState("")
  return (
    <SafeAreaView style={styles.bacground}>
      <TextInput
        style={{ width: 200, height: 50, borderWidth: 1, padding: 7 }}
        placeholder='What is your name' // imput içerisinde almak istediğimiz bilgi yazılır
        value={text} //burada girilen değer imput içinde değiştirilemez bilgi olur yani imputa birşey yazamazsınız.
        onChangeText={setText} // value değerini eğer değiştirmez isek birşey yazamayız ancak onchange ile settext değerini atayarak değişim yapılabilir. 
      //secureTextEntry={true}  // eğer imput içerisindeki bilgi bir pasword ise bu ozellik kullanılır ve girilen değeri gizler.
      //keyboardType='numeric'  // bu özellik kullanıcıya kolaylık sağlamak adına hangi tipte bilgi almak istersek onun tipinde klavye yada @ işareti gibi kullanıcı karşısına çıkarır.
      />
      <Text>Text: {text}</Text>
      <Button
      title='Press me!!'  // butonun üzerindeki başlık.
      onPress={()=>console.log("butona basıldı")} // butona basıldığında hangi eventin gerçekleşmesini istiyorsak onPressde tanımlıyoruz.
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  bacground: {
    backgroundColor: "lightgray",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"

  }

});

export default App;
