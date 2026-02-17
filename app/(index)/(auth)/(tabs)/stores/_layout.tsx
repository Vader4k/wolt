import { Stack } from 'expo-router'

const Layout = () => {
    return (
        <Stack screenOptions={{ contentStyle: { backgroundColor: '#fff' } }}>
            <Stack.Screen name="index" options={{ title: "Stores" }} />
        </Stack>
    )
}

export default Layout
