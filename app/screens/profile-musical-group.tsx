import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { View, Text, Image, ScrollView, TouchableOpacity, Linking, SafeAreaView, StyleSheet } from "react-native";

export default function PerfilGrupo() {
  const generos = ["Rock", "Pop", "Cumbia"]; // Géneros musicales del grupo
  const portafolio = [
    { tipo: "video", uri: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
  ];

  const abrirVideo = (url: string) => {
    Linking.openURL(url);  // Abre el enlace de YouTube en el navegador o en la app de YouTube
  };

  return (
    <LinearGradient
      colors={['#4A60C9', '#4A60C9', '#4A60C9', '#9663BA', '#9663BA']}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <SafeAreaView>
        <ScrollView contentContainerStyle={{
          paddingBottom: 40,
          borderTopColor: "transparent",
        }}>
          {/* Barra de navegación superior */}
          <StatusBar style="light" />
          {/* Foto de portada */}
          <Image
            source={{ uri: "https://img.freepik.com/foto-gratis/retrato-mujer-cantando-microfono_107420-96131.jpg?t=st=1743888873~exp=1743892473~hmac=2aa79b701bc1930b4e870eeadefeecd8560b13e5dc4ce52d5fbc4b8bb0116799&w=1380" }}
            className="w-full h-52 "
            resizeMode="cover"
          />

          <View className="px-5 py-4 w-full flex">
            {/* Nombre del grupo */}
            <Text className="text-xl text-white font-biryani-bold mb-2">Nombre Grupo Musical</Text>

            {/* Estrellas de calificación */}
            <View className="flex-row mt-2 mb-5">
              <FontAwesome name="star" size={20} color="#FFD700" />
              <FontAwesome name="star" size={20} color="#FFD700" />
              <FontAwesome name="star" size={20} color="#FFD700" />
              <FontAwesome name="star-half-full" size={20} color="#FFD700" />
              <FontAwesome name="star-o" size={20} color="#FFD700" />
            </View>

            {/* Descripción del grupo */}
            <View className="bg-slate-800 p-6 rounded-xl shadow-md max-w-md mt-4 mb-5">
              <Text className="text-white mb-4">
                Aquí va la descripción del grupo musical. Puedes incluir información sobre su estilo, historia y cualquier otro detalle relevante.
              </Text>
            </View>


            {/* Géneros musicales */}
            <Text className="text-white font-biryani-semibold">Géneros:</Text>
            <View className="flex-row flex-wrap gap-2 mt-1 mb-4">
              {generos.map((g, idx) => (
                <Text key={idx} className="bg-slate-800 text-sm text-white px-3 py-1 rounded-full">
                  {g}
                </Text>
              ))}
            </View>

            {/* Tarifa por hora */}
            <Text className="text-white font-biryani-semibold mb-1">Tarifa por hora:</Text>
            <Text className="bg-slate-800 text-lg text-white mb-4 self-start pl-4 pr-4 rounded-full">$1500 MXN</Text>

            {/* Portafolio */}
            <Text className="text-white font-biryani-semibold mb-2">Portafolio:</Text>
            <ScrollView horizontal className="mb-6">
              {portafolio.map((item, idx) => (
                <TouchableOpacity
                  key={idx}
                  onPress={() => abrirVideo(item.uri)}  // Maneja el clic y redirige al video
                  style={{ marginRight: 12 }}
                >
                  <Image
                    source={{ uri: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg" }}  // Miniatura del video
                    style={{ width: 150, height: 90, borderRadius: 8 }}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* Calendario de disponibilidad (estático) */}
            <Text className="text-white font-biryani-semibold mb-2">Calendario de disponibilidad:</Text>
            <View className="bg-slate-800 p-4 rounded-xl shadow-md max-w-md mb-5">
              <Text className="text-sm text-white">Miércoles a Viernes: 6PM - 10PM</Text>
              <Text className="text-sm text-white">Sábados y Domingo: Disponible todo el día</Text>
              <Text className="text-sm text-white">Lunes y Martes: No disponible</Text>
            </View>
          </View>
        </ScrollView >
        <TouchableOpacity
          onPress={() => console.log('Botón presionado')}
          style={styles["btn-contratar"]}
        >
          <Image
            source={require("@/assets/images/plus_round_icon.png")}
            style={{ width: 24, height: 24, marginRight: 8 }}
          />
          <Text className="text-white font-biryani-black">Contratar</Text>
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
})
