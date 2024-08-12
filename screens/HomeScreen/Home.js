import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Pressable,
  Dimensions,
} from "react-native";
import Movie from "../../data/Movie";
import { LinearGradient } from "expo-linear-gradient";
import Carousel from "react-native-snap-carousel";
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
      contentContainerStyle={{ paddingHorizontal: 10 }} // Add contentContainerStyle for additional styling
    />
  );
};
const Home = ({ navigation }) => {
  const firstMovies = Movie.items[0];

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <ImageBackground
        source={{ uri: firstMovies.movies[0].poster }}
        style={{ width: "100%", resizeMode: "cover" }}
      >
        <LinearGradient
          colors={["transparent", "#000"]}
          style={{
            //làm mờ 1 đoạn ở dưới nhỏ ở dươi hình ảnh
            height: 400,
            width: "100%",
            bottom: 0,
          }}
        >
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 20,
                paddingTop: 20,
              }}
            >
              <Image  style={{width:35, height:35}}
                      source={require("../../images/logos_netflix-icon.png")} />
              <Pressable
                onPress={() => {
                  navigation.navigate("TVShow");
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 16,
                    fontFamily: "Roboto",
                    fontWeight: "bold",
                  }}
                >
                  TV Show
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate("TypeMovie");
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 16,
                    fontFamily: "Roboto",
                    fontWeight: "bold",
                  }}
                >
                  Phim
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate("MyList");
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 16,
                    fontFamily: "Roboto",
                    fontWeight: "bold",
                  }}
                >
                  Danh sách của tôi
                </Text>
              </Pressable>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 20,
                //nằm dưới:
                marginTop: 250,
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Text style={{ color: "#fff", fontSize: 30, marginRight: 5 }}>
                  +
                </Text>
                <Text style={{ color: "#fff", fontSize: 16 }}>Danh sách</Text>
              </View>

              {/* TODO: Nút play */}
              <Pressable
                style={{
                  backgroundColor: "#fff",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 7,
                  height: 40,
                  width: 120,
                }}
                //Khi nhất vào nút play thì sẽ chuyển sang màn hình phim
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
                <Text
                  style={{ fontSize: 16, fontWeight: "bold", marginLeft: 5 }}
                >
                  Phát
                </Text>
              </Pressable>
              <Pressable onPress={() => {
                  navigation.navigate("MovieDetail", {
                    item: firstMovies.movies[0],
                  });
                }}
              style={{ alignItems: "center" }}>
                <Image
                  source={require("../../images/info.png")}
                  style={{ width: 25, height: 25, tintColor: "#fff" }}
                />
                <Text style={{ color: "#fff", fontSize: 16 }}>Thông tin</Text>
              </Pressable>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
      <View style={{ width: "100%" }}>
        {/* TODO: Danh sách phim phổ biến trên Netflix*/}
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            fontFamily: "Roboto",
            fontWeight: "bold",
            margin: 10,
          }}
        >
          {Movie.items[0].title}
        </Text>

        <Carousel
          data={Movie.items[0].movies}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                navigation.navigate("MovieDetail", { item });
              }}
              style={{ ...styles.movieItem, marginRight: 10 }}
            >
              <Image
                source={{ uri: item.poster }}
                style={{
                  width: width * 0.5,
                  height: height * 0.37,
                  resizeMode: "contain",
                  borderRadius: 10,
                }}
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
          slideStyle={{
            display: "flex",
            alignItems: "center",
          }}
        />

        {/* TODO: Phim đang thịnh hành */}

        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            fontFamily: "Roboto",
            fontWeight: "bold",
            margin: 10,
          }}
        >
          {Movie.items[1].title}
        </Text>
        <MoviesByCategory
          categoryId="category2"
          navigation={navigation}
          style={{ marginRight: 10 }}
        />
        {/* Được yêu thích nhất */}
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            fontFamily: "Roboto",
            fontWeight: "bold",
            margin: 10,
          }}
        >
          {Movie.items[2].title}
        </Text>
        <FlatList
          data={Movie.items[2].movies}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                navigation.navigate("MovieDetail", { item });
              }}
              style={{ ...styles.movieItem, marginRight: 10 }}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <Image
                  source={{ uri: item.poster }}
                  style={{
                    width: width * 0.4,
                    height: height * 0.2,
                    resizeMode: "cover",
                    borderRadius: 100,
                  }}
                />
                <View
                  style={{
                    position: "absolute",
                    top: 80,
                    height: 90,
                    width: 120,
                    borderRadius: 10,

                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
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
                    }}
                  >
                    {item.id}
                  </Text>
                </View>
              </View>
            </Pressable>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }} // Add contentContainerStyle for additional styling
        />
        {/* Trẻ em và gia đình */}
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            fontFamily: "Roboto",
            fontWeight: "bold",
            margin: 10,
          }}
        >
          {Movie.items[3].title}
        </Text>
        <MoviesByCategory
          categoryId="category4"
          navigation={navigation}
          style={{ marginRight: 10 }}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    marginBottom: 60,
  },
});
export default Home;
