import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Fonts } from "@/constants/theme";
import AppleAuthButton from "@/components/auth/AppleAuthButton";
import InfiniteScroll from "@/components/InfiniteScroll";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import GoogleAuthButton from "@/components/auth/GoogleAuthButton";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <View style={styles.infiniteScrollContentContainer}>
        <View style={{ marginLeft: 80 }}>
          <InfiniteScroll scrollDirection="down" iconSet="set1" />
        </View>
        <View>
          <InfiniteScroll scrollDirection="up" iconSet="set2" />
        </View>
        <View>
          <InfiniteScroll scrollDirection="down" iconSet="set3" />
        </View>
        <LinearGradient
          colors={["rgba(255,255,255,0)", "rgba(255,255,255,1)"]}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1
          }}
        />
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
            <GoogleAuthButton />
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(300)}>
            <Link href="/(index)/(public)/other-options" asChild>
              <TouchableOpacity style={styles.otherButtonContainer}>
                <Text style={styles.otherButton}>Other options</Text>
              </TouchableOpacity>
            </Link>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    position: 'relative',
    overflow: 'hidden'
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