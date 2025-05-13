import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import GradientBackground from "../../../assets/components/gradientBackground";
import { router } from "expo-router";

const GroupProfileScreen: React.FC = () => {
  return (
    <GradientBackground>
      <SafeAreaView>
        <StatusBar style="light" />
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 40,
          }}
        >
          <View className="flex items-center justify-center space-y-4">
            {/* Imagen del grupo */}
            <Image
              source={require("@/assets/images/farenheit.jpg")}
              style={{
                width: "100%",
                height: 180,
              }}
              resizeMode="stretch"
            />

            {/* Nombre del grupo */}
            <Text className="text-2xl font-bold text-white mt-4 mb-4">
              Nombre Grupo
            </Text>

            {/* Botón editar perfil */}
            <TouchableOpacity className="bg-violet-500 px-5 py-2 rounded-md mt-1 mb-5">
              <Text className="text-white font-semibold">Editar Perfil</Text>
            </TouchableOpacity>

            {/* Información del grupo */}
            <View className="bg-slate-800 p-6 rounded-xl shadow-md w-11/12 max-w-md">
              <Text className="text-white font-semibold text-lg">Nombre</Text>
              <Text className="text-white text-base mt-1">
                Grupo Versaril Dinamita
              </Text>
            </View>

            <View className="bg-slate-800 p-6 rounded-xl shadow-md w-11/12 max-w-md mt-4">
              <Text className="text-white font-semibold text-lg">
                Correo Electrónico
              </Text>
              <Text className="text-white text-base mt-1">
                dinamita_grupo@gmail.com
              </Text>
            </View>

            <View className="bg-slate-800 p-6 rounded-xl shadow-md w-11/12 max-w-md mt-4">
              <Text className="text-white font-semibold text-lg">Teléfono</Text>
              <Text className="text-white text-base mt-1">
                +52 123 456 7890
              </Text>
            </View>

            <View className="bg-slate-800 p-6 rounded-xl shadow-md w-11/12 max-w-md mt-4 mb-6">
              <Text className="text-white font-semibold text-lg">Tarifa</Text>
              <Text className="text-white text-base mt-1">$3400</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GradientBackground>
  );
};

export default GroupProfileScreen;
