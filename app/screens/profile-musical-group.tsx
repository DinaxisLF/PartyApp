import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; 

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
    <ScrollView className="bg-indigo-300 h-full">
      {/* Imagen de encabezado */}
      <Image
        source={{
          uri: "https://img.freepik.com/foto-gratis/retrato-mujer-cantando-microfono_107420-96131.jpg?t=st=1743888873~exp=1743892473~hmac=2aa79b701bc1930b4e870eeadefeecd8560b13e5dc4ce52d5fbc4b8bb0116799&w=1380",
        }}
        className="w-full h-52"
        resizeMode="cover"
      />

      <View className="px-5 py-4">
        {/* Nombre y estrellas */}
        <View className="flex-row items-center justify-between mb-2">
          <Text className="text-lg text-white font-bold">Los Rítmicos</Text>
          <View className="flex-row gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <FontAwesome
                key={i}
                name="star"
                size={16}
                color={i <= 3 ? "#FACC15" : "#374151"} // Amarillo para 3 estrellas
              />
            ))}
          </View>
        </View>

        {/* Descripción sombreada */}
        <View className="bg-gray-800 p-3 rounded-lg mb-4 shadow-md">
          <Text className="text-white text-sm">
            Somos una agrupación versátil con más de 8 años de experiencia tocando en bodas, cumpleaños, eventos corporativos y más.
          </Text>
        </View>

        {/* Géneros */}
        <Text className="text-white font-semibold mb-1">Géneros:</Text>
        <View className="flex-row gap-2 mb-4">
          {generos.map((g, idx) => (
            <Text key={idx} className="bg-black/30 text-white px-3 py-1 rounded-full text-sm">
              {g}
            </Text>
          ))}
        </View>

        {/* Tarifa */}
        <Text className="text-white font-semibold mb-1">Tarifa por hora:</Text>
        <Text className="text-white bg-black/30 px-3 py-1 rounded-lg w-fit mb-4">$1500 mxn</Text>

        {/* Días disponibles */}
        <Text className="text-white font-semibold mb-1">Calendario de Disponibilidad:</Text>
        <View className="flex-row flex-wrap gap-2 mb-4">
          {diasDisponibles.map((dia, idx) => (
            <Text key={idx} className="bg-black/30 text-white px-3 py-1 rounded-full text-sm">
              {dia}
            </Text>
          ))}
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
                style={{ width: 120, height: 80, borderRadius: 8 }}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Botón contratar */}
        <TouchableOpacity className="bg-blue-600 py-3 rounded-full flex-row justify-center items-center">
          <Text className="text-white text-base font-semibold">+ Contratar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
