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

const ProfileScreen: React.FC = () => {
  return (
    <SafeAreaView className="bg-gray-100 h-full py-8">
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 40,
          borderTopWidth: 20,
          borderTopColor: "transparent",
        }}
      >
        <View className="flex items-center justify-center space-y-6">
          {/* Imagen de perfil */}
          <Image
            source={require("../../assets/images/profile-image.png")}
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              marginBottom: 10,
            }}
          />

          {/* Título de perfil */}
          <Text className="text-3xl font-bold text-gray-800">Mi Perfil</Text>

          {/* Botón editar perfil */}
          <TouchableOpacity
            className="bg-blue-500 px-5 py-2 rounded-full mt-2"
            style={{ marginBottom: 15 }}
          >
            <Text className="text-white font-semibold">Editar Perfil</Text>
          </TouchableOpacity>

          {/* Información básica */}
          <View className="bg-white p-6 rounded-xl shadow-md w-11/12 max-w-md">
            <Text className="text-lg font-semibold text-gray-700">Nombre:</Text>
            <Text className="text-xl text-gray-900">X</Text>
          </View>

          <View className="bg-white p-6 rounded-xl shadow-md w-11/12 max-w-md mt-4">
            <Text className="text-lg font-semibold text-gray-700">
              Correo Electrónico:
            </Text>
            <Text className="text-xl text-gray-900">correo@example.com</Text>
          </View>

          <View className="bg-white p-6 rounded-xl shadow-md w-11/12 max-w-md mt-4">
            <Text className="text-lg font-semibold text-gray-700">
              Teléfono:
            </Text>
            <Text className="text-xl text-gray-900">+52 123 456 7890</Text>
          </View>

          {/* Registro */}
          <View className="bg-white p-6 rounded-xl shadow-md w-11/12 max-w-md mt-4">
            <Text className="text-lg font-semibold text-gray-700">
              INE Digital:
            </Text>
            <Text className="text-xl text-green-600">Verificado</Text>
          </View>

          <View className="bg-white p-6 rounded-xl shadow-md w-11/12 max-w-md mt-4">
            <Text className="text-lg font-semibold text-gray-700">
              Método de Pago:
            </Text>
            <Text className="text-xl text-gray-900">
              Tarjeta de débito ***1234
            </Text>
          </View>

          {/* Eventos próximos */}
          <View className="bg-white p-6 rounded-xl shadow-md w-11/12 max-w-md mt-4">
            <Text className="text-lg font-semibold text-gray-700 mb-3">
              Eventos Próximos:
            </Text>
            <View className="mb-2">
              <Text className="text-lg font-medium text-gray-800">
                Fiesta 1 - 20 de abril de 2025
              </Text>
              <Text className="text-sm text-gray-500">Grupo contratado: X</Text>
            </View>
            <View className="mb-2">
              <Text className="text-lg font-medium text-gray-800">
                Fiesta Corporativa - 30 de mayo de 2025
              </Text>
              <Text className="text-sm text-gray-500">Grupo contratado: X</Text>
            </View>
          </View>

          {/* Historial de eventos */}
          <View className="bg-white p-6 rounded-xl shadow-md w-11/12 max-w-md mt-4">
            <View className="flex-row justify-between items-center mb-3">
              <Text className="text-lg font-semibold text-gray-700">
                Historial de Eventos:
              </Text>
              <TouchableOpacity>
                <Text className="text-sm text-blue-500 font-semibold">
                  Ver todos
                </Text>
              </TouchableOpacity>
            </View>

            <View className="mb-2">
              <Text className="text-lg font-medium text-gray-800">
                Cumpleaños - 10 de enero de 2025
              </Text>
              <Text className="text-sm text-gray-500">
                Grupo contratado: Mariachi Real
              </Text>
            </View>

            <View className="mb-2">
              <Text className="text-lg font-medium text-gray-800">
                Graduación - 15 de diciembre de 2024
              </Text>
              <Text className="text-sm text-gray-500">
                Grupo contratado: Banda Norteña
              </Text>
            </View>
          </View>

          {/* Calificaciones */}
          <View className="bg-white p-6 rounded-xl shadow-md w-11/12 max-w-md mt-4 mb-6">
            <Text className="text-lg font-semibold text-gray-700 mb-3">
              Mis Calificaciones:
            </Text>
            <View className="mb-2">
              <Text className="text-lg font-medium text-gray-800">
                Grupo: X ⭐⭐⭐⭐⭐
              </Text>
              <Text className="text-sm text-gray-500">
                ¡Excelente anfitrión!
              </Text>
            </View>
          </View>

          {/* Botón cerrar sesión */}
          <TouchableOpacity className="bg-red-500 px-6 py-3 rounded-full mb-10">
            <Text className="text-white font-semibold text-lg">
              Cerrar Sesión
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
