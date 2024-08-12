import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Pressable } from "react-native";

const Register = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for displaying errors

  const handleRegister = async () => {
    try {
      // Basic validation
      if (!username || !password) {
        setError("Please provide both username and password.");
        return;
      }

      // Make an API call to register the user
      const response = await fetch("https://65572429bd4bcef8b6121ab2.mockapi.io/account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Registration successful, navigate to the login screen
        navigation.navigate("Login");
      } else {
        // Display error if registration fails
        setError("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{ width: 210, height: 50, marginTop: 60 }}
          source={require("../../images/logo-netflix.png")}
        />
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "700",
            textAlign: "center",
            marginTop: 20,
            marginRight: 250,
          }}
        >
          Đăng Ký
        </Text>

        <View style={{ marginTop: 20 }}>
          <TextInput
            value={username}
            onChangeText={setUsername}
            style={{
              fontSize: 20,
              color: "#c4c4c4",
              width: 310,
              height: 50,
            }}
            placeholder="Tên tài khoản"
          />
          <View
            style={{ width: "auto", height: 1, backgroundColor: "#ccc" }}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <TextInput
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            style={{
              fontSize: 20,
              color: "#c4c4c4",
              width: 300,
              height: 50,
            }}
            placeholder="Mật khẩu"
          />
          <View
            style={{
              width: "auto",
              height: 1,
              backgroundColor: "#ccc",
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: 20,
          }}
        ></View>

        <Pressable
          onPress={handleRegister}
          style={styles.btnFinish}
        >
          <Text style={styles.txtFinish}>Đăng Ký</Text>
        </Pressable>

        {error ? (
          <Text style={{ color: "red", marginTop: 10 }}>{error}</Text>
        ) : null}
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
  },
  btnFinish: {
    width: 310,
    height: 50,
    backgroundColor: "#FF0000",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    alignSelf: "center",
  },
  txtFinish: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
