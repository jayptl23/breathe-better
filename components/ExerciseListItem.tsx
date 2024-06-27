import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

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
    padding: 10,
    borderRadius: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
});
