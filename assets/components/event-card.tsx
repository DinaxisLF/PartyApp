import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

interface EventCardProps {
  event: {
    id: string;
    groupName: string;
    time: string;
    image: any; // or ImageSourcePropType if you're using @types/react-native
    status: string;
  };
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <View style={styles.card}>
      <Image source={event.image} style={styles.cardImage} />

      <View style={styles.infoContainer}>
        <Text style={styles.groupName}>{event.groupName}</Text>
        <Text
          style={[
            styles.eventState,
            event.status === "Completado" && styles.completedState,
            event.status === "Pendiente" && styles.pendingState,
            event.status === "En Espera" && styles.waitingState,
            event.status === "En Curso" && styles.currentState,
          ]}
        >
          {event.status}
        </Text>

        <View style={styles.dateContainer}>
          <Text style={styles.eventDate}>{event.time}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsButtonText}>Detalles</Text>
          </TouchableOpacity>

          {event.status === "En espera" && (
            <TouchableOpacity style={styles.cancelButton}>
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: "auto",
    width: "auto",
    backgroundColor: "#1F2A37",
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#374151",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    flexDirection: "row",
    gap: 2,
  },
  cardImage: {
    height: 80,
    width: 80,
    marginTop: 8,
    marginLeft: 10,
  },
  infoContainer: {
    alignItems: "center",
    paddingLeft: 5,
    paddingTop: 7,
  },
  groupName: {
    fontFamily: "biryani",
    color: "white",
    fontSize: 16,
    fontWeight: 600,
  },
  eventState: {
    fontFamily: "biryani",
    color: "#16BDCA",
    fontSize: 10,
    fontWeight: 800,
  },
  dateContainer: {
    height: 20,
    width: 171,
    backgroundColor: "#E5EDFF",
    borderRadius: 6,
    marginTop: 4,
  },
  eventDate: {
    fontFamily: "biryani",
    color: "#42389D",
    fontSize: 14,
    fontWeight: 700,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 8,
    marginTop: 8,
    marginBottom: 8,
  },
  detailsButton: {
    height: 20,
    width: 65,
    backgroundColor: "#1A56DB",
    borderRadius: 8,
  },
  detailsButtonText: {
    fontFamily: "biryani",
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: 400,
    textAlign: "center",
    paddingTop: 3,
  },
  cancelButton: {
    height: 20,
    width: 65,
    backgroundColor: "#E02424",
    borderRadius: 8,
  },
  cancelButtonText: {
    fontFamily: "biryani",
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: 400,
    textAlign: "center",
    paddingTop: 3,
  },
  completedState: {
    color: "white",
  },
  pendingState: {
    color: "#F1844B",
  },
  currentState: {
    color: "#2FB183",
  },
  waitingState: {
    color: "#16BDCA",
  },
});

export default EventCard;
