/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



function App(): React.JSX.Element {


  return (
    /* İlk textte bir özellik ve style verme anlatıldı
    ikinci texte text içinde metod kullanma anlatıldı */
    <SafeAreaView style={{ flex: 1, backgroundColor: "red" }}>
      <Text numberOfLines={2} style={{ color: "white", fontWeight: "bold" }}>
        lorem ipsun dolar set amet lorem ipsun dolar set amet lorem ipsun dolar set amet lorem ipsun dolar set amet lorem ipsun dolar set amet
      </Text>
      <TouchableOpacity onPress={() => console.log("on pressed")}>

        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyRceKo4bqjJuw_Rp2dHHqwlyuL0IgDTah8nz55ys7_K1CzLacEtmjBq-VoU6c35y21pM&usqp=CAU",
            width: 300,
            height: 300
          }}
          resizeMode='contain'   //..... internet üzerinden yüklenen resimlerde boyutlandırma yapılır.
        //blurRadius={10}
        //Eğer localde bir resim yüklenicekse uri:"" yerine require("./hangi dizinde ise") kullanılır.
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "red",
  },

});

export default App;
