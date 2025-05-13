import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  Linking,
  Alert,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";
import Checkbox from "expo-checkbox";
import { useState, useRef } from "react";
import * as DocumentPicker from "expo-document-picker";
import ColorGradient from "@/assets/components/colorfullBackground";
import { router } from "expo-router";

type FormData = {
  groupName: string;
  email: string;
  password: string;
  genres: string[];
};

type FormErrors = {
  groupName: string;
  email: string;
  password: string;
  genres: string;
  document: string;
  terms: string;
};

export default function GroupRegister() {
  const [isChecked, setChecked] = useState(false);
  const [documentName, setDocumentName] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    groupName: "",
    email: "",
    password: "",
    genres: [],
  });
  const [errors, setErrors] = useState<FormErrors>({
    groupName: "",
    email: "",
    password: "",
    genres: "",
    document: "",
    terms: "",
  });

  // Regex patterns
  const GROUP_NAME_REGEX = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,}$/;
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const PASSWORD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;

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

  const handleChange = (name: keyof FormData, value: string | string[]) => {
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user types
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
      groupName: "",
      email: "",
      password: "",
      genres: "",
      document: "",
      terms: "",
    };

    // Validate group name
    if (!formData.groupName.trim()) {
      newErrors.groupName = "El nombre del grupo es requerido";
      valid = false;
    } else if (!GROUP_NAME_REGEX.test(formData.groupName)) {
      newErrors.groupName = "El nombre solo debe contener letras y espacios";
      valid = false;
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "El correo es requerido";
      valid = false;
    } else if (!EMAIL_REGEX.test(formData.email)) {
      newErrors.email = "Ingrese un correo electrónico válido";
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

    // Validate genres
    if (formData.genres.length === 0) {
      newErrors.genres = "Debe seleccionar al menos un género musical";
      valid = false;
    }

    // Validate document
    if (!documentName) {
      newErrors.document = "Debe subir una identificación oficial";
      valid = false;
    }

    // Validate terms
    if (!isChecked) {
      newErrors.terms = "Debe aceptar los términos y condiciones";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Form is valid, proceed with registration
      Alert.alert("Éxito", "Registro completado correctamente");
      router.replace("/screens/email-confirmation");
      console.log("Form data:", formData);
    }
  };

  return (
    <ColorGradient>
      <SafeAreaView className="h-full">
        <ScrollView>
          <Text className="text-white text-[24px] font-kronaone mb-2 pt-8 text-center">
            Crear Cuenta
          </Text>
          <View className="flex-row items-center justify-center pb-1">
            <Image
              source={require("@/assets/images/icon _music mic_.png")}
              className="w-14 h-14 -mb-4"
            />
            <Image
              source={require("@/assets/images/icon _star fill_.png")}
              className="w-5 h-5 -mb-9 -ml-5"
            />
          </View>

          <View className="flex-col bg-[#3C3C432E] p-6 rounded-[20px] m-7 mb-28 items-center">
            <View className="w-full max-w-[250px]">
              <Text className="text-sm font-inter-bold font-medium text-white py-2">
                Nombre del Grupo o Solista
              </Text>
              <View className="flex-row bg-[#3C3C434D] h-[35px] mb-1 rounded-lg border border-gray-300 items-center px-4">
                <Image
                  source={require("@/assets/images/user.png")}
                  className="w-4 h-4 mr-2"
                />
                <TextInput
                  placeholder="Nombre"
                  placeholderTextColor="white"
                  className="flex-1 text-white font-inter text-sm"
                  value={formData.groupName}
                  onChangeText={(text) => handleChange("groupName", text)}
                />
              </View>
              {errors.groupName ? (
                <Text className="text-white font-biryani-bold text-xs py-1">
                  {errors.groupName}
                </Text>
              ) : null}

              <Text className="text-sm font-inter-bold font-medium text-white py-2">
                Generos Musicales
              </Text>
              <View className="flex-row bg-[#3C3C434D] h-[35px] mb-1 rounded-lg border border-gray-300 items-center px-4">
                <Image
                  source={require("@/assets/images/file-music.png")}
                  className="w-4 h-4 mr-2"
                />
                <RNPickerSelect
                  onValueChange={(value) =>
                    handleChange("genres", value ? [value] : [])
                  }
                  placeholder={{ label: "Genero(s)", value: null }}
                  items={[
                    { label: "Rock", value: "rock" },
                    { label: "Pop", value: "pop" },
                    { label: "Electronica", value: "electronica" },
                    {
                      label: "Clásico/Instrumental",
                      value: "clasico/instrumental",
                    },
                    { label: "Música Latina", value: "musica latina" },
                    { label: "Country/Folk", value: "country/folk" },
                    { label: "Música del Mundo", value: "musica del mundo" },
                    { label: "Bailable/Fiesta", value: "bailable/fiesta" },
                    {
                      label: "Ambiente/Experimental",
                      value: "ambiente/experimental",
                    },
                  ]}
                  style={{
                    inputIOS: {
                      color: "white",
                      fontFamily: "inter",
                      fontSize: 14,
                      lineHeight: 20,
                      paddingTop: 7,
                      paddingRight: 15,
                    },
                    placeholder: {
                      color: "white",
                      fontFamily: "inter",
                      fontSize: 14,
                      lineHeight: 20,
                      paddingTop: 7,
                      paddingRight: 15,
                    },
                  }}
                  Icon={() => (
                    <Image
                      source={require("@/assets/images/chevron-down.png")}
                      className="w-4 h-4 mt-[14px]"
                    />
                  )}
                />
              </View>
              {errors.genres ? (
                <Text className="text-white font-biryani-bold text-xs py-1">
                  {errors.genres}
                </Text>
              ) : null}

              <Text className="text-sm font-inter-bold font-medium text-white py-2">
                Correo
              </Text>
              <View className="flex-row bg-[#3C3C434D] h-[35px] mb-1 rounded-lg border border-gray-300 items-center px-4">
                <Image
                  source={require("@/assets/images/envelope.png")}
                  className="w-4 h-4 mr-2"
                />
                <TextInput
                  placeholder="email@example.com"
                  placeholderTextColor="white"
                  className="flex-1 text-white font-inter text-sm"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={formData.email}
                  onChangeText={(text) => handleChange("email", text)}
                />
              </View>
              {errors.email ? (
                <Text className="text-white font-biryani-bold text-xs py-1">
                  {errors.email}
                </Text>
              ) : null}

              <Text className="text-sm font-inter-bold font-medium text-white py-2">
                Contraseña
              </Text>
              <View className="flex-row bg-[#3C3C434D] h-[35px] mb-1 rounded-lg border border-gray-300 items-center px-4">
                <TextInput
                  placeholder="••••••••••"
                  placeholderTextColor="white"
                  secureTextEntry={!passwordVisible}
                  className="flex-1 text-white font-inter text-sm"
                  value={formData.password}
                  onChangeText={(text) => handleChange("password", text)}
                />
              </View>
              {errors.password ? (
                <Text className="text-white font-biryani-bold text-xs py-1">
                  {errors.password}
                </Text>
              ) : null}
            </View>

            <TouchableOpacity
              onPress={handlePickDocument}
              className="flex-row justify-center mt-5 rounded-[8px] h-[25px] w-[250px] bg-white items-center"
            >
              <Image
                source={require("@/assets/images/upload.png")}
                className="w-4 h-4 mr-2"
              />
              <Text className="text-sm font-inter">
                Subir identificación oficial
              </Text>
            </TouchableOpacity>
            {errors.document ? (
              <Text className="text-white font-biryani-bold text-xs mt-1 py-1">
                {errors.document}
              </Text>
            ) : null}
            <Text className="text-white text-xs mt-1">
              {documentName || " "}
            </Text>

            <View className="flex-row items-center mt-6 w-[250px]">
              <Checkbox
                value={isChecked}
                onValueChange={(value) => {
                  setChecked(value);
                  if (errors.terms) {
                    setErrors({ ...errors, terms: "" });
                  }
                }}
                style={{
                  borderColor: "#ffff",
                  borderWidth: 2,
                }}
              />
              <Text className="text-sm font-inter text-white ml-2">
                Acepto los
                <Text
                  className="text-sm font-inter underline text-white"
                  onPress={() => Linking.openURL("https://google.com/")}
                >
                  Términos & Condiciones
                </Text>
              </Text>
            </View>
            {errors.terms ? (
              <Text className="text-white font-biryani-bold text-xs py-1 mt-1">
                {errors.terms}
              </Text>
            ) : null}

            <TouchableOpacity
              className="mt-7 rounded-lg h-[41px] w-[250px] bg-blue-700 justify-center"
              onPress={handleSubmit}
            >
              <Text className="text-white text-sm text-center font-inter font-medium">
                Acceder
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ColorGradient>
  );
}
