import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Video, ResizeMode } from "expo-av";
import * as ScreenOrientation from "expo-screen-orientation";

export default function MovieDetail({ navigation, route }) {
  const data = route.params.item;
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  function setOrientation() {
    if (Dimensions.get("window").height > Dimensions.get("window").width) {
      //Device is in portrait mode, rotate to landscape mode.
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    } else {
      //Device is in landscape mode, rotate to portrait mode.
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.goBackButton}
        onPress={() => {
          // Quay trở lại màn hình trước đó (ComingSoon)
          navigation.goBack();
        }}
      >
        <Image
          source={require("../../images/return.png")}
          style={{ width: 30, height: 30 , marginLeft: 350, marginTop:10}}
        />
      </Pressable>
      <Video
        ref={video}
        style={styles.video}
        source={route.params.item.episodes[0].video}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        onFullscreenUpdate={setOrientation}
        isLooping
        shouldPlay //auto play
        isMuted={false}
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <ScrollView>
        <Text
          style={{
            color: "#fff",
            fontSize: 30,
            fontWeight: "bold",
            margin: 10,
            fontFamily: "Roboto",
          }}
        >
          {route.params.item.name} - Trailer
        </Text>
       <View style={{flexDirection: 'row',marginLeft: 250 }}>
          <View style={{flexDirection: 'column'}}>
            <Image style={{width: 30, height:30, marginLeft:10}} source={require("../../images/bellRM.png")} />
            <Text style={{color: 'rgba(255, 255, 255, 0.83)', fontSize: 12, fontWeight:400}}>Remind Me</Text>
          </View>
          <View style={{marginLeft: 25}}>
            <Image style={{width: 30, height:30}} source={require("../../images/share.png")} />
            <Text style={{color: 'rgba(255, 255, 255, 0.83)', fontSize: 12, fontWeight:400}}>Share</Text>
          </View>
       </View>

       <Text style={{margin:10,color: 'rgba(255, 255, 255, 0.83)', fontSize: 12, fontWeight:400}}>
        {route.params.item.coming}
       </Text>
        <Text
          style={{
            // FFFFFF 83%
            color: "#B4B4B3",
            fontSize: 16,
            margin: 10,
          }}
        >
          {route.params.item.description}
        </Text>
        {/* TODO: diễn viên và đạo diễn */}
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            fontWeight: "bold",
            margin: 10,
            fontFamily: "Roboto",
          }}
        >
          Đạo diễn - Diễn viên
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 10,
            marginTop: 10,

            height: 100,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              width: 80,
            }}
          >
            <Image
              source={require("../../images/ronaldo.jpg")}
              style={{ width: 70, height: 70, borderRadius: 75 }}
            />
            <Text
              style={{
                color: "#fff",
                fontSize: 11,
                fontWeight: "bold",
                fontFamily: "Roboto",
                textAlign: "center",
                marginTop: 5,
              }}
            >
              {route.params.item.creators[0]}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              width: 80,
            }}
          >
            <Image
              source={require("../../images/cris.jpg")}
              style={{ width: 70, height: 70, borderRadius: 75 }}
            />
            <Text
              style={{
                color: "#fff",
                fontSize: 11,
                fontWeight: "bold",
                fontFamily: "Roboto",
                textAlign: "center",
                marginTop: 5,
              }}
            >
              {route.params.item.cast[0]}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              width: 80,
            }}
          >
            <Image
              source={require("../../images/tony.jpg")}
              style={{ width: 70, height: 70, borderRadius: 75 }}
            />
            <Text
              style={{
                color: "#fff",
                fontSize: 11,
                fontWeight: "bold",
                fontFamily: "Roboto",
                textAlign: "center",
                marginTop: 5,
              }}
            >
              {route.params.item.cast[1]}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              width: 80,
            }}
          >
            <Image
              source={require("../../images/mikami.jpg")}
              style={{ width: 70, height: 70, borderRadius: 75 }}
            />
            <Text
              style={{
                color: "#fff",
                fontSize: 11,
                fontWeight: "bold",
                fontFamily: "Roboto",
                textAlign: "center",
                marginTop: 5,
              }}
            >
              {route.params.item.cast[2]}
            </Text>
          </View>
        </View>

   
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  video: {
    width: "100%",
    aspectRatio: 16 / 9, // Tỷ lệ khung hình 16:9 cho video
    marginTop: 0,
  },
});