import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthContextProvider from "../components/provider/AuthContextProvider";

// Create a client
const queryClient = new QueryClient();

export default function RootLayout() {
  return (
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
  );
}
