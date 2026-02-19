import { Ionicons } from '@expo/vector-icons'
import { Stack, useRouter } from 'expo-router'
import { TouchableOpacity } from 'react-native'

const AuthLayout = () => {
  const router = useRouter()
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(modals)/Location"
        options={{
          presentation: 'formSheet',
          sheetAllowedDetents: [0.7],
          headerShadowVisible: false,
          title: '',
          sheetCornerRadius: 16,
          sheetGrabberVisible: true,
          headerRight: () => (
            <TouchableOpacity style={{ padding: 4 }} onPress={() => router.dismiss()}>
              <Ionicons name='close-sharp' size={28} />
            </TouchableOpacity>
          )
        }} />
      <Stack.Screen
        name="(modals)/Filter"
        options={{
          presentation: 'formSheet',
          sheetAllowedDetents: [0.8],
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: 'white'
          },
          title: '',
          sheetCornerRadius: 16,
          sheetGrabberVisible: true,
          headerRight: () => (
            <TouchableOpacity style={{ padding: 4 }} onPress={() => router.dismiss()}>
              <Ionicons name='close-sharp' size={28} />
            </TouchableOpacity>
          )
        }} />
    </Stack>
  )
}

export default AuthLayout