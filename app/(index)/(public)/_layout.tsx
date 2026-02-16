import { Stack } from 'expo-router'

const PublicLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerShown: false,
                    contentStyle: { backgroundColor: "#fff" }
                }} />
            <Stack.Screen
                name="other-options"
                options={{
                    headerShown: false,
                    presentation: "formSheet",
                    contentStyle: { backgroundColor: "#fff" },
                    animation: "slide_from_bottom",
                    title: '',
                    headerShadowVisible: false,
                    sheetAllowedDetents: [0.6],
                }} />
        </Stack>
    )
}

export default PublicLayout