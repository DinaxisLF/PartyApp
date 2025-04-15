import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from "react-native";

export default function PerfilGrupo() {
  const generos = ["Rock", "Pop", "Cumbia"]; // Géneros musicales del grupo
  const portafolio = [
    { tipo: "video", uri: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
  ];

  const abrirVideo = (url: string) => {
    Linking.openURL(url);  // Abre el enlace de YouTube en el navegador o en la app de YouTube
  };

  return (
    <ScrollView className="bg-white h-full">
      {/* Foto de portada */}
      <Image
        source={{ uri: "https://img.freepik.com/foto-gratis/retrato-mujer-cantando-microfono_107420-96131.jpg?t=st=1743888873~exp=1743892473~hmac=2aa79b701bc1930b4e870eeadefeecd8560b13e5dc4ce52d5fbc4b8bb0116799&w=1380" }}
        className="w-full h-52"
        resizeMode="cover"
      />

      <View className="px-5 py-4">
        {/* Descripción */}
        <Text className="text-xl font-biryani-bold mb-2">Nombre Grupo Musical</Text>
        <Text className="text-gray-700 mb-4">
          Aquí va la descripción del grupo musical. Puedes incluir información sobre su estilo, historia y cualquier otro detalle relevante.
        </Text>

        {/* Géneros musicales */}
        <Text className="font-biryani-semibold">Géneros:</Text>
        <View className="flex-row flex-wrap gap-2 mt-1 mb-4">
          {generos.map((g, idx) => (
            <Text key={idx} className="bg-gray-200 text-sm px-3 py-1 rounded-full">
              {g}
            </Text>
          ))}
        </View>

        {/* Tarifa por hora */}
        <Text className="font-biryani-semibold mb-1">Tarifa por hora:</Text>
        <Text className="text-lg text-green-600 mb-4">$1500 MXN</Text>

        {/* Portafolio */}
        <Text className="font-biryani-semibold mb-2">Portafolio:</Text>
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
        <Text className="font-biryani-semibold mb-2">Calendario de disponibilidad:</Text>
        <View className="bg-gray-100 p-4 rounded">
          <Text className="text-sm text-gray-600">Miercoles a Viernes: 6PM - 10PM</Text>
          <Text className="text-sm text-gray-600">Sábados y Domingo: Disponible todo el día</Text>
          <Text className="text-sm text-gray-600">Lunes y Martes: No disponible</Text>
        </View>
      </View>
    </ScrollView>
  );
}
