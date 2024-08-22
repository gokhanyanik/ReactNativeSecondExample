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
  Platform,
  Dimensions,
  Image,
  FlatList,
  View


} from 'react-native';
const data = [
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/392537",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/56acb2",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://via.placeholder.com/600/51aa97",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  },
  {
    "albumId": 1,
    "id": 4,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "url": "https://via.placeholder.com/600/35185e",
    "thumbnailUrl": "https://via.placeholder.com/150/d32776"
  },
  {
    "albumId": 1,
    "id": 5,
    "title": "natus nisi omnis corporis facere molestiae rerum in",
    "url": "https://via.placeholder.com/600/121fa4",
    "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
  },
]
function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.bacground}>
      <FlatList
        data={data}
        renderItem={({ item }) =>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Image
                source={{
                  uri: item.url,
                  width: 200,
                  height: 200,
                }}
                borderRadius={10}
              />
            </View>
            <View style={styles.viewText}>
              <Text style={[styles.title]}>{item.title}</Text>
              <Text style={styles.text}>Id: {item.id}</Text>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  bacground: {
    backgroundColor: Platform.OS == "ios" ? "yellow" : "gray",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "black",
    fontSize: 22
  },
  title: {
    color: "white",
    fontWeight: "bold",
    margin: 5
  },
  viewText: {
    backgroundColor: "orange",
    width: 200,
    borderRadius:10
  }
});
export default App;
