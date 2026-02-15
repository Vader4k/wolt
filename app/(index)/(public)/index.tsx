import { View, StyleSheet, Image } from "react-native";
import Animated from "react-native-reanimated";
import { Fonts } from "@/constants/theme";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <View style={styles.infiniteScrollContentContainer}>

      </View>

      <View style={styles.contentContainer}>
        <Image 
          source={require("@/assets/images/wolt-logo.png")}
          style={styles.brandLogo}
        />

        <Animated.Text style={styles.tagline}>
          Almost everything delivered
        </Animated.Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  infiniteScrollContentContainer: {
    flex: 0.8,
    backgroundColor: "red"
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  brandLogo: {
    width: 100,
    height: 48,
    resizeMode: "contain",
    marginBottom: 20,
  },
  tagline: {
    fontSize: 30,
    fontFamily: Fonts.brandBold,
    textAlign: "center",
    color: "#000",
  }
})