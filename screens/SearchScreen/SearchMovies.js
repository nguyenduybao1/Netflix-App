import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  Pressable,
  Dimensions,
  TextInput
} from "react-native";
import Movie from "../../data/Movie";
import { LinearGradient } from "expo-linear-gradient";
var { width, height } = Dimensions.get("window");

const MoviesByCategory = ({ movies, navigation, style }) => {
  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            navigation.navigate("MovieDetail", { item });
          }}
          style={{ ...styles.movieItem, ...style }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={{ uri: item.poster }}
              style={{
                width: 150,
                height: 80,
                resizeMode: "cover",
                borderRadius: 10,
              }}
            />
            <View style={{ marginLeft: 10, justifyContent: 'center' }}>
              <Text style={{ color: "#fff", fontSize: 14 }}>{item.name}</Text>
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

const SearchMovies = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [showTopSearch, setShowTopSearch] = useState(true);

  useEffect(() => {
    setTrendingMovies(Movie.items.find((item) => item.id === "category5")?.movies || []);
  }, []);

  const handleSearch = () => {
    const filter = Movie.items.flatMap((category) =>
      category.movies.filter((movie) =>
        movie.name.toLowerCase().includes(search.toLowerCase())
      )
    );
    setSearchResults(filter);
    setShowTopSearch(!search || search.length === 0 || filter.length === 0);
  };

  const firstSearchResult = searchResults.length > 0 ? [searchResults[0]] : [];

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Image
          style={{ width: 20, height: 20, marginLeft: 10 }}
          source={require("../../images/ic_baseline-mic.png")}
        />
        <TextInput
          style={{ flex: 1, height: 31, color: "#C4C4C4", marginLeft: 30 }}
          placeholder="Search for a show, movie, genre, etc."
          onChangeText={(text) => setSearch(text)}
        />
        <Pressable onPress={handleSearch}>
          <Image
            style={{ width: 20, height: 20, marginLeft: 10 }}
            source={require("../../images/ant-design_search-outlined.png")}
          />
        </Pressable>
      </View>

      {!showTopSearch && (
        <View>
          <Text style={styles.resultTitle}>Search Results</Text>
          <MoviesByCategory
            movies={firstSearchResult}
            navigation={navigation}
            style={styles.movieList}
          />
        </View>
      )}

      {showTopSearch && (
        <View>
          <Text style={styles.resultTitle}>Top Search</Text>
          <MoviesByCategory
            movies={trendingMovies}
            navigation={navigation}
            style={styles.movieList}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    marginBottom: 60,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: "#424242",
    height: 52,
    alignItems: 'center',
    marginTop: 40
  },
  resultTitle: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "bold",
    margin: 10,
  },
  movieList: {
    marginTop: 10,
    backgroundColor: '#424242',
  },
  movieItem: {
    margin: 5,
  },
});

export default SearchMovies;
