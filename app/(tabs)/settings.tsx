import { View, Text, StyleSheet, Switch } from "react-native";
import { useSettings } from "../../providers/SettingsProvider";

export default function Tab() {
  const { continuousMode, toggleContinuousMode } = useSettings();

  return (
    <View style={styles.container}>
      <View style={styles.option}>
        <Switch onValueChange={toggleContinuousMode} value={continuousMode} />
        <View style={styles.optionDetails}>
          <Text style={styles.optionTitle}>Continuous Mode</Text>
          <Text>Breathing exercises will continue indefinitely.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
  },
  optionDetails: {
    marginLeft: 20,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
});
