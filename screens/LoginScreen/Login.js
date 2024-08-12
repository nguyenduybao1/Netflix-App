import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity, Pressable, Modal } from 'react-native';

function Login({ navigation, route }) {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);

  const handleLogin = () => {
    fetch("https://65572429bd4bcef8b6121ab2.mockapi.io/account")
      .then((response) => response.json())
      .then((json) => {
        var arr = json.filter((item) => item.username === username);
        if (arr.length !== 0) {
          if (arr[0].password === password) {
            navigation.navigate("Tabs", { id: arr[0].id, item: arr[0] });
          } else {
            setError("Mật khẩu sai");
            setIsErrorModalVisible(true);
          }
        } else {
          setError("Tài khoản sai");
          setIsErrorModalVisible(true);
        }
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{ width: 210, height: 50, marginTop:40 }}
          source={require("../../images/logo-netflix.png")}
        />
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "700",
            textAlign: "center",
            marginTop: 20,
            marginRight: 210,
          }}
        >
          Đăng Nhập
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
        >
          <Pressable
            onPress={() => {
              handleLogin();
            }}
            style={{
              width: 310,
              height: 50,
              backgroundColor: "#FF0000",
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>
              Đăng Nhập
            </Text>
          </Pressable>

        </View>
        <Text
          style={{
            textAlign: "center",
            color: "#db7b14",
            fontSize: 18,
            fontWeight: 700,
            marginTop: 30,
          }}
        >
          Quên mật khẩu
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop:100}}>
        <Text style ={{fontSize:14, color: 'white',}}>Bạn mới sử dụng Netflix ?</Text>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={{marginLeft: 5,fontSize: 14,color: 'red'}}>Đăng ký ngay.</Text>
        </Pressable>
        </View>


        <View style={{ marginTop:100}}>
        <Text style ={{fontSize:13, color: 'white',textAlign: 'center'}}>Quá trình đăng nhập được Google reCAPTCHA bảo vệ để đảm bảo bạn không phải là robot
        <Pressable>
          <Text style={{marginLeft: 5,fontSize: 12,color: 'red',}}>Tìm hiểu thêm</Text>
        </Pressable>
        </Text>
        </View>

      </View>
   
      <Modal
        animationType="slide"
        transparent={true}
        visible={isErrorModalVisible}
        onRequestClose={() => {
          setIsErrorModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.errorText}>{error}</Text>
            <Pressable
              style={styles.okButton}
              onPress={() => setIsErrorModalVisible(false)}
            >
              <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>
                OK
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default Login;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  ImgHeader: {
    width: 271,
    height: 271,
    top: 60,
  },
  Title: {
    width: 390,
    height: 72,
    top: 100,
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 36,
    textAlign: 'center',
    color: '#8353E2',
  },
  TextInput: {
    flexDirection: 'row',
    width: 334,
    height: 43,
    top: 130,
    borderRadius: 12,
    border: "1px solid #9095A0",
    backgroundColor: "rgba(0, 0, 0, 0.00)",
  },
  imgInput: {
    width: 20,
    height: 20,
    top: 12,
    left: 16,
  },
  inputName: {
    marginLeft: 30,
    width: 300,
    height: 43,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 26,
    textAlign: 'left',
  },
  Setbtn: {
    width: 190,
    height: 44,
    top: 160,
    padding: 10,
    borderRadius: 12,
    backgroundColor: '#00BDD6',
  },
  txtbtn: {
    width: 128,
    height: 26,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 26,
    left: 25,
    color: '#FFFFFF',
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  errorText: {
    marginBottom: 20,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },
  okButton: {
    width: 120,
    height: 40,
    backgroundColor: "#db7b14",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },

});
