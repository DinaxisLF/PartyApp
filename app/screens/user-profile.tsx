import React from "react";
import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

const ProfileScreen: React.FC = () => {
  return (
    <SafeAreaView className="bg-gray-100 h-full py-8">
        <StatusBar style="dark"/>
      <ScrollView contentContainerStyle={{ paddingBottom: 20, borderTopWidth: 20, borderTopColor: 'transparent' }}>

        <View className="flex items-center justify-center space-y-6">
          
          {/* Foto de perfil */}
          <Image
            source={require("../../assets/images/profile-image.png")} 
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              marginBottom: 20,
            }}
          />

          {/* Título de perfil */}
          <Text style={{borderBottomWidth:30, borderBottomColor: 'transparent'}} className="text-3xl font-bold text-gray-800">Mi Perfil</Text>

          {/* Información Básica */}
          <View className="bg-white p-6 rounded-xl shadow-md w-11/12 max-w-md">
            <Text className="text-lg font-semibold text-gray-700">Nombre:</Text>
            <Text className="text-xl text-gray-900">X</Text>
          </View>

          <View className="bg-white p-6 rounded-xl shadow-md w-11/12 max-w-md mt-4">
            <Text className="text-lg font-semibold text-gray-700">Correo Electrónico:</Text>
            <Text className="text-xl text-gray-900">Correo@example.com</Text>
          </View>

          <View className="bg-white p-6 rounded-xl shadow-md w-11/12 max-w-md mt-4">
            <Text className="text-lg font-semibold text-gray-700">Teléfono:</Text>
            <Text className="text-xl text-gray-900">+52 123 456 7890</Text>
          </View>

          {/* Información de Registro */}
          <View className="bg-white p-6 rounded-xl shadow-md w-11/12 max-w-md mt-4">
            <Text className="text-lg font-semibold text-gray-700">INE Digital:</Text>
            <Text className="text-xl text-green-600">Verificado</Text>
          </View>

          <View className="bg-white p-6 rounded-xl shadow-md w-11/12 max-w-md mt-4">
            <Text className="text-lg font-semibold text-gray-700">Método de Pago:</Text>
            <Text className="text-xl text-gray-900">Tarjeta de débito ***1234</Text>
          </View>

          {/* Eventos */}
          <View className="bg-white p-6 rounded-xl shadow-md w-11/12 max-w-md mt-4">
            <Text className="text-lg font-semibold text-gray-700 mb-3">Eventos Próximos:</Text>
            <View className="mb-2">
              <Text className="text-lg font-medium text-gray-800">Fiesta 1 - 20 de abril de 2025</Text>
              <Text className="text-sm text-gray-500">Grupo contratado: X</Text>
            </View>
            <View className="mb-2">
              <Text className="text-lg font-medium text-gray-800">Fiesta Corporativa - 30 de mayo de 2025</Text>
              <Text className="text-sm text-gray-500">Grupo contratado: X</Text>
            </View>
          </View>

          {/* Calificación y comentarios */}
          <View className="bg-white p-6 rounded-xl shadow-md w-11/12 max-w-md mt-4">
            <Text className="text-lg font-semibold text-gray-700 mb-3">Mis Calificaciones:</Text>
            <View className="mb-2">
              <Text className="text-lg font-medium text-gray-800">Grupo: X ⭐⭐⭐⭐⭐</Text>
              <Text className="text-sm text-gray-500">¡Excelente anfitrion</Text>
            </View>
          </View>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

export default ProfileScreen;
