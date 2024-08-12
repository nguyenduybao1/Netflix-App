import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Logo from "./screens/LogoScreen/Logo";
import Tabs from "./screens/TabScreen/Tabs";
import TVShow from "./screens/TypeMovies/TVShow";
import TypeMovie from "./screens/TypeMovies/TypeMovie";
import MyList from "./screens/TypeMovies/MyList";
import MovieDetail from "./screens/HomeScreen/MovieDetail";
import ComingSoonDetail from "./screens/ComingSoonScreen/ComingSoonDetail";
import Login from "./screens/LoginScreen/Login";
import Register from "./screens/RegisterScreen/Register";
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="Logo" component={Logo} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="ComingSoonDetail" component={ComingSoonDetail}/>
        <Stack.Screen name="MovieDetail" component={MovieDetail} />
        <Stack.Screen name="TVShow" component={TVShow} />
        <Stack.Screen name="TypeMovie" component={TypeMovie} />
        <Stack.Screen name="MyList" component={MyList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
