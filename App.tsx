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
  Alert,
  ScrollView,

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
        onPress={() => Alert.alert("Hello " + text, "Günün nasıl geçiyor",
          [
            { text: "İYİ", onPress: () => console.log("iyi olmana sevindim") },// buradaki onPres kullanmamızın amacı hangisini tercih ettiğimizin kontolünü yapmak.
            { text: "KÖTÜ", onPress: () => console.log("Sorun nedir?") }

          ]
        )}
      />
      <ScrollView>
        <Text style={{ fontSize: 30 }}>
          "Tepelerde çınlayan boruları duyduk,
          Güney krallığında parlıyordu kılıçlar.
          Küheylanlar sabah rüzgarı gibi
          Daldı Stoningland' a. Cenk oldu.
          Orada düştü Başkomutan Theoden,
          kudretli Thengeloğlu, dönmedi bir daha
          altın saraylarına ve Kuzey kırlarındaki
          yeşil otlaklara. Harding ve Guthlaf,
          Dunhere ve Deorwine, yiğit Grimbold
          Herefara ve Herubrand, Horn ve Fastred
          dövüşüp düştüler orada, o üzek ülkede:
          Mundburg Höyükleri altında, küfler içinde
          yatıyorlar şimdi yoldaşları Gondor beyleriyle.
          Ne zarif Hirluin dönebildi deniz kıyısındaki tepelere,
          ne de yaşlı Forlong döndü zaferle Arnach'a,
          ülkesinin çiçekli vadilerine; Derufin ve Deuilin,
          uzun boylu okçular, dönemediler kara sulara,
          dağların gölgesindeki Morthond gölgelerine.
          Beyler ve erler kabul ettiler sabah vakti
          ve gün sonunda ölümü. Uzun zamandır uyurlar şimdi
          Ulu Nehir kıyısında, Gondor'un çimenleri altında.
          Şimdi gözyaşları gibi, parlayan gümüş gibi akan su,
          O gün kıpkızıl gürlüyordu:
          Günbatımıyla alevlenmişti kana boyalı köpükler;
          İşaret kuleleri gibi yanıyordu dağlar akşam vakti;
          Rammas Echor' a al al düşüyordu çiğ.
        </Text>
      </ScrollView>
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
