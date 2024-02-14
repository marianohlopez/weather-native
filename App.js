import { useState, useEffect } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native"
import * as Location from "expo-location"
import Tabs from "./src/components/Tabs";
import { WEATHER_API_KEY } from '@env'
import UseGetWeather from "./src/hooks/UseGetWeather";
import axios from "axios";


const App = () => {

  const { loading, error, weather } = UseGetWeather()

  if (weather) {
    console.log(location);
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={"large"} color={"blue"} />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1
  }
})

export default App
