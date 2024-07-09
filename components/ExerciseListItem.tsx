import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Technique } from "../types";

type ExcerciseListItemProps = {
  technique: Technique;
};

const ExerciseListItem = ({ technique }: ExcerciseListItemProps) => {
  return (
    <Link href={`/${technique.id}`} asChild>
      <Pressable style={styles.container}>
        <Text style={styles.name}>{technique.name}</Text>
        <Text style={styles.description}>{technique.description}</Text>
      </Pressable>
    </Link>
  );
};

export default ExerciseListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
  },
  name: {
    fontSize: 22,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
});
