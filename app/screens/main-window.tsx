import { Link } from "expo-router";
import { View, Text, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={["#4A60C9", "#4A60C9", "#4A60C9", "#9663BA", "#9663BA"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <SafeAreaView className="h-full">
        <View className="flex flex-col px-5 my-20 items-center justify-center">
          <Text className="font-bold font-biryani-black text-4xl py-5 mt-10 text-white">
            PartyApp
          </Text>
          <Link className="mt-10" href={"/screens/user-profile"}>
            <Text className="font-bold text-xl text-white">Perfil Cliente</Text>
          </Link>
          <Link className="mt-10" href={"/screens/profile-musical-group"}>
            <Text className="font-bold text-xl text-white">Perfil Grupo</Text>
          </Link>
          <Link className="mt-10" href={"/screens/fonts"}>
            <Text className="font-bold text-2xl text-white">Fuentes</Text>
          </Link>
          <Link className="mt-10" href={"/screens/user-events"}>
            <Text className="font-bold text-2xl text-white">Eventos Usuario</Text>
          </Link>
          <Link className="mt-10" href={"/screens/search_for_groups"}>
            <Text className="font-bold text-2xl text-white">Busqueda Grupos</Text>
          </Link>
          <Link className="mt-10" href={"/screens/payment_history"}>
            <Text className="font-bold text-2xl text-white">Informacion de Pagos</Text>
          </Link>
          <Link className="mt-10" href={"/screens/hiring-screen"}>
            <Text className="font-bold text-2xl text-white">Contratacion</Text>
          </Link>
          <Link className="mt-10" href={"/screens/review-screen"}>
            <Text className="font-bold text-2xl text-white">Reviews</Text>
          </Link>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
