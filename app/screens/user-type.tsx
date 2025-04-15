import AnimatedBackground from "@/assets/components/AnimatedBackground";
import { router } from "expo-router";
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, StatusBar } from "react-native";

export default function UserType() {
  return (
    <SafeAreaView className="bg-blue-900 h-full py-8">
      <AnimatedBackground />
      <StatusBar hidden={true} />
      <View className="flex flex-col px-5 my-20 items-center justify-center">
        <View style={styles.topContent}>
          <Text style={styles.title}>PartyApp</Text>
          <Image source={require('@/assets/images/logo-principal.png')} style={styles.logo} />
        </View>
        <Text className="font-kronaone text-2xl mt-10 text-white text-center mb-10">Selecciona como quieres registrarte</Text>
        {/* Botón para registrarse como Grupo Musical */}
        <View className="bg-transparent p-6 rounded-3xl w-11/12 max-w-md mb-5 border border-white">
          <Text className="text-2xl font-biryani-bold text-white mb-3 py-2">Grupo Musical</Text>
          <Text className="text-xl font-biryani-semibold text-white py-2">Registrate como grupo musical y recibe solicitudes de clientes que buscan talentos para sus eventos.</Text>
          <TouchableOpacity className="bg-blue-500 px-5 py-2 rounded-md mt-2 max-w-40">
            <Text className="text-white font-biryani-semibold text-center">Soy Grupo 🎵</Text>
          </TouchableOpacity>
        </View>

        {/* Botón para registrarse como Cliente */}
        <View className="bg-transparent p-6 rounded-3xl w-11/12 max-w-md mb-5 border border-white">
          <Text className="text-2xl font-biryani-bold text-white mb-3 py-2">Cliente</Text>
          <Text className="text-xl font-biryani-semibold text-white py-2">Registrate como cliente y encuentra grupos musicales para tus eventos.</Text>
          <TouchableOpacity className="bg-blue-500 px-5 py-2 rounded-md mt-2 max-w-40" onPress={() => router.push("/screens/user-register")}>
            <Text className="text-white font-biryani-semibold text-center">Soy Cliente 👥</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: 'KronaOne-Regular',
    color: 'white',
    marginBottom: 10,
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 15,
  }
});
