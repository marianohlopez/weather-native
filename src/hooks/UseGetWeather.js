import { useState, useEffect } from "react";
import * as Location from "expo-location"
import { WEATHER_API_KEY } from '@env'
import axios from "axios";


const UseGetWeather = () => {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [weather, setWeather] = useState([])
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])

  const fetchWeatherData = async () => {
    try {
      const res = await axios(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)

      setWeather(res)
      setLoading(false)
    }
    catch (error) {
      setError("Could not fetch weather")
    }

  }

  useEffect(() => {
    ; (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()

      if (status !== 'granted') {
        setError('permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLat(location.coords.latitude)
      setLon(location.coords.longitude)
      await fetchWeatherData()
    })()
  }, [lat, lon])
  return [loading, error, weather]
}

export default UseGetWeather
