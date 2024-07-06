import { useLocalSearchParams, useRouter } from "expo-router";
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

const TechniqueDetails = () => {
  const { id } = useLocalSearchParams();
  // console.log(id);
  const technique = techniques.find((t) => t.id.toString() === id);

  if (!technique) {
    return <Text>Technique not found</Text>;
  }

  const growAnim = useRef(new Animated.Value(1)).current;

  const [done, setDone] = useState(false);
  const [step, setStep] = useState<"inhale" | "hold1" | "hold2" | "exhale">(
    "inhale"
  );
  const [timeRemaining, setTimeRemaining] = useState(technique.inhaleTime); // Initialize with 4 seconds

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let interval: NodeJS.Timeout;

    if (!done) {
      if (step === "inhale") {
        augment();
      } else if (step === "exhale") {
        shrink();
      }

      interval = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);

      if (step === "inhale") {
        timer = setTimeout(() => {
          setStep("hold1");
          setTimeRemaining(technique.holdTime);
        }, technique.inhaleTime * 1000);
      } else if (step === "exhale") {
        timer = setTimeout(() => {
          setStep("hold2");
          setTimeRemaining(technique.holdTime);
        }, technique.exhaleTime * 1000);
      } else if (step === "hold1") {
        timer = setTimeout(() => {
          setStep("exhale");
          setTimeRemaining(technique.exhaleTime);
        }, technique.holdTime * 1000);
      } else if (step === "hold2") {
        timer = setTimeout(() => {
          setDone(true);
        }, technique.holdTime * 1000);
      }
    }

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [step, done]);

  const formatStep = (step: string): string => {
    if (step === "hold1" || step === "hold2") {
      step = "hold";
    }
    return step.charAt(0).toUpperCase() + step.slice(1).toLowerCase();
  };

  const augment = () => {
    // Will change grow value to 2.5 in 4 seconds
    Animated.timing(growAnim, {
      toValue: 2.5,
      duration: technique.inhaleTime * 1000,
      useNativeDriver: true,
    }).start();
  };

  const shrink = () => {
    // Will change grow value to 1 in 4 seconds
    Animated.timing(growAnim, {
      toValue: 1,
      duration: technique.exhaleTime * 1000,
      useNativeDriver: true,
    }).start();
  };

  const resetExercise = () => {
    setStep("inhale");
    setDone(false);
    setTimeRemaining(technique.inhaleTime); // Reset time for the initial step
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.circle, { transform: [{ scale: growAnim }] }]}
      >
        <Text style={styles.label}>{done ? "Done" : formatStep(step)}</Text>
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
