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
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";
import Checkbox from "expo-checkbox";
import { useState, useRef } from "react";
import * as DocumentPicker from "expo-document-picker";
import ColorGradient from "@/assets/components/colorfullBackground";

export default function GroupReigster() {
  const [isChecked, setChecked] = useState(false);
  const [documentName, setDocumentName] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

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
    <ColorGradient>
      <SafeAreaView className="h-full">
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
            <View className="flex-row bg-[#3C3C434D] h-[35px] mb-3 rounded-lg border border-gray-300 items-center px-4">
              <Image
                source={require("@/assets/images/user.png")}
                className="w-4 h-4 mr-2"
              />
              <TextInput
                placeholder="Nombre"
                placeholderTextColor="white"
                className="flex-1 text-white font-inter text-sm"
              />
            </View>
            <Text className="text-sm font-inter-bold font-medium text-white py-2">
              Generos Musicales
            </Text>
            <View className="flex-row bg-[#3C3C434D] h-[35px] mb-3 rounded-lg border border-gray-300 items-center px-4">
              <Image
                source={require("@/assets/images/file-music.png")}
                className="w-4 h-4 mr-2"
              />
              <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                placeholder={{ label: "Genero(s)", value: "" }}
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
            <Text className="text-sm font-inter-bold font-medium text-white py-2">
              Correo
            </Text>
            <View className="flex-row bg-[#3C3C434D] h-[35px] mb-3 rounded-lg border border-gray-300 items-center px-4">
              <Image
                source={require("@/assets/images/envelope.png")}
                className="w-4 h-4 mr-2"
              />
              <TextInput
                placeholder="email@example.com"
                placeholderTextColor="white"
                className="flex-1 text-white font-inter text-sm"
              />
            </View>
            <Text className="text-sm font-inter-bold font-medium text-white py-2">
              Contraseña
            </Text>
            <View className="flex-row bg-[#3C3C434D] h-[35px] mb-3 rounded-lg border border-gray-300 items-center px-4">
              <TextInput
                placeholder="••••••••••"
                placeholderTextColor="white"
                secureTextEntry={!passwordVisible}
                className="flex-1 text-white font-inter text-sm"
              />
            </View>
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
              Subir identificacion oficial
            </Text>
          </TouchableOpacity>
          <View className="flex-row items-center mt-6 w-[250px]">
            <Checkbox
              value={isChecked}
              onValueChange={setChecked}
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
          <TouchableOpacity className="mt-7 rounded-lg h-[41px] w-[250px] bg-blue-700 justify-center">
            <Text className="text-white text-sm text-center font-inter font-medium">
              Acceder
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ColorGradient>
  );
}
