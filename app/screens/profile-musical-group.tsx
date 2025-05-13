import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import GradientBackground from "@/assets/components/gradientBackground";
import { Video, ResizeMode } from "expo-av";

export default function PerfilGrupo() {
  const generos = ["Norteño", "Regional", "Banda"];
  const diasDisponibles = ["D", "L", "M", "I", "J", "V", "S"];
  const portafolio = [
    { tipo: "video", uri: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
  ];

  const abrirVideo = (url: string) => {
    Linking.openURL(url);
  };

  const data = {
    image: require("@/assets/images/farenheit.jpg"),
  };

  const previewImages = [
    "https://placekitten.com/400/300",
    "https://picsum.photos/seed/picsum/400/300",
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d", // nueva
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131", // nueva
  ];

  const previewVideos = [
    "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", // nuevo
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4", // nuevo
  ];

  return (
    <GradientBackground>
      <SafeAreaView>
        <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
          <StatusBar style="light" />

          {/* Imagen de encabezado */}
          <Image
            source={data.image}
            className="size-96 h-38"
            resizeMode="cover"
          />

          <View className="px-5 py-4">
            {/* Nombre y estrellas */}
            <View className="flex-row items-center justify-between mb-2">
              <Text className="text-xl text-white font-bold">
                Grupo Farenheit
              </Text>
              <View className="flex-row gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <FontAwesome
                    key={i}
                    name={
                      i <= 3 ? "star" : i === 4 ? "star-half-full" : "star-o"
                    }
                    size={18}
                    color="#FFD700"
                  />
                ))}
              </View>
            </View>

            {/* Descripción sombreada */}
            <View className="bg-slate-800 p-4 rounded-xl shadow-md mb-5">
              <Text className="text-white text-sm">
                Somos una agrupación versátil con más de 8 años de experiencia
                tocando en bodas, cumpleaños, eventos corporativos y más.
              </Text>
            </View>

            {/* Géneros */}
            <Text className="text-white font-semibold mb-1">Géneros:</Text>
            <View className="flex-row flex-wrap gap-2 mb-4">
              {generos.map((g, idx) => (
                <Text
                  key={idx}
                  className="bg-black/30 text-white px-3 py-1 rounded-full text-sm"
                >
                  {g}
                </Text>
              ))}
            </View>

            {/* Tarifa */}
            <Text className="text-white font-semibold mb-1">
              Tarifa por hora:
            </Text>
            <Text className="text-white bg-black/30 px-4 py-2 rounded-full w-fit mb-4">
              $3600 MXN
            </Text>

            {/* Calendario de disponibilidad */}
            <Text className="text-white font-semibold mb-2">
              Calendario de disponibilidad:
            </Text>
            <View className="bg-slate-800 p-4 rounded-xl shadow-md mb-5">
              <Text className="text-sm text-white">
                Miércoles a Viernes: 6PM - 10PM
              </Text>
              <Text className="text-sm text-white">
                Sábados y Domingo: Disponible todo el día
              </Text>
              <Text className="text-sm text-white">
                Lunes y Martes: No disponible
              </Text>
            </View>

            {/* Portafolio */}
            <Text className="text-white font-semibold mb-2">Portafolio:</Text>
            <ScrollView className="mb-10">
              <View className="bg-slate-800 rounded-xl shadow-md w-auto h-auto justify-center items-center mb-5">
                <Text style={styles.sectionTitle}>Fotos</Text>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  className="pb-4"
                >
                  <View className="flex-row">
                    {previewImages.map((uri, index) => (
                      <Image
                        key={index}
                        source={{ uri }}
                        className="w-60 h-40 rounded-lg mr-4"
                        resizeMode="cover"
                      />
                    ))}
                  </View>
                </ScrollView>
              </View>

              <View className="bg-slate-800 rounded-xl shadow-md w-auto h-auto justify-center items-center mb-5 p-2">
                <Text style={styles.sectionTitle}>Videos</Text>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  className="px-4 pb-4"
                >
                  <View className="flex-row">
                    {previewVideos.map((uri, index) => (
                      <Video
                        key={index}
                        source={{ uri }}
                        style={{
                          width: 240,
                          height: 135,
                          borderRadius: 10,
                          marginRight: 16,
                        }}
                        useNativeControls
                        resizeMode={ResizeMode.CONTAIN}
                      />
                    ))}
                  </View>
                </ScrollView>
              </View>

              <View className="bg-slate-800 rounded-xl shadow-md w-auto h-auto justify-center items-center mb-5 p-2">
                <Text style={styles.sectionTitle}>Redes sociales</Text>
                <View className="flex-row gap-2 mb-5">
                  <TouchableOpacity className="bg-white rounded-md p-2">
                    <FontAwesome name="facebook" size={24} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity className="bg-white rounded-md p-2">
                    <FontAwesome name="instagram" size={24} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity className="bg-white rounded-md p-2">
                    <FontAwesome name="twitter" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
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
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  "btn-contratar": {
    position: "absolute",
    bottom: 20,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4A60C9",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 100,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginVertical: 10,
    textAlign: "center",
  },
});
