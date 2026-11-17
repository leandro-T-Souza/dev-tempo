import { weatherCardStyles } from "@/styles/weathercard.styles";
import { getWeatherIcon } from "../services/weatherService";
import { WeatherData } from "../types/weather.ts";
import { View, Text, Image } from "react-native";

interface WeatherProps {
  weather: WeatherData;
}

export default function WeatherCard({ weather }: WeatherProps) {


return (
  <View style={weatherCardStyles.card}>
    <Text style={weatherCardStyles.cityName}>{weather.name}</Text>

    {weather.weather[0] && (<Image
        source={{ uri: getWeatherIcon(weather.weather[0].icon) }}
        style={weatherCardStyles.weatherIcon}
      />
    )}

    <Text style={weatherCardStyles.temperature}>
      {Math.round(weather.main.temp)} °C
    </Text>

    {weather.weather[0] && (
      <Text style={weatherCardStyles.description}>
        {weather.weather[0].description}
      </Text>
    )}

        <View style={weatherCardStyles.detailsContainer}>
      <View style={weatherCardStyles.detailTtems}>
        <Text style={weatherCardStyles.detailLabel}>Sensação Térmica:</Text>
        <Text style={weatherCardStyles.detailValue}>{Math.round(weather.main.feels_like)} °C</Text>
      </View>

      <View style={weatherCardStyles.detailTtems}>
        <Text style={weatherCardStyles.detailLabel}>Umidade:</Text>
        <Text style={weatherCardStyles.detailValue}>{weather.main.humidity}%</Text>
      </View>

      <View style={weatherCardStyles.detailTtems}>
        <Text style={weatherCardStyles.detailLabel}>Vento:</Text>
        <Text style={weatherCardStyles.detailValue}>{weather.wind.speed} m/s</Text>
      </View>
    </View>
  </View>
);
}