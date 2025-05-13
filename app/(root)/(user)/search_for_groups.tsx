import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { Calendar, DateData } from "react-native-calendars";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Slider } from "@rneui/themed";
import { StyleSheet } from "react-native";
import GradientBackground from "@/assets/components/gradientBackground";
import { router } from "expo-router";

interface Day {
  dateString: string;
  year: number;
  month: number;
  day: number;
}

export const groupData = [
  {
    id: "1",
    name: "Grupo Farenheit",
    image: require("../../../assets/images/farenheit.jpg"),
    tags: ["Norteño", "Banda", "Regional"],
    price: 3200,
    rating: 5,
  },
  {
    id: "2",
    name: "Los Tigres",
    image: require("../../../assets/images/tigres.jpeg"),
    tags: ["Norteño", "Clásico"],
    price: 2800,
    rating: 4,
  },
  {
    id: "3",
    name: "Banda MS",
    image: require("../../../assets/images/banda-ms.jpg"),
    tags: ["Banda", "Moderno"],
    price: 3500,
    rating: 5,
  },
  {
    id: "4",
    name: "Los Ángeles Azules",
    image: require("../../../assets/images/angeles-azules.webp"),
    tags: ["Cumbia", "Clásico"],
    price: 2500,
    rating: 4,
  },
];

