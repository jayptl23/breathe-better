import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Button,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { techniques } from "../assets/data/techniques";
import { StepType } from "../types";

const TechniqueDetails = () => {
  const { id } = useLocalSearchParams();
  const technique = techniques.find((t) => t.id.toString() === id);

  if (!technique) {
    return <Text>Technique not found</Text>;
  }

  const growAnim = useRef(new Animated.Value(1)).current;

  const [done, setDone] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState<number>(
    technique.inhaleTime
  );
  const currentStep = technique.steps[currentStepIndex];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let interval: NodeJS.Timeout;

    if (!done) {
      if (currentStep.type === StepType.inhale) {
        augment();
      } else if (currentStep.type === StepType.exhale) {
        shrink();
      }

      interval = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);

      timer = setTimeout(() => {
        if (currentStepIndex < technique.steps.length - 1) {
          setCurrentStepIndex(currentStepIndex + 1);
          setTimeRemaining(technique.steps[currentStepIndex + 1].duration);
        } else {
          setDone(true);
        }
      }, currentStep.duration * 1000);
    }

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [currentStepIndex, done]);

  const augment = () => {
    Animated.timing(growAnim, {
      toValue: 2.5,
      duration: technique.inhaleTime * 1000,
      useNativeDriver: true,
    }).start();
  };

  const shrink = () => {
    Animated.timing(growAnim, {
      toValue: 1,
      duration: technique.exhaleTime * 1000,
      useNativeDriver: true,
    }).start();
  };

  const resetExercise = () => {
    setCurrentStepIndex(0);
    setTimeRemaining(technique.inhaleTime);
    setDone(false);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: technique.name }} />
      <Animated.View
        style={[styles.circle, { transform: [{ scale: growAnim }] }]}
      >
        <Text style={styles.label}>
          {done ? "Done" : technique.steps[currentStepIndex].type}
        </Text>
        {!done && <Text>{timeRemaining}s</Text>}
      </Animated.View>

      <View style={styles.buttonContainer}>
        {done ? (
          <Pressable onPress={resetExercise} style={styles.button}>
            <Text>Again</Text>
          </Pressable>
        ) : null}
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
