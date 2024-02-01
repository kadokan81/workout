import { Slot, Stack } from "expo-router";

import { Text } from "react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "ghostwhite",
        },
        headerTintColor: "#000",
        headerTitleStyle: {
          fontWeight: '500',
          fontSize:20
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
  );
}
