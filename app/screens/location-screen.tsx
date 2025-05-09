import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Keyboard,
} from "react-native";
import MapView, { Marker, MapPressEvent } from "react-native-maps";
import { useRouter } from "expo-router";
import * as Location from "expo-location";

export default function SelectLocationScreen() {
  const router = useRouter();
  const mapRef = useRef<MapView>(null);

  const [selectedCoord, setSelectedCoord] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [address, setAddress] = useState<string>("");
  const [searchInput, setSearchInput] = useState<string>("");
  const [hasLocationPermission, setHasLocationPermission] =
    useState<boolean>(false);
  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  useEffect(() => {
    const requestPermission = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        setHasLocationPermission(true);
        const location = await Location.getCurrentPositionAsync({});
        setUserLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      } else {
        setHasLocationPermission(false);
        alert("Necesitas permitir el acceso a la ubicación");
      }
    };
    requestPermission();
  }, []);

  const handleMapPress = async (event: MapPressEvent) => {
    const { coordinate } = event.nativeEvent;
    setSelectedCoord(coordinate);

    const { latitude, longitude } = coordinate;
    const location = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });

    if (location.length > 0) {
      const { city, region, country, street } = location[0];
      const formattedAddress = `${street ? street + ", " : ""}${
        city ? city + ", " : ""
      }${region ? region + ", " : ""}${country ? country : ""}`;
      setAddress(formattedAddress);
    } else {
      setAddress("Dirección no disponible");
    }
  };

  const handleAddressSearch = async () => {
    Keyboard.dismiss();
    if (!searchInput.trim()) return;

    try {
      const geoResults = await Location.geocodeAsync(searchInput);
      if (geoResults.length > 0) {
        const { latitude, longitude } = geoResults[0];
        const newCoord = { latitude, longitude };
        setSelectedCoord(newCoord);

        // Mover el mapa
        mapRef.current?.animateToRegion({
          ...newCoord,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });

        // Obtener dirección formateada
        const location = await Location.reverseGeocodeAsync(newCoord);
        if (location.length > 0) {
          const { city, region, country, street } = location[0];
          const formattedAddress = `${street ? street + ", " : ""}${
            city ? city + ", " : ""
          }${region ? region + ", " : ""}${country ? country : ""}`;
          setAddress(formattedAddress);
        }
      } else {
        alert("No se encontró la dirección");
      }
    } catch (error) {
      console.error("Error al buscar dirección:", error);
      alert("Error al buscar la dirección");
    }
  };

  const confirmLocation = () => {
    if (selectedCoord) {
      router.replace({
        pathname: "/screens/hiring-screen",
        params: { location: address },
      });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {hasLocationPermission && userLocation ? (
        <MapView
          ref={mapRef}
          style={StyleSheet.absoluteFillObject}
          onPress={handleMapPress}
          initialRegion={{
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          {selectedCoord && <Marker coordinate={selectedCoord} />}
        </MapView>
      ) : (
        <Text>Esperando permiso de ubicación...</Text>
      )}

      {/* 🆕 Input de búsqueda */}
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Escribe una dirección..."
          placeholderTextColor="#ccc"
          style={styles.input}
          value={searchInput}
          onChangeText={setSearchInput}
          onSubmitEditing={handleAddressSearch}
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={handleAddressSearch}
        >
          <Text style={styles.searchButtonText}>Buscar</Text>
        </TouchableOpacity>
      </View>

      {/* Confirmar ubicación */}
      <View style={styles.bottomBar}>
        <Text style={styles.text}>
          {address
            ? `Ubicación: ${address}`
            : "Toca el mapa o escribe una dirección"}
        </Text>
        {selectedCoord && (
          <TouchableOpacity style={styles.button} onPress={confirmLocation}>
            <Text style={styles.buttonText}>Confirmar</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    position: "absolute",
    top: 50,
    left: 20,
    right: 20,
    flexDirection: "row",
    backgroundColor: "#1e293b",
    padding: 8,
    borderRadius: 10,
    alignItems: "center",
    zIndex: 2,
  },
  input: {
    flex: 1,
    color: "#fff",
    paddingHorizontal: 10,
    fontSize: 14,
  },
  searchButton: {
    backgroundColor: "#4A60C9",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginLeft: 8,
  },
  searchButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  bottomBar: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#1e293b",
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  text: {
    color: "#fff",
    marginBottom: 10,
    fontSize: 14,
  },
  button: {
    backgroundColor: "#4A60C9",
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
