import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AddCardScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Tarjeta</Text>
      
    
      <Text style={styles.label}>Nombre</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        placeholderTextColor="#999"
      />
      
    
      <Text style={styles.label}>Número de Tarjeta</Text>
      <TextInput
        style={styles.input}
        placeholder="Número de tarjeta"
        placeholderTextColor="#999"
        keyboardType="numeric"
      />
      
    
      <View style={styles.row}>
        
        <View style={styles.column}>
          <Text style={styles.label}>Expiración</Text>
          <TextInput
            style={[styles.input, styles.shortInput]}
            placeholder="MM/AA"
            placeholderTextColor="#999"
            keyboardType="numeric"
          />
        </View>
        
     
        <View style={styles.column}>
          <Text style={styles.label}>CVV</Text> 
          <TextInput
            style={[styles.input, styles.shortInput]}
            placeholder="123"
            placeholderTextColor="#999"
            keyboardType="numeric"
          />
        </View>
      </View>
      
      {/* Botón */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Agregar Tarjeta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
    color: '#333',
  },
  shortInput: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    width: '48%', 
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddCardScreen;