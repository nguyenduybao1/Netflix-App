import React, { useState, useRef } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
  Dimensions,
  Modal,
  FlatList,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import Movie from "../../data/Movie";
import { LinearGradient } from "expo-linear-gradient";
import Carousel from "react-native-snap-carousel";

var { width, height } = Dimensions.get("window");

const MoviesByCategory = ({ category, navigation, style, selectedGenre }) => {
  const moviesInCategory = category?.movies || [];

  // Lọc phim theo thể loại được chọn
  const filteredMovies = selectedGenre === "All Genres"
    ? moviesInCategory
    : moviesInCategory.filter(movie => movie.genres.includes(selectedGenre));

  return (
    <FlatList
      data={filteredMovies}
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
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 10 }}
    />
  );
};

const TypeMovie = ({ navigation }) => {
  const firstMovies = Movie.items[0];
  const [selectedOption, setSelectedOption] = useState("Phim");
  const [selectedDropdownOption, setSelectedDropdownOption] = useState("Phim");
  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  const dropdownOptions = ["TV Show", "Phim", "Danh sách của tôi"];
  const genresOptions = ["All Genres", "Hành động", "Phiêu lưu", "Hài hước", "Gia đình", "Kinh dị", "Hoạt hình"];

  return (
    
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      
      <ImageBackground
        source={{ uri: firstMovies.movies[3].poster }}
        style={{ width: "100%", height: height * 0.5, resizeMode: "cover" }}
      >
        <LinearGradient
          colors={["transparent", "#000"]}
          style={{
            height: height * 0.5,
            width: "100%",
            bottom: 0,
            position: "absolute",
          }}
        >
          <View style={styles.header}>
            <Image style={{ width: 35, height: 25, marginRight: 10 }} source={require("../../images/logos_netflix-icon.png")} />
            <Dropdown
              options={dropdownOptions}
              onSelect={(selectedOption) => {
                setSelectedOption(selectedOption);
                setSelectedDropdownOption(selectedOption);
                if (selectedOption === "TV Show") {
                  navigation.navigate("TVShow");
                } else if (selectedOption === "Phim") {
                  navigation.navigate("Phim");
                } else if (selectedOption === "Danh sách của tôi") {
                  navigation.navigate("MyList");
                }
              }}
              selectedOption={selectedDropdownOption}
              dropdownPosition="left"
            />
            <Dropdown
              options={genresOptions}
              onSelect={(selectedGenre) => setSelectedGenre(selectedGenre)}
              selectedOption={selectedGenre}
              dropdownPosition="right"
            />
          </View>
          <View style={styles.subHeader}>
            <View style={styles.addButton}>
              <Text style={styles.addText}>+</Text>
              <Text style={{ color: "#fff", fontSize: 16 }}>Danh sách</Text>
            </View>

            <Pressable
              style={styles.playButton}
              onPress={() => {
                navigation.navigate("MovieDetail", {
                  item: firstMovies.movies[0],
                });
              }}
            >
              <Image
                source={require("../../images/play-button.png")}
                style={{ width: 30, height: 30, tintColor: "#000" }}
              />
              <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 5 }}>
                Phát
              </Text>
            </Pressable>
            <Pressable style={styles.infoButton}>
              <Image
                source={require("../../images/info.png")}
                style={{ width: 25, height: 25, tintColor: "#fff" }}
              />
              <Text style={{ color: "#fff", fontSize: 16 }}>Thông tin</Text>
            </Pressable>
          </View>
        </LinearGradient>
      </ImageBackground>
      <View style={styles.moviesContainer}>
        <Text style={styles.categoryTitle}>{Movie.items[0].title}</Text>
        <Carousel
          data={Movie.items[0].movies}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                navigation.navigate("MovieDetail", { item });
              }}
              style={styles.movieItem}
            >
              <Image
                source={{ uri: item.poster }}
                style={styles.movieItemImage}
              />
            </Pressable>
          )}
          sliderWidth={width}
          itemWidth={width * 0.5}
          loop={true}
          autoplay={true}
          autoplayDelay={200}
          autoplayInterval={1000}
          inactiveSlideOpacity={0.6}
          slideStyle={styles.movieSlide}
        />
        <Text style={styles.categoryTitle}>{Movie.items[1].title}</Text>
        <MoviesByCategory
          category={Movie.items[1]}  // Chọn category cụ thể trong Movie.items
          navigation={navigation}
          style={styles.movieList}
          selectedGenre={selectedGenre}  // Truyền thể loại được chọn
        />
        <Text style={styles.categoryTitle}>{Movie.items[2].title}</Text>
        <MoviesByCategory
          category={Movie.items[2]}  // Chọn category cụ thể trong Movie.items
          navigation={navigation}
          style={styles.movieList}
          selectedGenre={selectedGenre}  // Truyền thể loại được chọn
        />
        <Text style={styles.categoryTitle}>{Movie.items[3].title}</Text>
        <MoviesByCategory
          category={Movie.items[3]}  // Chọn category cụ thể trong Movie.items
          navigation={navigation}
          style={styles.movieList}
          selectedGenre={selectedGenre}  // Truyền thể loại được chọn
        />
      </View>
    </ScrollView>
  );
};

