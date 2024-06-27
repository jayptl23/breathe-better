import { useRef } from "react";
import {
  Animated,
  Button,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const TechniqueDetails = () => {
  const growAnim = useRef(new Animated.Value(1)).current;

  const augment = () => {
    // Will change grow value to 2.5 in 4 seconds
    Animated.timing(growAnim, {
      toValue: 2.5,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  };

  const shrink = () => {
    // Will change grow value to 1 in 4 seconds
    Animated.timing(growAnim, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.circle, { transform: [{ scale: growAnim }] }]}
      >
        <Text style={styles.label}>Breathe</Text>
      </Animated.View>

      <View style={styles.buttonContainer}>
        <Pressable onPress={augment} style={styles.button}>
          <Text>Augment</Text>
        </Pressable>

        <Pressable onPress={shrink} style={styles.button}>
          <Text>Shrink</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default TechniqueDetails;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "skyblue",
    width: 100,
    aspectRatio: 1,
    borderRadius: 100,
  },
  label: {
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 200,
    flexDirection: "row",
    backgroundColor: "yellow",
    justifyContent: "space-between",
  },
  button: {
    padding: 20,
    backgroundColor: "pink",
  },
});
