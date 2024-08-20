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
  FlatList

} from 'react-native';
const data = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
  {
    "userId": 1,
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  },
  {
    "userId": 1,
    "id": 6,
    "title": "dolorem eum magni eos aperiam quia",
    "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
  },
  {
    "userId": 1,
    "id": 7,
    "title": "magnam facilis autem",
    "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
  },
  {
    "userId": 1,
    "id": 8,
    "title": "dolorem dolore est ipsam",
    "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
  },
  {
    "userId": 1,
    "id": 9,
    "title": "nesciunt iure omnis dolorem tempora et accusantium",
    "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
  },
  {
    "userId": 1,
    "id": 10,
    "title": "optio molestias id quia eum",
    "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
  },
]
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
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={{ fontSize: 30, fontWeight: "bold", borderWidth: 1, borderColor: "yellow", marginVertical: 10 }}>{item.body}</Text>}
        keyExtractor={item => item.id}
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
