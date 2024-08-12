import React from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  Pressable,
  Dimensions,
} from "react-native";
import Movie from "../../data/Movie";
import Carousel from "react-native-snap-carousel";
import { LinearGradient } from "expo-linear-gradient";

var { width, height } = Dimensions.get("window");

const MoviesByCategory = ({ categoryId, navigation, style }) => {
  const moviesInCategory =
    Movie.items.find((item) => item.id === categoryId)?.movies || [];
  return (
    <FlatList
      numColumns={3}
      data={moviesInCategory}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            navigation.navigate("MovieDetail", { item });
          }}
          style={{ ...styles.movieItem, ...style }}
        >
          <Image
            source={{ uri: item.poster }}
            style={{
              width: width * 0.3,
              height: height * 0.23,
              resizeMode: "contain",
              borderRadius: 10,
            }}
          />
        </Pressable>
      )}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 10 }}
    />
  );
};

export default function MyList({ navigation }) {
  const firstMovies = Movie.items[0];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My List</Text>

      </View>
      <MoviesByCategory
        categoryId="category5"
        navigation={navigation}
        style={{ marginRight: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "bold",
    margin: 30,
  },
  goBackButton: {
    padding: 10,
  },
  movieItem: {
    margin: 5,
  },
});
