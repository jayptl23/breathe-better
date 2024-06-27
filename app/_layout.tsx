import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Exercises" }} />
    </Stack>
  );
};

export default RootLayout;
