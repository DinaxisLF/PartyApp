import GradientBackground from "@/assets/components/gradientBackground";
import { SafeAreaView, Text, TouchableOpacity, View, Image } from "react-native";

export default function withoutPaymentMethods(){
    return(
        <GradientBackground>
            <SafeAreaView className="h-full">
                <Text className="font-biryani-semibold color-white text-[32px] text-center mt-[30px]">Pago</Text>

                <View className="h-[202px] w-[369px] bg-[#1F2A37] rounded-[8px] self-center items-center mt-[50px]">
                    <Text className="font-biryani-bold color-white text-[20px] font-[800px] mt-[25px]">Aún no cuentas con ningún</Text>
                    <Text className="font-biryani-bold color-white text-[20px] font-[800px]">método de pago.</Text>

                    <TouchableOpacity className="h-[40px] w-[147px] bg-[#1A56DB] rounded-[8px] flex-row justify-center mt-[35px] pt-[7px] gap-[4px]">
                        <Image
                        source={require('@/assets/images/credit-card.png')}
                        className="h-[24px] w-[24px]"
                        />

                        <Text className="font-biryani-semibold color-white text-[12px] pt-[2px]">Agregar Tarjeta</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity className="h-[34px] w-[219px] bg-[#F43F5E] rounded-[8px] self-center justify-center mt-[170px]">
                    <Text className="font-biryani-semibold color-white text-[12px] pl-[65px]">Cancelar Orden</Text>
                </TouchableOpacity>


            </SafeAreaView>
        </GradientBackground>
    );
}