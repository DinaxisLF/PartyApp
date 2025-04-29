import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function PantallaInformacionPagos() {
  const historial = [
    {
      id: 1,
      nombre: "Grupo Farenheit",
      fecha: "10 de abril, 12:45pm",
      monto: "$1700",
      estado: "aprobado",
    },
    {
      id: 2,
      nombre: "Grupo Farenheit",
      fecha: "12 de abril, 2:00pm",
      monto: "$1500",
      estado: "pendiente",
    },
    {
      id: 3,
      nombre: "Grupo Farenheit",
      fecha: "12 de abril, 4:45pm",
      monto: "$1700",
      estado: "rechazado",
    },
  ];

  const estadoColor = {
    aprobado: "text-green-400",
    pendiente: "text-yellow-400",
    rechazado: "text-red-400",
  };

  return (
    <ScrollView className="flex-1 bg-blue-500">
      <Text className="text-white text-3xl font-bold mt-12 px-7 mb-0">
        Información de Pagos
      </Text>

      <Text className="text-white text-2xl font-bold mt-5 px-6">
        Metodos de Pago
      </Text>

      {/* Tarjeta */}
      <View className="bg-slate-800 rounded-xl p-10 m-5">
        <View className="flex-row justify-between items-center">
          <Ionicons name="card" size={28} color="gold" />
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png",
            }}
            className="w-14 h-8"
            resizeMode="contain"
          />
        </View>
        <Text className="text-white text-lg mt-4 font-bold">
          **** **** **** 7753
        </Text>
        <Text className="text-white mt-1 font-bold">12/32</Text>
      </View>

      <TouchableOpacity className="bg-blue-600 py-3 px-6 rounded-lg mb-4 self-center">
        <Text className="text-center text-white font-semibold">Opciones</Text>
      </TouchableOpacity>

      {/* Historial */}
      <Text className="text-white text-lg font-semibold px-6 mb-5">
        Historial de Pagos
      </Text>

      <View className="bg-slate-800 mx-6 rounded-xl p-4 mb-8">
        {historial.map((item) => (
          <View
            key={item.id}
            className="bg-gray-500 rounded-xl p-4 mt-3 flex-row items-center"
          >
            <Image
              source={require("../../assets/images/farenheit.jpg")}
              className="w-10 h-10 rounded-full mr-4"
            />
            <View className="flex-1">
              <Text className="text-white font-semibold">{item.nombre}</Text>
              <Text className="text-gray-300 text-sm">{item.fecha}</Text>
            </View>
            <Text
              className={`text-sm font-semibold ${
                estadoColor[item.estado as keyof typeof estadoColor]
              }`}
            >
              <Text className="text-right">
                {item.monto}
              </Text>
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
