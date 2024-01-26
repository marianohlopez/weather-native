import { StyleSheet, SafeAreaView, Text, FlatList, ImageBackground, StatusBar } from "react-native";
import ListItem from "../components/ListItem";

const DATA = [
  {
    dt: 1661875200,
    main: {
      temp: 296.34,
      feels_like: 296.02,
      temp_min: 296.34,
      temp_max: 298.24,
      pressure: 1015
    },
    weather: [
      {
        id: 500,
        main: "Sun",
        description: "light rain",
        icon: "10d"
      }
    ]
  },
  {
    dt: 2452345245,
    main: {
      temp: 296.34,
      feels_like: 296.02,
      temp_min: 296.34,
      temp_max: 298.24,
      pressure: 1015
    },
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10d"
      }
    ]
  },
  {
    dt: 245245234524,
    main: {
      temp: 296.34,
      feels_like: 296.02,
      temp_min: 296.34,
      temp_max: 298.24,
      pressure: 1015
    },
    weather: [
      {
        id: 500,
        main: "Storm",
        description: "light rain",
        icon: "10d"
      }
    ]
  },
]

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt={item.dt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )

  const { container, image } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground source={require('../../assets/upcoming-background.jpg')}
        style={image}>
        <Text>Upcoming Weather</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue'
  },
  image: {
    flex: 1
  }
});

export default UpcomingWeather;
