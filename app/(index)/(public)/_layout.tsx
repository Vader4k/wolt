import { Stack } from 'expo-router'

const PublicLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false, contentStyle: { backgroundColor: "#fff" } }} />
        </Stack>
    )
}

export default PublicLayout