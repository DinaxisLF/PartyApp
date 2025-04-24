import AnimatedBackground from "@/assets/components/AnimatedBackground";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Checkbox from "expo-checkbox";
import * as DocumentPicker from "expo-document-picker";
import { useState } from "react";

export default function UserRegister() {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [documentName, setDocumentName] = useState("");

  const handlePickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});
      if (result.assets && result.assets.length > 0) {
        setDocumentName(result.assets[0].name);
      }
    } catch (error) {
      console.log("Error al subir documento:", error);
    }
  };

  return (
    <SafeAreaView className="h-full py-8">
      <AnimatedBackground />
      <StatusBar style="light" />
      <View className="flex flex-col px-5 py-5 items-center justify-center">
        <View style={styles.topContent}>
          <Text style={styles.title}>Crear Cuenta</Text>
          <Image
            source={require("@/assets/images/user_icon_white.png")}
            style={styles.logo}
          />
        </View>

        <View style={[styles.contenedor, { flex: 0 }]}>
          {/* Changed from ScrollView to View */}
          <Text className="text-lg font-biryani-semibold text-white ml-3 mb-0">
            Nombre
          </Text>
          <TextInput
            style={styles.input}
            placeholder="👤 Nombre"
            placeholderTextColor="#fff"
          />
          <Text className="text-lg font-biryani-semibold text-white ml-3 mb-0">
            Apellidos
          </Text>
          <TextInput
            style={styles.input}
            placeholder="👤 Apellidos"
            placeholderTextColor="#fff"
          />
          <Text className="text-lg font-biryani-semibold text-white ml-3 mb-0">
            Correo
          </Text>
          <TextInput
            style={styles.input}
            placeholder="📧 Correo"
            placeholderTextColor="#fff"
          />
          <Text className="text-lg font-biryani-semibold text-white ml-3 mb-0">
            Contraseña
          </Text>
          <TextInput
            style={styles.input}
            placeholder="👁️ Contraseña"
            placeholderTextColor="#fff"
            secureTextEntry={true}
          />
          {/* Botón subir documento */}
          <TouchableOpacity
            onPress={handlePickDocument}
            className="bg-gray-300 px-4 rounded-lg flex-row items-center justify-center ml-3"
          >
            <Text className="text-black font-biryani-semibold">
              📄 Subir identificación oficial
            </Text>
          </TouchableOpacity>
          <View style={styles.documentContainer}>
            <Text
              style={styles.documentText}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {documentName || " "}
            </Text>
          </View>
          {/* Checkbox de términos */}
          <View style={styles.termsContainer}>
            <Checkbox
              value={acceptedTerms}
              onValueChange={setAcceptedTerms}
              color={acceptedTerms ? "#0013ff" : undefined}
            />
            <Text style={styles.termsText}>
              Acepto los <Text style={styles.link}>Términos y Condiciones</Text>
            </Text>
          </View>
          {/* Botón de acción */}
          <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-lg flex-row items-center justify-center mt-2 ml-3">
            <Text className="text-white font-biryani-semibold text-center">
              Registrarse
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  contenedor: {
    flex: 1,
    backgroundColor: "rgba(120, 120, 120, 0.25)",
    borderRadius: 20,
    padding: 20,
    height: "auto",
    width: "98%",
    maxWidth: "98%",
    minWidth: "98%",
    marginBottom: 20,
  },
  topContent: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: "KronaOne-Regular",
    color: "white",
    marginBottom: 20,
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 20,
  },
  input: {
    height: 35,
    marginLeft: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "white",
    padding: 5,
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "rgba(66, 66, 66, 0.2)",
    color: "#fff",
    fontFamily: "biryani-light",
  },
  documentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight: 10, // Mantiene espacio fijo sin que se mueva
  },
  documentText: {
    color: "white",
    fontSize: 12,
    fontFamily: "biryani-light", // Usa tu misma fuente
    maxWidth: "90%",
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginLeft: 10,
    marginBottom: 20,
    gap: 8,
    flexWrap: "nowrap",
  },
  termsText: {
    color: "white",
    fontFamily: "biryani-light",
  },
  link: {
    color: "#fffff",
    textDecorationLine: "underline",
  },
});
