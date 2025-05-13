import ColorGradient from "@/assets/components/colorfullBackground";
import { useUserStore } from "@/stores/userStore";
import { router } from "expo-router";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";

export default function UserType() {
  const { setUserType } = useUserStore();

  return (
    <ColorGradient>
      <SafeAreaView className="h-full">
        <StatusBar style="light" />
        <View className="flex flex-col px-5 items-center justify-center mt-10">
          <View style={styles.topContent}>
            <Text style={styles.title}>PartyApp</Text>
            <Image
              source={require("@/assets/images/logo-principal.png")}
              style={styles.logo}
            />
          </View>
          <Text className="font-kronaone text-2xl mt-10 text-white text-center mb-10">
            Selecciona como quieres registrarte
          </Text>
          {/* Botón para registrarse como Grupo Musical */}
          <View
            className="p-4 rounded-3xl w-11/12 max-w-md mb-5 border border-white"
            style={{ backgroundColor: "rgba(31,41,55, 0.3)" }}
          >
            <Text className="text-2xl font-biryani-bold text-white mb-2 py-1">
              Grupo Musical
            </Text>
            <Text className="text-xl font-biryani-semibold text-white">
              Registrate como grupo musical y recibe solicitudes de clientes que
              buscan talentos para sus eventos.
            </Text>
            <TouchableOpacity
              className="bg-blue-500 px-5 py-2 rounded-md mt-2 max-w-40"
              onPress={() => {
                router.push("/screens/group-register");
                setUserType("artist");
              }}
            >
              <View className="flex-row items-center justify-center">
                <Text className="text-white font-biryani-semibold">
                  Soy Grupo
                </Text>
                <View style={{ marginLeft: 8 }}>
                  <FontAwesome6 name="itunes-note" size={18} color="white" />
                </View>
              </View>
            </TouchableOpacity>
          </View>

          {/* Botón para registrarse como Cliente */}
          <View
            className="p-4 rounded-3xl w-11/12 max-w-md mb-5 border border-white"
            style={{ backgroundColor: "rgba(31,41,55, 0.3)" }}
          >
            <Text className="text-2xl font-biryani-bold text-white mb-2 py-2">
              Cliente
            </Text>
            <Text className="text-xl font-biryani-semibold text-white">
              Registrate como cliente y encuentra grupos musicales para tus
              eventos.
            </Text>
            <TouchableOpacity
              className="bg-blue-500 px-5 py-2 rounded-md mt-2 max-w-40"
              onPress={() => {
                router.push("/screens/user-register");
                setUserType("regular");
              }}
            >
              <View className="flex-row items-center justify-center">
                <Text className="text-white font-biryani-semibold">
                  Soy Cliente
                </Text>
                <View style={{ marginLeft: 8 }}>
                  <Ionicons name="people-outline" size={18} color="white" />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ColorGradient>
  );
}

const styles = StyleSheet.create({
  topContent: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: "KronaOne-Regular",
    color: "white",
    marginBottom: 10,
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 15,
  },
});
