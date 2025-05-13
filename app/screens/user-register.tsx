import ColorGradient from "@/assets/components/colorfullBackground";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Checkbox from "expo-checkbox";
import * as DocumentPicker from "expo-document-picker";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { router } from "expo-router";
import { useUserStore } from "@/stores/userStore";

type FormData = {
  nombre: string;
  apellidos: string;
  correo: string;
  password: string;
};

type FormErrors = {
  nombre: string;
  apellidos: string;
  correo: string;
  password: string;
  document: string;
  terms: string;
};

export default function UserRegister() {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [documentName, setDocumentName] = useState("");
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    apellidos: "",
    correo: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    nombre: "",
    apellidos: "",
    correo: "",
    password: "",
    document: "",
    terms: "",
  });

  // Regex patterns
  const NAME_REGEX = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,}$/;
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const PASSWORD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>])[A-Za-z\d!@#$%^&*()\-_=+{};:,<.>]{8,}$/;

  const handlePickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});
      if (result.assets && result.assets.length > 0) {
        setDocumentName(result.assets[0].name);
        setErrors({ ...errors, document: "" });
      }
    } catch (error) {
      console.log("Error al subir documento:", error);
    }
  };

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      nombre: "",
      apellidos: "",
      correo: "",
      password: "",
      document: "",
      terms: "",
    };

    // Validate nombre
    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es requerido";
      valid = false;
    } else if (!NAME_REGEX.test(formData.nombre)) {
      newErrors.nombre = "El nombre solo debe contener letras y espacios";
      valid = false;
    }

    // Validate apellidos
    if (!formData.apellidos.trim()) {
      newErrors.apellidos = "Los apellidos son requeridos";
      valid = false;
    } else if (!NAME_REGEX.test(formData.apellidos)) {
      newErrors.apellidos =
        "Los apellidos solo deben contener letras y espacios";
      valid = false;
    }

    // Validate correo
    if (!formData.correo.trim()) {
      newErrors.correo = "El correo es requerido";
      valid = false;
    } else if (!EMAIL_REGEX.test(formData.correo)) {
      newErrors.correo = "Ingrese un correo electrónico válido";
      valid = false;
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = "La contraseña es requerida";
      valid = false;
    } else if (!PASSWORD_REGEX.test(formData.password)) {
      newErrors.password =
        "La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial";
      valid = false;
    }

    // Validate document
    if (!documentName) {
      newErrors.document = "Debe subir una identificación oficial";
      valid = false;
    }

    // Validate terms
    if (!acceptedTerms) {
      newErrors.terms = "Debe aceptar los términos y condiciones";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      Alert.alert("Éxito", "Registro completado correctamente");
      router.replace("/screens/email-confirmation");

      console.log("Form data:", formData);
    }
  };

  return (
    <ColorGradient>
      <ScrollView>
        <SafeAreaView className="h-full py-8">
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
              <Text className="text-lg font-biryani-semibold text-white ml-3 mb-0">
                Nombre
              </Text>
              <View style={styles.inputContainer}>
                <Ionicons
                  name="person"
                  size={14}
                  color="#fff"
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Nombre"
                  placeholderTextColor="#fff"
                  value={formData.nombre}
                  onChangeText={(text) => handleChange("nombre", text)}
                />
              </View>
              {errors.nombre ? (
                <Text style={styles.errorText}>{errors.nombre}</Text>
              ) : null}

              <Text className="text-lg font-biryani-semibold text-white ml-3 mb-0">
                Apellidos
              </Text>
              <View style={styles.inputContainer}>
                <FontAwesome
                  name="id-badge"
                  size={14}
                  color="white"
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Apellidos"
                  placeholderTextColor="#fff"
                  value={formData.apellidos}
                  onChangeText={(text) => handleChange("apellidos", text)}
                />
              </View>
              {errors.apellidos ? (
                <Text style={styles.errorText}>{errors.apellidos}</Text>
              ) : null}

              <Text className="text-lg font-biryani-semibold text-white ml-3 mb-0">
                Correo
              </Text>
              <View style={styles.inputContainer}>
                <MaterialCommunityIcons
                  name="email-outline"
                  size={14}
                  color="white"
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Correo"
                  placeholderTextColor="#fff"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={formData.correo}
                  onChangeText={(text) => handleChange("correo", text)}
                />
              </View>
              {errors.correo ? (
                <Text style={styles.errorText}>{errors.correo}</Text>
              ) : null}

              <Text className="text-lg font-biryani-semibold text-white ml-3 mb-0">
                Contraseña
              </Text>
              <View style={styles.inputContainer}>
                <FontAwesome
                  name="lock"
                  size={14}
                  color="white"
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Contraseña"
                  placeholderTextColor="#fff"
                  secureTextEntry={true}
                  value={formData.password}
                  onChangeText={(text) => handleChange("password", text)}
                />
              </View>
              {errors.password ? (
                <Text style={styles.errorText}>{errors.password}</Text>
              ) : null}

              {/* Botón subir documento */}
              <TouchableOpacity
                onPress={handlePickDocument}
                className="bg-gray-300 px-4 h-8 rounded-lg flex-row items-center justify-center"
              >
                <FontAwesome6 name="upload" size={12} color="black" />
                <Text className="text-black font-biryani-semibold ml-4">
                  Subir identificación oficial
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
              {errors.document ? (
                <Text style={styles.errorText}>{errors.document}</Text>
              ) : null}

              {/* Checkbox de términos */}
              <View style={styles.termsContainer}>
                <Checkbox
                  value={acceptedTerms}
                  onValueChange={(value) => {
                    setAcceptedTerms(value);
                    if (errors.terms) {
                      setErrors({ ...errors, terms: "" });
                    }
                  }}
                  color={acceptedTerms ? "#0013ff" : undefined}
                />
                <Text style={styles.termsText}>
                  Acepto los{" "}
                  <Text style={styles.link}>Términos y Condiciones</Text>
                </Text>
              </View>
              {errors.terms ? (
                <Text style={styles.errorText}>{errors.terms}</Text>
              ) : null}

              {/* Botón de acción */}
              <TouchableOpacity
                className="bg-blue-500 px-4 py-2 rounded-lg flex-row items-center justify-center mt-2 ml-3"
                onPress={handleSubmit}
              >
                <Text className="text-white font-biryani-semibold text-center">
                  Registrarse
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </ColorGradient>
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
    flex: 1,
    color: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(66, 66, 66, 0.2)",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    height: 35,
    marginBottom: 5,
    paddingHorizontal: 12,
  },
  inputIcon: {
    marginRight: 8,
  },
  documentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight: 10,
  },
  documentText: {
    color: "white",
    fontSize: 12,
    fontFamily: "biryani-light",
    maxWidth: "90%",
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginLeft: 10,
    marginBottom: 10,
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
  errorText: {
    color: "white",
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 10,
    fontFamily: "biryani-bold",
  },
});
