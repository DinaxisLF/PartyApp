import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image, TextInput } from "react-native";

export default function ReviewScreen() {
  const [activeTab, setActiveTab] = useState<"detalles" | "review">("detalles");

  return (
    <LinearGradient
      colors={["#4A60C9", "#4A60C9", "#4A60C9", "#9663BA", "#9663BA"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <SafeAreaView className="h-full">
        <StatusBar style="light" />
        <Text className="font-biryani-semibold color-white text-[32px] text-center mt-10">
          {activeTab === "detalles" ? "Detalles" : "Review"}
        </Text>

        <View className="flex-row self-center mt-2">
          <TouchableOpacity
            className={`h-[28px] w-[158px] rounded-[4px] ${activeTab === "detalles" ? "bg-[#7E3AF2]" : "bg-[#374151]"}`}
            onPress={() => setActiveTab("detalles")}
          >
            <Text className="font-biryani color-white text-[13px] text-center pt-[3px]">Detalles</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className={`h-[28px] w-[158px] rounded-[4px] ${activeTab === "review" ? "bg-[#7E3AF2]" : "bg-[#374151]"}`}
            onPress={() => setActiveTab("review")}
          >
            <Text className="font-biryani color-white text-[13px] text-center pt-[3px]">Review</Text>
          </TouchableOpacity>
        </View>

        {activeTab === "detalles" ? (
          <ScrollView className="self-center mt-5">
            <View className="bg-slate-800 rounded-xl shadow-md w-96 h-auto justify-center items-center">
              <View className="w-full h-60 mb-5">
                <Image
                  source={require("@/assets/images/farenheit.jpg")}
                  className="w-full h-full"
                  style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                  resizeMode="cover"
                />
              </View>
              <Text className="text-white text-xl font-biryani-bold mb-1">Grupo Farenheit</Text>
              <Text className="text-white font-biryani-semibold mb-1">Fecha: <Text className="font-biryani-extralight">Fecha: 30 de febrero de 2025</Text></Text>
              <Text className="text-white font-biryani-semibold mb-1">Horario: <Text className="font-biryani-extralight">20:00 - 23:00</Text></Text>
              <Text className="text-white font-biryani-semibold mb-1">Ubicación: <Text className="font-biryani-extralight">Terraza Azul</Text></Text>
              <Text className="text-white font-biryani-semibold mb-2">Total: <Text className="text-green-500 font-biryani-extralight">$10,500 MXN</Text></Text>
              <TouchableOpacity
                className="bg-blue-500 px-4 py-2 rounded-md mb-5"
              >
                <Text className="text-white font-biryani-bold">Ver perfil</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        ) : (
          <ScrollView className="self-center mt-5">
            {/* visualizar comentario del cliente */}
            <View className="bg-slate-800 rounded-xl shadow-md w-96 h-auto p-5 justify-center items-center mb-5">
              <Text className="font-biryani-extralight mb-3">⭐⭐⭐⭐⭐</Text>
              <Text className="text-white text-center font-biryani-semibold mb-3">"Excelente ambiente, y un gran repertorio musical."</Text>
              <View className="p-3 w-full mb-5 flex-row justify-center items-center rounded-md gap-2">
                <View className="p-3 rounded-full w-[40px] h-[40px] justify-center items-center">
                  <Image
                    source={require("@/assets/images/user_icon_white.png")}
                    style={{ width: 30, height: 30, alignSelf: "center" }}
                  />
                </View>
                <Text className="text-white text-center font-biryani-semibold">Eduardo Flores</Text>
              </View>
            </View>
            {/* Apartado para crear una review */}
            <View className="bg-slate-800 rounded-xl shadow-md w-96 h-auto p-5 justify-center items-center mb-5">
              <Text className="text-white text-center font-biryani-semibold mb-3">Calificación</Text>
              <Text className="font-biryani-extralight mb-3">⭐⭐⭐⭐⭐</Text>
              <View className="p-3 w-full mb-5">
                <Text className="text-white text-center font-biryani-semibold">Reseña</Text>
                <TextInput
                  className="bg-white text-black p-2 rounded-md mt-2"
                  placeholder="Escribe tu reseña aquí..."
                  placeholderTextColor="#A1A1AA"
                  multiline={true}
                  numberOfLines={4}
                  textAlignVertical="top"
                  style={{ maxHeight: 200, minHeight: 200 }}
                />
                <TouchableOpacity
                  className="bg-blue-500 w-1/2 px-4 py-2 rounded-md mt-5 mb-5"
                  style={{ alignSelf: "center" }}
                >
                  <Text className="text-white text-center font-biryani-bold">Enviar reseña</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        )}

      </SafeAreaView>
    </LinearGradient >
  );
}