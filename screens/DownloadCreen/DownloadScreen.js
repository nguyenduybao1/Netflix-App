import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const DownloadScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Smart Downloads</Text>
      <Text style={styles.subtitle}>Introducing Downloads For You</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quam dui,
        vivamus bibendum ut. A morbi mi tortor ut felis non accumsan accumsan
        quis. Massa, id ut ipsum aliquam enim non posuere pulvinar diam.
      </Text>
      <Image
        style={styles.image}
        source={require("../../images/circle.png")}
      />
      <Pressable
        style={styles.setupButton}
        onPress={() => {
          // Thêm xử lý khi nút SETUP được nhấn
          console.log("SETUP button pressed");
        }}
      >
        <Text style={styles.buttonText}>SETUP</Text>
      </Pressable>

      <Pressable
        style={styles.findButton}
        onPress={() => {
          // Thêm xử lý khi nút Find Something to Download được nhấn
          console.log("Find Something to Download button pressed");
        }}
      >
        <Text style={styles.buttonText}>Find Something to Download</Text>
      </Pressable>
    </View>
  );
};

export default DownloadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
    padding: 20,
  },
  title: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 30,
    marginTop: 30,
  },
  subtitle: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "700",
    marginTop: 30,
    marginRight: 80,
  },
  description: {
    color: "#FFF",
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 18,
    marginTop: 10,
    textAlign: "center",
  },
  image: {
    width: 177,
    height: 177,
    marginTop: 15,
  },
  setupButton: {
    width: 353,
    height: 41,
    backgroundColor: "#0071EB",
    borderRadius: 2,
    marginTop: 15,
    justifyContent: "center",
  },
  findButton: {
    width: 239,
    height: 33,
    backgroundColor: "#424242",
    marginTop: 25,
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "400",
    marginTop: 10,
  },
});
