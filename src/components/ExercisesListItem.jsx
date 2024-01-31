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
      gap:5
    },
    exercisesName: {
      fontSize: 20,
      fontWeight: "500",
    },
  });

export default ExercisesListItem