const CatalogScreen: React.FC = () => {
  const [filtersVisible, setFiltersVisible] = useState(false);
  const data = [1, 2, 3];

  //Modal Genero
  const [showGeneroModal, setShowGeneroModal] = useState(false);
  const [selectedGenero, setSelectedGenero] = useState<string | null>(null);
  //Modal Ciudad
  const [showCiudadModal, setShowCiudadModal] = useState(false);
  const [selectedCiudad, setSelectedCiudad] = useState<string | null>(null);
  //Modal Precio
  const [showPrecioModal, setShowPrecioModal] = useState(false);
  const [precio, setPrecio] = useState(1000);
  const [sliderTempValue, setSliderTempValue] = useState(1000);
  //Modal Fecha
  const [showDateModal, setShowDateModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  //Search
  const [searchTerm, setSearchTerm] = useState("");
  const filteredGroups = groupData.filter((group) =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleGuardar = () => {
    if (selectedDate) {
      console.log("Fecha guardada:", selectedDate);
      setShowDateModal(false);
    }
  };

  const handleCancelar = () => {
    setSelectedDate(null);
    setShowDateModal(false);
  };

  const handleDateSelect = (day: DateData) => {
    setSelectedDate(day.dateString);
  };

  const toggleFilters = () => {
    setFiltersVisible((prevState) => !prevState);
  };

  const handleCloseModal = () => {
    setShowGeneroModal(false);
  };

  return (
    <GradientBackground>
      <SafeAreaView style={{ flex: 1 }}>
        <View className="flex-col px-5">
          {/* Título */}
          <Text className="font-biryani-semibold color-white text-[32px] text-center mt-10">
            Catalogo
          </Text>

          {/* Buscador */}
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#2e2e4e",
              borderRadius: 10,
              marginTop: 20,
              alignItems: "center",
              paddingHorizontal: 10,
            }}
          >
            <Ionicons name="search" size={20} color="#ccc" />
            <TextInput
              placeholder="Buscar"
              placeholderTextColor="#ccc"
              style={{ flex: 1, padding: 10, color: "white" }}
              onChangeText={(text) => setSearchTerm(text)}
              value={searchTerm}
            />
            <TouchableOpacity>
              <Ionicons name="search-circle" size={32} color="#4A90E2" />
            </TouchableOpacity>
          </View>

          {/* Filtros */}
          <View style={{ flexDirection: "row", marginTop: 16 }}>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#1f1f2e",
                borderRadius: 20,
                paddingVertical: 6,
                paddingHorizontal: 12,
              }}
              onPress={toggleFilters}
            >
              <Ionicons
                name="funnel"
                size={16}
                color="#4A60C9"
                style={{ marginRight: 8 }}
              />
              <Text style={{ color: "white", fontWeight: "500" }}>Filtros</Text>
            </TouchableOpacity>

            {filtersVisible && (
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginLeft: 8 }}
              >
                <View style={{ flexDirection: "row" }}>
                  {["Género", "Ciudad", "Precio", "Fecha"].map(
                    (filtro, index) => (
                      <TouchableOpacity
                        key={index}
                        style={{
                          backgroundColor: "#1f1f2e",
                          borderRadius: 20,
                          paddingVertical: 6,
                          paddingHorizontal: 12,
                          marginLeft: 8,
                        }}
                        onPress={() => {
                          if (filtro === "Género") {
                            setShowGeneroModal(true);
                          } else if (filtro === "Ciudad") {
                            setShowCiudadModal(true);
                          } else if (filtro === "Precio") {
                            setShowPrecioModal(true);
                          } else if (filtro === "Fecha") {
                            setShowDateModal(true);
                          }
                        }}
                      >
                        <Text style={{ color: "white", fontWeight: "500" }}>
                          {filtro}
                        </Text>
                      </TouchableOpacity>
                    )
                  )}
                </View>
              </ScrollView>
            )}
          </View>

          {/* Lista de grupos */}
          <FlatList
            data={searchTerm ? filteredGroups : groupData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={{
                  backgroundColor: "#2e2e4e",
                  borderRadius: 16,
                  padding: 12,
                  marginTop: 20,
                  flexDirection: "row",
                  alignItems: "center",
                  marginHorizontal: 5,
                }}
              >
                <Image
                  source={
                    item.image ||
                    require("../../../assets/images/farenheit.jpg")
                  }
                  style={{ width: 80, height: 80, borderRadius: 10 }}
                />

                <View style={{ flex: 1, marginLeft: 12 }}>
                  <Text
                    style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
                  >
                    {item.name || "Grupo Farenheit"}
                  </Text>

                  <View style={{ flexDirection: "row", marginVertical: 4 }}>
                    {item.tags?.map((tag, i) => (
                      <Text
                        key={i}
                        style={{
                          backgroundColor: "#4A60C9",
                          color: "white",
                          fontSize: 10,
                          paddingVertical: 2,
                          paddingHorizontal: 6,
                          borderRadius: 10,
                          marginRight: 4,
                        }}
                      >
                        {tag}
                      </Text>
                    ))}
                  </View>

                  <View style={{ flexDirection: "row" }}>
                    {Array.from({ length: item.rating || 5 }, (_, i) => (
                      <FontAwesome
                        key={i}
                        name="star"
                        size={14}
                        color="#FFD700"
                      />
                    ))}
                  </View>
                </View>

                <View style={{ alignItems: "center" }}>
                  <Text
                    style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
                  >
                    ${item.price || "3200"}
                  </Text>
                  <TouchableOpacity
                    style={{ marginTop: 60 }}
                    onPress={() => router.push("/screens/hiring-screen")}
                  >
                    <Ionicons name="add-circle" size={28} color="#4A90E2" />
                  </TouchableOpacity>
                </View>
              </View>
            )}
            contentContainerStyle={{
              paddingBottom: 30, // Add space at bottom
            }}
            ListHeaderComponent={
              <View style={{ height: 16 }} /> // Space between filters and list
            }
          />
        </View>
      </SafeAreaView>

      {/* Modal para seleccionar género */}
      <Modal
        visible={showGeneroModal}
        animationType="fade"
        transparent={true}
        onRequestClose={handleCloseModal}
      >
        <TouchableWithoutFeedback onPress={handleCloseModal}>
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableWithoutFeedback>
              <View
                style={{
                  backgroundColor: "#2e2e4e",
                  borderRadius: 12,
                  width: "85%",
                  padding: 20,
                  maxHeight: "80%",
                }}
              >
                {/* Botón cerrar (X) */}
                <View style={{ alignItems: "flex-end" }}>
                  <TouchableOpacity onPress={handleCloseModal}>
                    <Ionicons name="close" size={24} color="white" />
                  </TouchableOpacity>
                </View>

                {/* Título */}
                <Text
                  style={{
                    color: "white",
                    fontSize: 18,
                    marginBottom: 16,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Selecciona un género
                </Text>

                {/* Cuadrícula de géneros */}
                <ScrollView style={{ maxHeight: 300 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                    }}
                  >
                    {[
                      "Rock",
                      "Pop",
                      "Jaz",
                      "Hip-Hop",
                      "Norteño",
                      "Banda",
                      "Regional",
                      "Versatil",
                      "Cumbia",
                      "Bachata",
                      "DJ",
                      "Mariachi",
                      "Otro",
                    ].map((genero, index) => (
                      <TouchableOpacity
                        key={index}
                        style={{
                          backgroundColor:
                            selectedGenero === genero ? "#9663BA" : "#ccc",
                          paddingVertical: 8,
                          paddingHorizontal: 10,
                          borderRadius: 8,
                          width: "23%",
                          marginBottom: 10,
                          alignItems: "center",
                        }}
                        onPress={() => setSelectedGenero(genero)}
                      >
                        <Text
                          style={{
                            color:
                              selectedGenero === genero ? "white" : "black",
                            fontSize: 10,
                            textAlign: "center",
                          }}
                        >
                          {genero}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </ScrollView>

                {/* Botón Aceptar */}
                <TouchableOpacity
                  onPress={handleCloseModal}
                  style={{
                    backgroundColor: "#4A90E2",
                    paddingVertical: 12,
                    borderRadius: 8,
                    marginTop: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 16,
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    Aceptar
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* Modal para seleccionar ciudad */}
      <Modal
        visible={showCiudadModal}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setShowCiudadModal(false)}
      >
        <TouchableWithoutFeedback onPress={() => setShowCiudadModal(false)}>
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableWithoutFeedback>
              <View
                style={{
                  backgroundColor: "#2e2e4e",
                  borderRadius: 10,
                  width: "80%",
                  padding: 20,
                }}
              >
                {/* Botón cerrar (X) */}
                <View style={{ alignItems: "flex-end" }}>
                  <TouchableOpacity onPress={() => setShowCiudadModal(false)}>
                    <Ionicons name="close" size={24} color="white" />
                  </TouchableOpacity>
                </View>

                <Text
                  style={{
                    color: "white",
                    fontSize: 18,
                    marginBottom: 16,
                    textAlign: "center",
                  }}
                >
                  Selecciona una ciudad
                </Text>

                {/* Botones verticales */}
                {["CDMX", "Guadalajara", "Monterrey"].map((ciudad, index) => (
                  <TouchableOpacity
                    key={index}
                    style={{
                      backgroundColor:
                        selectedCiudad === ciudad ? "#9663BA" : "#ccc",
                      paddingVertical: 10,
                      paddingHorizontal: 15,
                      marginBottom: 10,
                      borderRadius: 5,
                    }}
                    onPress={() => setSelectedCiudad(ciudad)}
                  >
                    <Text
                      style={{
                        color: selectedCiudad === ciudad ? "white" : "black",
                        fontSize: 16,
                        textAlign: "center",
                      }}
                    >
                      {ciudad}
                    </Text>
                  </TouchableOpacity>
                ))}

                {/* Botón Aceptar */}
                <TouchableOpacity
                  onPress={() => setShowCiudadModal(false)}
                  style={{
                    backgroundColor: "#4A90E2",
                    paddingVertical: 12,
                    borderRadius: 8,
                    marginTop: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 16,
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    Aceptar
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* Modal Precio */}
      <Modal
        visible={showPrecioModal}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setShowPrecioModal(false)}
      >
        <TouchableWithoutFeedback onPress={() => setShowPrecioModal(false)}>
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableWithoutFeedback>
              <View
                style={{
                  backgroundColor: "#2e2e4e",
                  borderRadius: 10,
                  width: "85%",
                  padding: 20,
                }}
              >
                <View style={{ alignItems: "flex-end" }}>
                  <TouchableOpacity onPress={() => setShowPrecioModal(false)}>
                    <Ionicons name="close" size={24} color="white" />
                  </TouchableOpacity>
                </View>

                <Text
                  style={{
                    color: "white",
                    fontSize: 18,
                    marginBottom: 16,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Rango Precio
                </Text>

                {/* Mostrar el valor temporal */}
                <Text
                  style={{
                    color: "#4A90E2",
                    fontSize: 24,
                    fontWeight: "bold",
                    textAlign: "center",
                    marginBottom: 10,
                  }}
                >
                  ${sliderTempValue}
                </Text>

                <Slider
                  style={{ width: "100%", height: 40 }}
                  minimumValue={1000}
                  maximumValue={8000}
                  step={100}
                  value={sliderTempValue}
                  onValueChange={setSliderTempValue}
                  onSlidingComplete={(value) => setPrecio(value)}
                  minimumTrackTintColor="#4A90E2"
                  maximumTrackTintColor="#888"
                  thumbTintColor="white"
                  thumbStyle={{ width: 25, height: 25 }}
                  trackStyle={{ height: 8 }}
                />

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ color: "white" }}>$1000</Text>
                  <Text style={{ color: "white" }}>$8000</Text>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    setPrecio(sliderTempValue); // actualizar precio final al aceptar
                    setShowPrecioModal(false);
                  }}
                  style={{
                    backgroundColor: "#4A90E2",
                    paddingVertical: 12,
                    borderRadius: 8,
                    marginTop: 20,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 16,
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    Aceptar
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* Modal Fecha */}
      <Modal visible={showDateModal} animationType="fade" transparent={true}>
        <TouchableWithoutFeedback onPress={() => setShowDateModal(false)}>
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableWithoutFeedback>
              <View
                style={{
                  backgroundColor: "#2e2e4e",
                  borderRadius: 10,
                  width: "85%",
                  padding: 20,
                }}
              >
                {/* Botón cerrar (X) */}
                <View style={{ alignItems: "flex-end" }}>
                  <TouchableOpacity onPress={() => setShowDateModal(false)}>
                    <Ionicons name="close" size={24} color="white" />
                  </TouchableOpacity>
                </View>

                {/* Título */}
                <Text
                  style={{
                    color: "white",
                    fontSize: 18,
                    marginBottom: 16,
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Selecciona una fecha
                </Text>

                {/* Calendario */}
                <Calendar
                  onDayPress={handleDateSelect}
                  markedDates={{
                    [selectedDate || ""]: {
                      selected: true,
                      selectedColor: "#4A90E2",
                    },
                  }}
                  theme={{
                    selectedDayBackgroundColor: "#4A90E2",
                    todayTextColor: "#4A90E2",
                    dayTextColor: "#ffffff",
                    arrowColor: "#4A90E2",
                    monthTextColor: "#ffffff",
                    textSectionTitleColor: "#ffffff",
                    calendarBackground: "#2e2e4e",
                  }}
                />
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={handleCancelar}
                  >
                    <Text style={styles.buttonText}>Cancelar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.saveButton}
                    onPress={handleGuardar}
                  >
                    <Text style={styles.buttonText}>Guardar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </GradientBackground>
  );
};

export default CatalogScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2e2e4e",
    padding: 20,
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: "#4A90E2",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  cancelButton: {
    backgroundColor: "#999",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});
