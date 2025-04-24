import { View, Text, Image, ScrollView, TouchableOpacity, Linking, SafeAreaView, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

export default function PerfilGrupo() {
  const generos = ["Rock", "Pop", "Cumbia"];
  const diasDisponibles = ["D", "L", "M", "I", "J", "V", "S"];
  const portafolio = [
    { tipo: "video", uri: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
  ];

  const abrirVideo = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <LinearGradient
      colors={['#4A60C9', '#4A60C9', '#4A60C9', '#9663BA', '#9663BA']}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <SafeAreaView>
        <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
          <StatusBar style="light" />
          
          {/* Imagen de encabezado */}
          <Image
            source={{ uri: "https://img.freepik.com/foto-gratis/retrato-mujer-cantando-microfono_107420-96131.jpg?t=st=1743888873~exp=1743892473~hmac=2aa79b701bc1930b4e870eeadefeecd8560b13e5dc4ce52d5fbc4b8bb0116799&w=1380" }}
            className="w-full h-52"
            resizeMode="cover"
          />

          <View className="px-5 py-4">
            {/* Nombre y estrellas */}
            <View className="flex-row items-center justify-between mb-2">
              <Text className="text-xl text-white font-bold">Los Rítmicos</Text>
              <View className="flex-row gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <FontAwesome
                    key={i}
                    name={i <= 3 ? "star" : i === 4 ? "star-half-full" : "star-o"}
                    size={18}
                    color="#FFD700"
                  />
                ))}
              </View>
            </View>

            {/* Descripción sombreada */}
            <View className="bg-slate-800 p-4 rounded-xl shadow-md mb-5">
              <Text className="text-white text-sm">
                Somos una agrupación versátil con más de 8 años de experiencia tocando en bodas, cumpleaños, eventos corporativos y más.
              </Text>
            </View>

            {/* Géneros */}
            <Text className="text-white font-semibold mb-1">Géneros:</Text>
            <View className="flex-row flex-wrap gap-2 mb-4">
              {generos.map((g, idx) => (
                <Text key={idx} className="bg-black/30 text-white px-3 py-1 rounded-full text-sm">
                  {g}
                </Text>
              ))}
            </View>

            {/* Tarifa */}
            <Text className="text-white font-semibold mb-1">Tarifa por hora:</Text>
            <Text className="text-white bg-black/30 px-4 py-2 rounded-full w-fit mb-4">$1500 MXN</Text>

            {/* Calendario de disponibilidad */}
            <Text className="text-white font-semibold mb-2">Calendario de disponibilidad:</Text>
            <View className="bg-slate-800 p-4 rounded-xl shadow-md mb-5">
              <Text className="text-sm text-white">Miércoles a Viernes: 6PM - 10PM</Text>
              <Text className="text-sm text-white">Sábados y Domingo: Disponible todo el día</Text>
              <Text className="text-sm text-white">Lunes y Martes: No disponible</Text>
            </View>

            {/* Portafolio */}
            <Text className="text-white font-semibold mb-2">Portafolio:</Text>
            <ScrollView horizontal className="mb-6">
              {portafolio.map((item, idx) => (
                <TouchableOpacity
                  key={idx}
                  onPress={() => abrirVideo(item.uri)}
                  style={{ marginRight: 12 }}
                >
                  <Image
                    source={{ uri: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg" }}
                    style={{ width: 150, height: 90, borderRadius: 8 }}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </ScrollView>

        {/* Botón contratar */}
        <TouchableOpacity
          style={styles["btn-contratar"]}
          onPress={() => router.push("/screens/hiring-screen")}
        >
          <Image
            source={require("@/assets/images/plus_round_icon.png")}
            style={{ width: 24, height: 24, marginRight: 8 }}
          />
          <Text className="text-white font-bold">Contratar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  "btn-contratar": {
    position: 'absolute',
    bottom: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4A60C9',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 100,
  }
});
