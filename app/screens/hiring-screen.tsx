import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView, ScrollView, View, Text,
  TouchableOpacity, Platform,
  Modal, Image
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import DateTimePicker from "@react-native-community/datetimepicker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Slider from "@react-native-community/slider";

export default function HiringScreen() {
  const router = useRouter();
  const { location } = useLocalSearchParams<{ location?: string }>();

  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [duration, setDuration] = useState(2);
  const tarifaPorHora = 1500;

  const formatDate = (date: Date) =>
    date.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });

  const formatTime = (date: Date) =>
    date.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });

  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  return (
    <LinearGradient
      colors={['#4A60C9', '#4A60C9', '#9663BA']}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <SafeAreaView>
        <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
          <StatusBar style="light" />

          <View className="px-5 py-4 w-full flex">
            <View className="flex items-center justify-center space-y-6 mt-10 mb-5">
              <Text className="py-4 text-2xl font-biryani-extrabold text-white">Contratación</Text>
              <Text className="text-lg font-biryani-semibold text-white">Grupo seleccionado:</Text>
              <Text className="text-lg font-biryani-bold text-white">Nombre del grupo</Text>
            </View>

            {/* Fecha */}
            <Text className="text-white font-biryani-semibold mb-2">Fecha del evento:</Text>
            <View className="bg-slate-800 p-2 rounded-xl shadow-md mb-5">
              <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                <Text className="text-white font-biryani-semibold">🗓️ {formatDate(date)}</Text>
              </TouchableOpacity>
            </View>

            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => {
                  setShowDatePicker(Platform.OS === 'ios');
                  if (selectedDate) setDate(selectedDate);
                }}
              />
            )}

            {/* Hora */}
            <Text className="text-white font-biryani-semibold mb-2">Hora del evento:</Text>
            <View className="bg-slate-800 p-2 rounded-xl shadow-md mb-5">
              <TouchableOpacity onPress={() => setShowTimePicker(true)}>
                <Text className="text-white font-biryani-semibold">
                  🕒 {selectedTime ? formatTime(selectedTime) : "Seleccionar hora"}
                </Text>
              </TouchableOpacity>
            </View>

            <DateTimePickerModal
              isVisible={showTimePicker}
              mode="time"
              onConfirm={(time) => {
                setSelectedTime(time);
                setShowTimePicker(false);
              }}
              onCancel={() => setShowTimePicker(false)}
              is24Hour={true}
              locale="es-ES"
            />

            {/* Ubicación */}
            <Text className="text-white font-biryani-semibold mb-2">Ubicación:</Text>
            <View className="bg-slate-800 p-2 rounded-xl shadow-md mb-5">
              <TouchableOpacity onPress={() => router.push("/screens/location-screen")}>
                <Text className="text-white font-biryani-semibold">
                  📍 {location ? location : "Seleccionar ubicación"}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Duración */}
            <Text className="text-white font-biryani-semibold mb-2">Duración (horas):</Text>
            <View className="bg-slate-800 p-3 rounded-xl shadow-md mb-5">
              <Slider
                minimumValue={1}
                maximumValue={8}
                step={1}
                value={duration}
                onValueChange={value => setDuration(value)}
                minimumTrackTintColor="#fff"
                maximumTrackTintColor="#ccc"
              />
              <Text className="text-white text-center mt-2 font-biryani-semibold">{duration} hora(s)</Text>
            </View>

            {/* Total estimado */}
            <Text className="text-white font-biryani-semibold mb-2">Total estimado:</Text>
            <View className="bg-slate-800 p-3 rounded-xl shadow-md mb-5">
              <Text className="text-white font-biryani-semibold">Tarifa por hora: ${tarifaPorHora} MXN</Text>
              <Text className="text-white font-biryani-semibold">Total: ${tarifaPorHora * duration} MXN</Text>
            </View>

            <TouchableOpacity
              className="bg-blue-500 p-3 rounded-md mt-2"
              onPress={() => setShowConfirmationModal(true)}
            >
              <Text className="text-white font-biryani-bold text-center">Confirmar contratación</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Modal
          visible={showConfirmationModal}
          transparent
          animationType="slide"
          onRequestClose={() => setShowConfirmationModal(false)}
        >
          <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
            <View className="bg-slate-800 p-3 rounded-xl shadow-md w-11/12 max-w-md justify-center items-center">
              <View className="bg-blue-500 p-3 rounded-full mb-5 w-[80px] h-[80px] items-center justify-center self-center">
                <Image
                  source={require("@/assets/images/calendar_check_icon.png")}
                  style={{ width: 50, height: 50, alignSelf: "center" }}
                />
              </View>
              <Text className="text-white font-biryani-semibold mb-1">Grupo: <Text className="font-biryani-extralight">Nombre del grupo</Text></Text>
              <Text className="text-white font-biryani-semibold mb-1">Fecha: <Text className="font-biryani-extralight">{formatDate(date)}</Text></Text>
              <Text className="text-white font-biryani-semibold mb-1">Hora: <Text className="font-biryani-extralight">{selectedTime ? formatTime(selectedTime) : "No seleccionada"}</Text></Text>
              <Text className="text-white font-biryani-semibold mb-1">Duración: <Text className="font-biryani-extralight">{duration} hora(s)</Text></Text>
              <Text className="text-white font-biryani-semibold mb-1">Ubicación: <Text className="font-biryani-extralight">{location ?? "No seleccionada"}</Text></Text>
              <Text className="text-white font-biryani-semibold mt-2">Total: <Text className="text-green-500 font-biryani-extralight">${tarifaPorHora * duration} MXN</Text></Text>

              <View className="flex flex-row justify-between mt-5 gap-4">
                <TouchableOpacity
                  className="bg-gray-300 px-4 py-2 rounded-md"
                  onPress={() => setShowConfirmationModal(false)}
                >
                  <Text className="text-black font-biryani-bold">Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="bg-blue-500 px-4 py-2 rounded-md"
                  onPress={() => {
                    setShowConfirmationModal(false);
                    console.log("Contratación confirmada");
                    // Aquí puedes enviar los datos a tu backend o navegar a otra pantalla
                  }}
                >
                  <Text className="text-white font-biryani-bold">Confirmar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

      </SafeAreaView>
    </LinearGradient >
  );
}
