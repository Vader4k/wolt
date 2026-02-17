import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors, Fonts } from '@/constants/theme'
import Animated, { FadeInDown } from 'react-native-reanimated'
import AppleAuthButton from '@/components/auth/AppleAuthButton'
import GoogleAuthButton from '@/components/auth/GoogleAuthButton'
import useUserStore from '@/hooks/use-userstore'

const OtherOptions = () => {
    const router = useRouter()
    const { setIsGuest } = useUserStore()

    const continueAsGuest = () => {
        setIsGuest(true)
        router.push('/(index)/(auth)')
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.closeButton} onPress={() => router.dismiss()}>
                <Ionicons name="close" size={24} color="#00000091" />
            </TouchableOpacity>

            <View style={styles.content}>
                <Text style={styles.title}>Log in or create a Wolt account</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <Animated.View entering={FadeInDown.delay(100)}>
                    <AppleAuthButton />
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(200)}>
                    <GoogleAuthButton />
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(300)}>
                    <TouchableOpacity style={styles.facebookButton}>
                        <Ionicons name="logo-facebook" size={18} color="white" />
                        <Text style={styles.facebookButtonText}>Continue with Facebook</Text>
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(400)}>
                    <TouchableOpacity style={styles.guest} onPress={continueAsGuest}>
                        <Text style={styles.guestText}>Continue as guest</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </SafeAreaView>
    )
}

export default OtherOptions

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 14
    },
    closeButton: {
        width: 40,
        height: 40,
        borderRadius: 100,
        padding: 8,
        backgroundColor: Colors.light,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontFamily: Fonts.brandBlack,
        color: Colors.dark,
        textAlign: 'center',
        marginVertical: 22
    },
    buttonsContainer: {
        width: '100%',
        gap: 12
    },
    facebookButton: {
        backgroundColor: Colors.light,
        padding: 17,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4
    },
    facebookButtonText: {
        color: Colors.dark,
        fontSize: 18,
        fontWeight: '600'
    },
    guest: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        paddingVertical: 17,
        borderRadius: 12
    },
    guestText: {
        color: Colors.secondary,
        fontSize: 18,
        fontWeight: '600'
    }
})