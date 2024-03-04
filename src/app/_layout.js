import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthContextProvider from "../components/provider/AuthContextProvider";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Create a client
const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <Stack
            screenOptions={{
              headerStyle: {
                backgroundColor: "ghostwhite",
              },
              headerTintColor: "#000",
              headerTitleStyle: {
                fontWeight: "500",
                fontSize: 20,
              },
            }}
          >
            <Stack.Screen
              name="index"
              options={{
                title: "Exercise",
              }}
            />
          </Stack>
        </QueryClientProvider>
      </AuthContextProvider>
    </GestureHandlerRootView>
  );
}
