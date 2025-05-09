import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";

interface Props {
  backgroundColor: string;
  brandImage: ImageSourcePropType;
  lastFourDigits: string;
  expirationDate: string;
}

const PaymentMethodsCard = ({
  backgroundColor,
  brandImage,
  lastFourDigits,
  expirationDate,
}: Props) => {
  return (
    <View style={[styles.cardContainer, { backgroundColor }]}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.chipImage}
          source={require("@/assets/images/Chip.png")}
        />
        <Image source={brandImage} />
      </View>

      <View style={styles.cardNumberContainer}>
        <Text style={styles.hideNumber}>**** **** ****</Text>
        <Text style={styles.cardNumber}>{lastFourDigits}</Text>
      </View>

      <Text style={styles.expirationDate}>{expirationDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 195,
    width: 300,
    borderWidth: 1,
    borderColor: "#374151",
    borderRadius: 8,
    marginTop: 20,
    paddingLeft: 25,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingRight: 25,
  },
  chipImage: {
    marginTop: 13,
  },
  cardNumberContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 22,
  },
  hiddenCardNumber: {
    marginTop: 14,
  },
  cardNumber: {
    fontFamily: "Biryani",
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: 800,
  },
  hideNumber: {
    fontFamily: "Biryani",
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: 800,
    marginTop: 6,
    letterSpacing: 2,
  },
  expirationDate: {
    fontFamily: "Biryani",
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: 800,
  },
});

export default PaymentMethodsCard;
