import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {useFonts} from "expo-font";
import {Nunito_400Regular, Nunito_700Bold} from "@expo-google-fonts/nunito";

const queryClient = new QueryClient();

export default function RootLayout() {
  let [fontLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  })

  if (!fontLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <Slot />
      </QueryClientProvider>
    </GestureHandlerRootView>
  )
}
