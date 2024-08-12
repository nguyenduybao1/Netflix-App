import { StyleSheet, View, Image } from "react-native";
import React from "react";

export default function Logo({ navigation }) {
  //TODO: tự động chuyển sang Home sau 3s
  setTimeout(() => {
    navigation.navigate("Login");
  }, 3000);
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 200, height: 200, resizeMode: "contain" }}
        source={require("../../images/logo-netflix.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center", // horizontal
    justifyContent: "center", // vertical
  },
});
