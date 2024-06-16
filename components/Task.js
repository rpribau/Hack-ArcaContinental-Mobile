// components/Task.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Task = ({ text }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#d7d7d7',
    padding: 20,
    borderRadius: 5,
    marginVertical: 5,
  },
  itemText: {
    fontSize: 16,
  },
});

export default Task;
