import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';  
import { useNavigation } from '@react-navigation/native';  // Importamos el componente Link
import { LinearGradient } from 'expo-linear-gradient';  

export default function MiCuentaScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  const navigation = useNavigation(); 

  const handleSubmit = () => {
    console.log('Form Submitted');
    console.log({ email, password, nombre, apellido });
  };

  const handleBackPress = () => {
    navigation.goBack();  // Navega a la pantalla anterior
  };

  return (
    <LinearGradient
      colors={['#405DE6', '#465AE3', '#4C57E1', '#6849CA', '#943FA7', '#C92E62', '#E32540', '#ED4E3B', '#F47F40', '#FFDC80']}
      style={styles.container}
    >
      {/* Flecha para regresar */}
      <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
        <Ionicons name="arrow-back" size={30} color="white" />
      </TouchableOpacity>
 
      <Text style={styles.title}>Mi Cuenta</Text>

      {/* Ícono de usuario */}
      <Ionicons name="person-outline" size={180} color="white" style={styles.userIcon} />

      {/* Contenedor del formulario */}
      <View style={styles.formContainer}>
        <View style={styles.form}>
          {/* Icono y campo de email */}
          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={20} color="white" />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="white"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* Icono y campo de password */}
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="white" />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="white"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          {/* Icono y campo de nombre */}
          <View style={styles.inputContainer}>
            <MaterialIcons name="person-outline" size={20} color="white" />
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              placeholderTextColor="white"
              value={nombre}
              onChangeText={setNombre}
            />
          </View>

          {/* Icono y campo de apellido */}
          <View style={styles.inputContainer}>
            <MaterialIcons name="person-outline" size={20} color="white" />
            <TextInput
              style={styles.input}
              placeholder="Apellido"
              placeholderTextColor="white"
              value={apellido}
              onChangeText={setApellido}
            />
          </View>

          {/* Botón de subir foto INE */}
          <TouchableOpacity style={styles.uploadButton}>
            <Ionicons name="cloud-upload-outline" size={20} color="black" />
            <Text style={styles.uploadText}>Subir foto INE</Text>
          </TouchableOpacity>
        </View>

        {/* Botón de enviar */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>ENVIAR</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 38,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userIcon: {
    marginBottom: 20, // Espacio entre el ícono y el título
  },
  formContainer: {
    width: 380,  // Ancho similar al que muestra la imagen
    height: 491,  // Altura similar a la imagen
    backgroundColor: 'rgba(255, 255, 255, 0.2)',  // Fondo blanco semi-transparente
    borderRadius: 42,  // Bordes redondeados
    padding: 20,  // Espaciado interior
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",  // Sombra
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 500,
  },
  form: {
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent', 
    marginBottom: 15,
    borderRadius: 25, // Bordes más suaves
    paddingVertical: 12,
    paddingLeft: 20,
    paddingRight: 15,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'white',
    backgroundColor: 'transparent',  // Fondo transparente para que no se vea el borde
    borderBottomWidth: 1,  // Línea blanca en la parte inferior
    borderBottomColor: 'white',  // Color blanco para la línea
    paddingLeft: 10,  // Espaciado dentro del input
  },
  uploadButton: {
    flexDirection: 'row',
    backgroundColor: '#e0e0e0',
    padding: 12,
    marginBottom: 20,
    borderRadius: 25, // Bordes más suaves
    alignItems: 'center',
  },
  uploadText: {
    color: 'black',
    marginLeft: 10,
  },
  submitButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)', 
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
