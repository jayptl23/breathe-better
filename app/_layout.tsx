import { Stack } from "expo-router";
import { SettingsProvider } from "../providers/SettingsProvider";

const RootLayout = () => {
  return (
    <SettingsProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerTitle: "Exercises" }} />
      </Stack>
    </SettingsProvider>
  );
};

export default RootLayout;
