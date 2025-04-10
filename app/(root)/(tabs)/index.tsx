import React from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, View, SafeAreaView } from 'react-native';
import AnimatedBackground from '@/assets/components/AnimatedBackground';
import { useRouter } from 'expo-router'; 

export default function HomeScreen() {
  const router = useRouter();
  return (
      <SafeAreaView style={styles.safeArea}>
      <AnimatedBackground />
        <View style={styles.container}>
          <View style={styles.topContent}>
          <Text style={[styles.title, { fontFamily: 'KronaOne-Regular' }]}>PartyApp</Text>
            <Image source={require('@/assets/images/logo-principal.png')} style={styles.logo} />
          </View>

          <View style={styles.bottomButtons}>
            <TouchableOpacity style={styles.button} onPress={() => router.push("/screens/main-window")}>
              <Text style={styles.buttonText}>Iniciar sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Registrarme</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  topContent: {
    alignItems: 'center',
    marginTop: 80,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 30,
  },
  bottomButtons: {
    alignItems: 'center',
    marginBottom: 50,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'Biryani-Regular',
    fontWeight: 'bold',
  },
});