import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ColorGradient from "@/assets/components/colorfullBackground";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

const EmailConfirmationScreen = () => {
  return (
    <ColorGradient>
      <ScrollView>
        <SafeAreaView className="h-full">
          <View className="flex flex-col px-5 items-center justify-center mt-10">
            <View
              className="p-4 rounded-3xl w-11/12 max-w-md mb-5 border border-white"
              style={{ backgroundColor: "rgba(31,41,55, 0.3)" }}
            >
              <Text className="text-2xl text-center font-biryani-bold text-white mb-2 py-1">
                Confirmar Email
              </Text>
              <Text className="text-xl text-center font-biryani-semibold text-white py-5">
                Por favor confirma tu correo electronico, se ha enviado un
                correo de confirmación
              </Text>
              <View className="items-center">
                <Ionicons name="mail-unread-outline" size={100} color="white" />
                <TouchableOpacity
                  className="bg-blue-500 px-5 py-2 rounded-md mt-2 max-w-40"
                  onPress={() => router.replace("/(root)/(group)/home")}
                >
                  <View className="flex-row items-center justify-center">
                    <Text className="text-white font-biryani-semibold">
                      Grupo
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  className="bg-blue-500 px-5 py-2 rounded-md mt-2 max-w-40"
                  onPress={() => router.replace("/(root)/(user)/home")}
                >
                  <View className="flex-row items-center justify-center">
                    <Text className="text-white font-biryani-semibold">
                      Usuario
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </ColorGradient>
  );
};

export default EmailConfirmationScreen;
