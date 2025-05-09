import GradientBackground from "@/assets/components/gradientBackground";
import { SafeAreaView, Text, TouchableOpacity, View, Image, ScrollView, ImageSourcePropType } from "react-native";
import PaymentMethodsCard from "@/assets/components/payment-methods-card";

const cardData = [{
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
    }
];

export default function withoutPaymentMethods(){
    return(
        <GradientBackground>
            <SafeAreaView className="h-full">
                <Text className="font-biryani color-white text-[32px] text-center mt-[30px]">Pago</Text>

                <View>
                <ScrollView 
                horizontal 
                className="self-center"
                showsHorizontalScrollIndicator = {false}
                contentContainerStyle={{ gap: 16, paddingHorizontal: 8 }}
                >
                    {cardData.map((card, index) => (
                        <PaymentMethodsCard
                        key = {index}
                        backgroundColor = {card.backgroundColor}
                        brandImage = {card.brandImage}
                        lastFourDigits = {card.lastFourDigits} 
                        expirationDate = {card.expirationDate}
                        />
                    ))}
                </ScrollView>
                </View>

                <View className="self-center mt-[40px]">
                    <TouchableOpacity className="h-[40px] w-[219px] bg-[#1A56DB] rounded-[8px] flex-row justify-center gap-[8px] pt-[8px]">
                        <Image
                        source={require("@/assets/images/credit-card.png")}/>
                        <Text className="font-biryani-semibold text-[12px] text-[#FFFFFF] pt-[2px]">Utilizar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="h-[40px] w-[219px] bg-[#036672] rounded-[8px] flex-row justify-center mt-[17px] gap-[8px] pt-[8px]">
                        <Image
                        source={require("@/assets/images/credit-card.png")}/>                     
                        <Text className="font-biryani-semibold text-[12px] text-[#FFFFFF] pt-[2px]">Agregar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="h-[40px] w-[219px] bg-[#E02424] rounded-[8px] flex-row justify-center mt-[17px] gap-[8px] pt-[8px]">
                        <Image
                        source={require("@/assets/images/credit-card.png")}/>
                        <Text className="font-biryani-semibold text-[12px] text-[#FFFFFF] pt-[2px]">Eliminar</Text>
                    </TouchableOpacity>
                </View>

                
            </SafeAreaView>
        </GradientBackground>
    );
}