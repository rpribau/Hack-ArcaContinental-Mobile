import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://media.licdn.com/dms/image/C5603AQGMZ2G7kA1nug/profile-displayphoto-shrink_800_800/0/1661351808042?e=1724284800&v=beta&t=hXoAW9R2rMEbrMhIrLDwLAYFsB8NLgzHlU_cJ2mx4C8' }} // Reemplaza con la URL de tu imagen
        style={styles.profileImage}
      />
      <Text style={styles.name}>Facundo Bautista Barbera</Text>
      <Text style={styles.detail}>facundo.barbera@gmail.com</Text>
      <Text style={styles.detail}>Dirección de tienda:</Text>
      <Text style={styles.detail}>Calle Arquimides 123, Galerias del Camino Real, Guadalupe, N.L</Text>
      <Text style={styles.detail}>Tipo de Local: Hogar con venta</Text>
      <Text style={styles.detail}>Fecha de unión: 01/02/2021</Text>
      
      <Text style={styles.topPercentage}>Top 5%</Text>
      <Text style={styles.smallText}>De nuestro clientes</Text>
      
      <TouchableOpacity style={styles.facturaButton}>
        <Text style={styles.buttonText}>Generar Facturas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // Hace que la imagen sea circular
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
    textAlign: 'center',
  },
  topPercentage: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 10,
    textAlign: 'center',
  },
  smallText: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20,
  },
  logoutButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  facturaButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

