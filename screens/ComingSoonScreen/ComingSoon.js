import React from "react";
import { Text, View, Image, FlatList, StyleSheet, Pressable, Dimensions, ScrollView } from "react-native";
import Movie from "../../data/Movie";

var { width, height } = Dimensions.get("window");

const MoviesByCategory = ({ categoryId, navigation, style }) => {
  const moviesInCategory =
    Movie.items.find((item) => item.id === categoryId)?.movies || [];

  return (
    <FlatList
      data={moviesInCategory}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            navigation.navigate("ComingSoonDetail", { item });
          }}
          style={{ ...styles.movieItem, ...style }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={{ uri: item.poster }}
              style={{
                width: width * 0.3,
                height: height * 0.23,
                resizeMode: "cover",
                borderRadius: 10,
              }}
            />
            <View style={{ marginLeft: 10, justifyContent: 'center', flexDirection: "row", marginTop: 50 }}>
              <Text style={{ color: "#fff", fontSize: 16 }}>{item.name}</Text>
            </View>
          </View>
        </Pressable>
      )}
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 10 }}
    />
  );
};

const ComingSoon = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ width: "100%" }}>
        {/* Header */}
        <View style={{ flexDirection: 'row', marginTop: 40, marginLeft: 10 }}>
          <Image style={{ width: 25, height: 25 }} source={require("../../images/bellNoti.png")} />
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 20, fontWeight: '700', marginLeft: 10 }}>Notifications</Text>
        </View>

        {/* TODO: Phim đang thịnh hành */}
        <MoviesByCategory
          categoryId="category6"
          navigation={navigation}
          style={{ marginTop: 10, backgroundColor: '#424242' }}
        />
        <View>
          {/* Các phần khác nếu có */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    marginBottom: 60,
  },
  movieItem: {
    margin: 5,
  },
});

export default ComingSoon;
