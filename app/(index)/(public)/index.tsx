import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Fonts } from "@/constants/theme";
import AppleAuthButton from "@/components/auth/AppleAuthButton";
import GoogleAuthBytton from "@/components/auth/GoogleAuthBytton";

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

        <Animated.Text entering={FadeInDown} style={styles.tagline}>
          Almost everything delivered
        </Animated.Text>

        <View style={styles.buttonsContainer}>
          <Animated.View entering={FadeInDown.delay(100)}>
            {/* Apple button */}
            <AppleAuthButton />
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(200)}>
            {/* Google button */}
            <GoogleAuthBytton />
          </Animated.View>


          <Animated.View entering={FadeInDown.delay(300)}>
            {/* Google button */}
            <TouchableOpacity style={styles.otherButtonContainer}>
              <Text style={styles.otherButton}>Other options</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>

        <Animated.View entering={FadeInDown.delay(400)} style={styles.privacyContainer}>
          <Text style={styles.privacyText}>
            Please visit <Text style={styles.privacyLink}>Wolt Privacy Statement</Text> to learn about personal data processing at Wolt.
          </Text>
        </Animated.View>
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
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  brandLogo: {
    width: 100,
    height: 48,
    resizeMode: "contain",
    marginBottom: 20,
  },
  tagline: {
    fontSize: 32,
    fontFamily: Fonts.brandBlack,
    textAlign: "center",
    color: "#000",
    marginBottom: 50,
  },
  buttonsContainer: {
    gap: 12,
    width: "100%",
  },
  otherButtonContainer: {
    backgroundColor: "#f0f0f0",
    padding: 17,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 4,
  },
  otherButton: {
    color: "#666",
    fontSize: 18,
    fontWeight: '600',
    textAlign: "center",
  },
  privacyContainer: {
    marginTop: 30,
    paddingHorizontal: 20
  },
  privacyText: {
    color: "#999",
    fontSize: 12,
    textAlign: "center",
    lineHeight: 18
  },
  privacyLink: {
    color: "#4285F4",
    textDecorationLine: "underline",
  }
})