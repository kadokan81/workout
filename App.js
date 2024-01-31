import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import exercises from "./assets/data/exercises.json";
import ExercisesListItem from "./src/components/ExercisesListItem";


export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        contentContainerStyle={{gap:5}}
        keyExtractor={(item, ind )=> item.name + ind}
        renderItem={({ item }) => <ExercisesListItem  item={item} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 80,
    backgroundColor: "#fff",
    backgroundColor: "#D8D8D8",
  },
});
