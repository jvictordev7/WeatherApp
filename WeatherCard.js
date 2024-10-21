// WeatherCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherCard = ({ weather }) => {
  // Supondo que 'weather' contém dados de previsão
  return (
    <View style={styles.card}>
      <Text style={styles.city}>{weather.city}</Text>
      <Text style={styles.temp}>{weather.temp} °C</Text>
      <Text style={styles.desc}>{weather.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  city: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  temp: {
    fontSize: 24,
  },
  desc: {
    fontSize: 16,
    color: '#666',
  },
});

export default WeatherCard;