const Dropdown = ({ options, onSelect, selectedOption, dropdownPosition }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const buttonRef = useRef();

  return (
    <View>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View
          ref={buttonRef}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 5,
            marginRight: dropdownPosition === "left" ? 20 : 0,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16, fontFamily: "Roboto", fontWeight: "bold" }}>
            {selectedOption}
          </Text>
          <Image
            source={require("../../images/down-arrow.png")}
            style={{ width: 20, height: 20, tintColor: "#fff", marginLeft: 5 }}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View
              style={{
                marginLeft:120,
                backgroundColor: "#000",
                borderRadius: 10,
                padding: 10,
                position: "absolute",
                top: 10,
                right:10,
                zIndex: 2,
              }}
            >
              {options.map((option, index) => (
                <Pressable
                  key={index}
                  onPress={() => {
                    setModalVisible(false);
                    onSelect(option);
                  }}
                  style={{
                    paddingVertical: 10,
                  }}
                >
                  <Text style={{ color: "#fff" }}>{option}</Text>
                </Pressable>
              ))}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  subHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: height * 0.25,
  },
  addButton: {
    alignItems: "center",
  },
  addText: {
    color: "#fff",
    fontSize: 30,
    marginRight: 5,
  },
  playButton: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    height: 40,
    width: 120,
  },
  infoButton: {
    alignItems: "center",
  },
  moviesContainer: {
    width: "100%",
    marginBottom: 60,
  },
  categoryTitle: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "bold",
    margin: 10,
  },
  movieItem: {
    marginRight: 10,
  },
  movieItemImage: {
    width: width * 0.5,
    height: height * 0.37,
    resizeMode: "contain",
    borderRadius: 10,
  },
  movieSlide: {
    display: "flex",
    alignItems: "center",
  },
  movieList: {
    paddingHorizontal: 10,
  },
  favoriteMovieItem: {
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  favoriteMovieItemImage: {
    width: width * 0.4,
    height: height * 0.2,
    resizeMode: "cover",
    borderRadius: 10,
  },
  favoriteMovieOverlay: {
    position: "absolute",
    top: 80,
    height: 90,
    width: 120,
    borderRadius: 10,
    flexDirection: "row",
  },
  favoriteMovieText: {
    color: "red",
    fontSize: 70,
    fontFamily: "Roboto",
    textAlign: "center",
    fontWeight: "bold",
    alignSelf: "center",
    textAlignVertical: "center",
    justifyContent: "center",
    color: "#fff",
    marginRight: 10,
  },
});

export default TypeMovie;
