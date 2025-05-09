import GradientBackground from "@/assets/components/gradientBackground";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Modal,
  ActivityIndicator,
} from "react-native";
import PaymentMethodsCard from "@/assets/components/payment-methods-card";
import { useRouter } from "expo-router";
import { useState } from "react";

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

export default function WithoutPaymentMethods() {
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleUtilizarPress = () => {
    setIsModalVisible(true);
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);

      setTimeout(() => {
        setIsModalVisible(false);
        router.replace("/home");
      }, 1500);
    }, 2000); // Simulate 2 seconds processing time
  };

  return (
    <GradientBackground>
      <SafeAreaView className="h-full">
        <Text className="font-biryani color-white text-[32px] text-center mt-[30px]">
          Pago
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

        <View className="self-center mt-[40px]">
          <TouchableOpacity
            className="h-[40px] w-[219px] bg-[#1A56DB] rounded-[8px] flex-row justify-center gap-[8px] pt-[8px]"
            onPress={handleUtilizarPress}
          >
            <Image source={require("@/assets/images/credit-card.png")} />
            <Text className="font-biryani-semibold text-[12px] text-[#FFFFFF] pt-[2px]">
              Utilizar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="h-[40px] w-[219px] bg-[#036672] rounded-[8px] flex-row justify-center mt-[17px] gap-[8px] pt-[8px]">
            <Image source={require("@/assets/images/credit-card.png")} />
            <Text className="font-biryani-semibold text-[12px] text-[#FFFFFF] pt-[2px]">
              Agregar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="h-[40px] w-[219px] bg-[#E02424] rounded-[8px] flex-row justify-center mt-[17px] gap-[8px] pt-[8px]">
            <Image source={require("@/assets/images/credit-card.png")} />
            <Text className="font-biryani-semibold text-[12px] text-[#FFFFFF] pt-[2px]">
              Eliminar
            </Text>
          </TouchableOpacity>
        </View>

        {/* Payment Processing Modal */}
        <Modal visible={isModalVisible} transparent={true} animationType="fade">
          <View className="flex-1 justify-center items-center bg-black/70">
            <View className="bg-white p-6 rounded-lg w-64 items-center">
              {isProcessing ? (
                <>
                  <ActivityIndicator size="large" color="#1A56DB" />
                  <Text className="mt-4 font-biryani-semibold">
                    Procesando pago...
                  </Text>
                </>
              ) : (
                <>
                  <Image
                    source={require("@/assets/images/checkmark.png")}
                    className="w-12 h-12 mb-4"
                  />
                  <Text className="font-biryani-semibold text-lg">
                    Pago Procesado
                  </Text>
                </>
              )}
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </GradientBackground>
  );
}
