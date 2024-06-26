import { FlatList, Text, View } from "react-native";

const techniques = ["Box Breathing", "4-7-8 Breathing", "5-5-5 Breathing"];
const IndexScreen = () => {
  return (
    <View>
      <FlatList
        data={techniques}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
};

export default IndexScreen;
