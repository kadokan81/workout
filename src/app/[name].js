import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Link, Stack } from "expo-router";

import exercises from "../../assets/data/exercises.json";
import { useState } from "react";

export default function ExercisePage() {
  const [isInstructionsShow, setIsInstructionsShow] = useState(false);
  const { name } = useLocalSearchParams();
  const exercise = exercises.find((item) => item.name === name);

  if (!exercise) {
    return (
      <>
        <Stack.Screen
          options={{
            title: "No Name",
          }}
        />
        <Text>Exercise not found</Text>
      </>
    );
  }
  return (
    <ScrollView contentContainerStyle={styles.exercisesContainer}>
      <Stack.Screen
        options={{
          title: exercise.name,
        }}
      />
      <Text style={styles.exercisesName}>{exercise.name}</Text>
      <Text style={styles.exercisesSubtitle}>
        {exercise.muscle.toUpperCase()} | {exercise.equipment.toUpperCase()}
      </Text>
      <Text  style={styles.instructions} numberOfLines={isInstructionsShow ? 0 : 4}>
        {exercise.instructions}
      </Text>
      <Text onPress={()=>setIsInstructionsShow(!isInstructionsShow)}  style={styles.see_more}>See {!isInstructionsShow ?"More": "Less"}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  exercisesContainer: {
    marginTop: 10,
    display: "flex",
    alignSelf:"center",
    justifyContent:"center",
    backgroundColor: "#fff",
    marginBottom: 60,
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    gap: 15,
    //shadow
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
  instructions: {
    fontSize: 16,
    lineHeight: 22,
  },
  see_more: {
    alignSelf: "center",
    color: "dimgrey",
 
    textAlign: "center",
    fontSize: 14,
  },
});
