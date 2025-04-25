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
import { FontAwesome } from "@expo/vector-icons";
import GradientBackground from '../../assets/components/gradientBackground'; // ajusta la ruta si es necesario


const ProfileScreen: React.FC = () => {
  return (
    <GradientBackground>
    <SafeAreaView>
      <StatusBar style="light" />
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
              marginBottom: 5,
            }}
          />

            {/* Estrellas de calificación */}
            <View className="flex-row mt-1 mb-2">
              <FontAwesome name="star" size={20} color="#FFD700" />
              <FontAwesome name="star" size={20} color="#FFD700" />
              <FontAwesome name="star" size={20} color="#FFD700" />
              <FontAwesome name="star-half-full" size={20} color="#FFD700" />
              <FontAwesome name="star-o" size={20} color="#FFD700" />
            </View>


          {/* Título de perfil */}
          <Text className="text-3xl font-bold text-white" style={{marginTop: 5}}>Nombre Del Usuario</Text>

          {/* Botón editar perfil */}
          <TouchableOpacity
            className="bg-violet-500 px-5 py-2 rounded-md mt-2"
            style={{ marginBottom: 15, marginTop: 15}}
          >
            <Text className="text-white font-semibold">Editar Perfil</Text>
          </TouchableOpacity>

          {/* Información básica */}
          <View className="bg-slate-800 p-6 rounded-xl shadow-md w-11/12 max-w-md">
            <Text className="text-lg font-semibold text-white">Nombre:</Text>
            <Text className="text-xl text-white">X</Text>
          </View>

          <View className="bg-slate-800 p-6 rounded-xl shadow-md w-11/12 max-w-md mt-4">
            <Text className="text-lg font-semibold text-white">
              Correo Electrónico:
            </Text>
            <Text className="text-xl text-white">correo@example.com</Text>
          </View>

          <View className="bg-slate-800 p-6 rounded-xl shadow-md w-11/12 max-w-md mt-4">
            <Text className="text-lg font-semibold text-white">
              Teléfono:
            </Text>
            <Text className="text-xl text-white">+52 123 456 7890</Text>
          </View>

          {/* Registro */}
          <View className="bg-slate-800 p-6 rounded-xl shadow-md w-11/12 max-w-md mt-4">
            <Text className="text-lg font-semibold text-white">
              INE Digital:
            </Text>
            <Text className="text-xl text-green-600">Verificado</Text>
          </View>

          <View className="bg-slate-800 p-6 rounded-xl shadow-md w-11/12 max-w-md mt-4">
            <Text className="text-lg font-semibold text-white">
              Método de Pago:
            </Text>
            <Text className="text-xl text-white">
              Tarjeta de débito ***1234
            </Text>
          </View>

          {/* Eventos próximos */}
          <View className="bg-slate-800 p-6 rounded-xl shadow-md w-11/12 max-w-md mt-4">
            <Text className="text-lg font-semibold text-white mb-3">
              Eventos Próximos:
            </Text>
            <View className="mb-2">
              <Text className="text-lg font-medium text-white">
                Fiesta 1 - 20 de abril de 2025
              </Text>
              <Text className="text-sm text-white">Grupo contratado: X</Text>
            </View>
            <View className="mb-2">
              <Text className="text-lg font-medium text-white">
                Fiesta Corporativa - 30 de mayo de 2025
              </Text>
              <Text className="text-sm text-white">Grupo contratado: X</Text>
            </View>
          </View>

          {/* Historial de eventos */}
          <View className="bg-slate-800 p-6 rounded-xl shadow-md w-11/12 max-w-md mt-4">
            <View className="flex-row justify-between items-center mb-3">
              <Text className="text-lg font-semibold text-white">
                Historial de Eventos:
              </Text>
              <TouchableOpacity>
                <Text className="text-sm text-blue-500 font-semibold">
                  Ver todos
                </Text>
              </TouchableOpacity>
            </View>

            <View className="mb-2">
              <Text className="text-lg font-medium text-white">
                Cumpleaños - 10 de enero de 2025
              </Text>
              <Text className="text-sm text-white">
                Grupo contratado: Mariachi Real
              </Text>
            </View>

            <View className="mb-2">
              <Text className="text-lg font-medium text-white">
                Graduación - 15 de diciembre de 2024
              </Text>
              <Text className="text-sm text-white">
                Grupo contratado: Banda Norteña
              </Text>
            </View>
          </View>

          {/* Calificaciones */}
          <View className="bg-slate-800 p-6 rounded-xl shadow-md w-11/12 max-w-md mt-4 mb-6">
            <Text className="text-lg font-semibold text-white mb-3">
              Mis Calificaciones:
            </Text>
            <View className="mb-2">
              <Text className="text-lg font-medium text-white">
                Grupo: X ⭐⭐⭐⭐⭐
              </Text>
              <Text className="text-sm text-white">
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
    </GradientBackground>
  );
};

export default ProfileScreen;