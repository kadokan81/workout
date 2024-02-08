import { Stack } from "expo-router";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

export default function RootLayout() {
  return (
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
  );
}
