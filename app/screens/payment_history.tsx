import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PaymentMethodsCard from "@/assets/components/payment-methods-card";
import GradientBackground from "@/assets/components/gradientBackground";
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

  const cardData = [
    {
      backgroundColor: "#1F2A37",
      brandImage: require("@/assets/images/Visa.png"),
      lastFourDigits: "1234",
      expirationDate: "21/32",
    },
    {
      backgroundColor: "#771D1D",
      brandImage: require("@/assets/images/mastercard.png"),
      lastFourDigits: "2133",
      expirationDate: "05/32",
    },
    {
      backgroundColor: "#0E9F6E",
      brandImage: require("@/assets/images/Visa.png"),
      lastFourDigits: "2721",
      expirationDate: "19/32",
    },
  ];

  const estadoColor = {
    aprobado: "text-green-400",
    pendiente: "text-yellow-400",
    rechazado: "text-red-400",
  };

  return (
    <GradientBackground>
      <ScrollView className="flex-1">
        <Text className="text-white text-3xl font-bold mt-12 px-7 mb-0">
          Información de Pagos
        </Text>

        <Text className="text-white text-2xl font-bold mt-5 px-6">
          Metodos de Pago
        </Text>

        <View>
          <ScrollView
            horizontal
            className="self-center"
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 16, paddingHorizontal: 8 }}
          >
            {cardData.map((card, index) => (
              <PaymentMethodsCard
                key={index}
                backgroundColor={card.backgroundColor}
                brandImage={card.brandImage}
                lastFourDigits={card.lastFourDigits}
                expirationDate={card.expirationDate}
              />
            ))}
          </ScrollView>
        </View>

        <TouchableOpacity className="bg-blue-600 py-3 px-6 rounded-lg mb-4 mt-5 self-center">
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
                <Text className="text-right">{item.monto}</Text>
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </GradientBackground>
  );
}
