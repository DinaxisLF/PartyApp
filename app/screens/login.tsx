import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
  SafeAreaView,
  Image,
} from "react-native";
import AnimatedBackground from "@/assets/components/AnimatedBackground";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

export default function LoginScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <AnimatedBackground />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoiding}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.title}>PartyApp</Text>
          <Image
            source={require("@/assets/images/logo-principal.png")}
            style={styles.logo}
          />

          <View style={styles.loginBox}>
            <Text style={styles.loginTitle}>Iniciar Sesión</Text>

            <Text style={styles.label}>Correo</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="email@example.com"
                placeholderTextColor="#ccc"
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <Text style={styles.label}>Contraseña</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="••••••••"
                placeholderTextColor="#ccc"
                style={styles.input}
                secureTextEntry
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={()=>router.push("/screens/main-window")}>
              <Text style={styles.buttonText}>Acceder</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  keyboardAvoiding: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
    fontFamily: "KronaOne-Regular",
  },
  logo: {
    width: width * 0.30,
    height: width * 0.30,
    marginBottom: 30,
  },
  loginBox: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 20,
    padding: width * 0.06,
  },
  loginTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "Biryani-Bold",
  },
  label: {
    color: "white",
    marginBottom: 6,
    marginTop: 12,
    fontFamily: "Biryani-Regular",
  },
  inputContainer: {
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === "ios" ? 14 : 10,
    marginBottom: 5,
  },
  input: {
    color: "white",
    fontSize: 16,
    fontFamily: "Biryani-Regular",
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "Biryani-Bold",
  },
});
