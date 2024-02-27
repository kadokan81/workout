import { StyleSheet, Text, Pressable } from "react-native";

import { Link } from "expo-router";

export default function ExercisesListItem({ item }) {
  return (
    <Link href={`/${item.name}`} asChild>
      <Pressable style={styles.exercisesContainer}>
        <Text style={styles.exercisesName}>{item.name}</Text>
        <Text style={styles.exercisesSubtitle}>
          {item.muscle} | {item.equipment}
        </Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  exercisesContainer: {
    display: "flex",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 3,
    gap: 5,
   
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    elevation: 4,
  },
  exercisesName: {
    fontSize: 20,
    fontWeight: "500",
  },
  exercisesSubtitle: {
    color: "#6f6f6f",
    textTransform: "capitalize",
  },
});


