import { Stack } from "expo-router";
import { SettingsProvider } from "../providers/SettingsProvider";

const RootLayout = () => {
  return (
    <SettingsProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </SettingsProvider>
  );
};

export default RootLayout;
