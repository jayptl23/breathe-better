import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import ExerciseListItem from "../../components/ExerciseListItem";
import {
  imageMap,
  meditations,
  techniques,
} from "../../assets/data/techniques";

const IndexScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.sectionTitle}>Breathing Exercises</Text>
        <FlatList
          data={techniques}
          renderItem={({ item }) => <ExerciseListItem technique={item} />}
          contentContainerStyle={{ gap: 10 }}
        />
      </View>
      <View>
        <Text style={styles.sectionTitle}>5 Minute Meditation</Text>
        <FlatList
          horizontal
          contentContainerStyle={{ gap: 10 }}
          data={meditations}
          renderItem={({ item }) => {
            return (
              <View style={styles.box}>
                {/* <Text>{item.name}</Text> */}
                <Image
                  style={styles.image}
                  source={imageMap[item.thumbnail]}
                  resizeMode="cover"
                />
                <View style={styles.overlay}>
                  <Text style={styles.text}>{item.name}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "beige",
    padding: 10,
  },
  box: {
    width: 210,
    height: 210,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 10,
  },
  image: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // This makes the overlay cover the entire parent
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Black with 30% opacity
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 8,
  },
});
