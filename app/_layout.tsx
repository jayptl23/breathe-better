import { Stack } from "expo-router";
import { SettingsProvider } from "../providers/SettingsProvider";

const RootLayout = () => {
  return (
    <SettingsProvider>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false, title: "Home" }}
        />
      </Stack>
    </SettingsProvider>
  );
};

export default RootLayout;
