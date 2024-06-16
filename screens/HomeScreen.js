// screens/HomeScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importar Ionicons

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Última compra:</Text>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>$12,700</Text>
        </View>
        <Text style={styles.details}>Jun 07, 2024</Text>
      </View>

      <View style={[styles.box, { backgroundColor: '#701e19' }]}>
        <Text style={styles.title}>Total de ventas mensuales:</Text>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>421</Text>
          <Ionicons name="arrow-up" size={40} color="white" style={styles.icon} />
        </View>
        <Text style={[styles.details, { fontSize: 20 }]} >¡Mayor a que las del mes anterior!</Text>
        <Text style={styles.amount2}>$3,640</Text>
        <Text style={styles.details}>Jun 01 - Jun 30</Text>
      </View>


      <View style={[styles.box, { backgroundColor: 'gray'}]}>
        <Text style={styles.title}>Siguiente envio:</Text>
        <Text style={[styles.details, {fontSize: 15}]}>Total:</Text>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>$20,200</Text>
        </View>
        <Text style={[styles.details, {fontSize: 15}]}>Agendado para llegar: Jun 10, 2024</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
  },
  box: {
    backgroundColor: '#e42b4c',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'flex-start',
    width: '85%',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amount: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  amount2: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,
  },
  details: {
    color: 'white',
    fontSize: 20,
  },
  icon: {
    marginLeft: 10, // Espacio entre el texto y el icono
  },
});
