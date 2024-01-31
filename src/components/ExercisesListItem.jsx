import { StyleSheet, Text, View } from "react-native";

function ExercisesListItem({ item }) {
  return (
    <View style={styles.exercisesContainer}>
      <Text style={styles.exercisesName}>{item.name}</Text>
      <Text style={styles.exercisesSubtitle}>
        {item.muscle.toUpperCase()} | {item.equipment.toUpperCase()}
      </Text>
    </View>
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
    //shadow
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.20,
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

export default ExercisesListItem;
