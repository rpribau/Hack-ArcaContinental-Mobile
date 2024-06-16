import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importa los iconos de Ionicons
import Task from '../components/Task'; // Asegúrate de ajustar la ruta según tu estructura de carpetas

const compras = [
  {
    id: '1241421',
    title: 'Orden de compra: 1241421 - 01/06/2023',
    date: '01/06/2024',
    agent: 'Facundo Bautista Barbera',
    location: 'Ciudad de México',
    price: '$12,500',
    shipmentDate: '09/06/2024',
    units: 200,
    products: [
      { name: 'Coca-Cola 600 ml - 24 pack', quantity: 15 },
      { name: 'Coca-Cola Light 600 ml - 24 pack', quantity: 20 },
      { name: 'Coca-Cola Zero 600 ml - 24 pack', quantity: 10},
      { name: 'Coca-Cola Sin Azúcar 600 ml - 24 pack', quantity: 15},
      { name: 'Ciel 600 ml - 24 pack', quantity: 20 },
      { name: 'Topo-Chico 600 ml - 24 pack', quantity: 15},
      { name: 'Fanta 600 ml - 24 pack', quantity: 15 },
      { name: 'Sprite 600 ml - 24 pack', quantity: 20},
      { name: 'Joya Variedad 600 ml - 24 pack', quantity: 10},
      { name: 'Fresca 600 ml - 24 pack', quantity: 10},
      { name: 'Powerade 600 ml - 24 pack', quantity: 10},
      { name: 'Coca-Cola 1 L - 12 pack', quantity: 12 },
      { name: 'Fresca 1 L - 12 pack', quantity: 8 },
      { name: 'Sprite 1 L - 12 pack', quantity: 10 },
      { name: 'Fanta 1 L - 12 pack', quantity: 10 },

    ]
  },
  {
    id: '1234212',
    title: 'Orden de compra: 1234212 - 22/05/2023',
    date: '01/06/2024',
    agent: 'Juan Marco Castro Trinidad',
    location: 'Monterrey, Nuevo León',
    price: '$15,400',
    shipmentDate: '03/06/2024',
    units: 150,
    products: [
      { name: 'Coca-Cola 600 ml - 24 pack', quantity: 50 },
      { name: 'Fanta 600 ml - 24 pack', quantity: 50 },
      { name: 'Sprite 600 ml - 24 pack', quantity: 50 }
    ]
  },
  // Agrega más ítems según sea necesario
];

const ventas = [
  { id: '1', title:'2er Trimestre - 2023: 01/04 - 30/06' },
  { id: '2', title:'1er Trimestre - 2023: 01/01 - 30/03' },
  { id: '3', title:'4to Trimestre - 2022: 01/10 - 31/12' },
  { id: '4', title:'3er Trimestre - 2022: 01/07 - 30/09' },
  { id: '5', title:'2do Trimestre - 2022: 01/04 - 30/06' },
  { id: '6', title:'1er Trimestre - 2022: 01/01 - 30/03' },
  // Agrega más ítems según sea necesario
];

export default function SearchScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
            <Ionicons name="checkmark-circle-sharp" size={80} color="green" style={styles.icon} />
            {selectedItem && (
              <>
                <Text style={styles.modalTitle}>Detalles de la compra</Text>
                <Text style={styles.modalText}>ID de compra: {selectedItem.id}</Text>
                <Text style={styles.modalText}>Fecha: {selectedItem.date}</Text>
                <Text style={styles.modalText}>
                  <Text style={styles.bold}>Nombre del agente de preventas:</Text> {selectedItem.agent}
                </Text>
                <Text style={styles.modalText}>Ubicación de venta: {selectedItem.location}</Text>
                <Text style={styles.modalText}>
                  <Text style={styles.bold}>Precio final:</Text> {selectedItem.price}
                </Text>
                <Text style={styles.modalText}>Fecha de envío: {selectedItem.shipmentDate}</Text>
                <Text style={[styles.modalText, { marginTop: 10 }]}>
                  <Text style={styles.bold}>Cantidad de unidades compradas:</Text> {selectedItem.units}
                </Text>
                <Text style={[styles.modalTitle, { marginTop: 10 }]}>Productos comprados:</Text>
                <ScrollView style={styles.productsList}>
                  {selectedItem.products.map((product, index) => (
                    <Text key={index} style={styles.productText}>
                      {product.name}: {product.quantity}
                    </Text>
                  ))}
                </ScrollView>
              </>
            )}
          </View>
        </View>
      </Modal>

      <View style={styles.section}>
        <Text style={styles.title}>Compras anteriores</Text>
        <ScrollView style={styles.items}>
          {compras.map((item) => (
            <TouchableOpacity key={item.id} onPress={() => openModal(item)}>
              <Task text={item.title} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Ventas generadas</Text>
        <ScrollView style={styles.items}>
          {ventas.map((item) => (
            <Task key={item.id} text={item.title} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    flex: 1,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  items: {
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '90%',
    height: '95%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
  },
  icon: {
    marginBottom: 20, // Ajusta el margen según sea necesario
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  productsList: {
    marginTop: 10,
    width: '100%',
    maxHeight: 300, // Limita la altura para el scroll si es necesario
  },
  productText: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
});
