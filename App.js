import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import WeatherCard from './WeatherCard'; // Certifique-se de que WeatherCard está implementado corretamente
import fetchWeather from './API';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!city) {
      setError('Por favor, insira o nome de uma cidade.');
      return;
    }

    try {
      const data = await fetchWeather(city);
      setWeather(data);
      setError('');
    } catch (err) {
      setError(err.message || 'Ocorreu um erro ao buscar os dados.');
      setWeather(null);
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#6E45E2', '#88D3CE']}
        style={styles.background}
      >
        <Text style={styles.title}>Weather App</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome da cidade"
          value={city}
          onChangeText={text => setCity(text)}
        />
        <Button title="Buscar" onPress={handleSearch} />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        {weather && <WeatherCard weather={weather} />}
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
});
