import { FlatList, StyleSheet, Text, View } from "react-native";
import ExerciseListItem from "../components/ExerciseListItem";
import { techniques } from "../assets/data/techniques";

const IndexScreen = () => {
  return (
    <View>
      <FlatList
        data={techniques}
        renderItem={({ item }) => <ExerciseListItem technique={item} />}
        contentContainerStyle={{ padding: 10, gap: 10 }}
      />
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
  },
});
