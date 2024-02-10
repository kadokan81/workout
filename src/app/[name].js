import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Stack } from "expo-router";

import { useState } from "react";

import { gql } from "graphql-request";
import { useQuery } from "@tanstack/react-query";
import graphqlClient from "../graphqlClient";
import { ActivityIndicator } from "react-native";
import { NewSetInput } from "../components/NewSetInput";
import { SetsList } from "../components/SetsList";

const nameExerciseQuery = gql`
  query exercises($name: String) {
    exercises(name: $name) {
      muscle
      type
      equipment
      instructions
      name
    }
  }
`;

export default function ExercisePage() {
  const { name } = useLocalSearchParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["exercises", name],
    queryFn: () => graphqlClient.request(nameExerciseQuery, { name }),
  });
  const [isInstructionsShow, setIsInstructionsShow] = useState(false);
  if (isLoading) {
    return <ActivityIndicator/>;
  }

  if (error) {
    return <Text>Failed to fetch data</Text>;
  }

  const exercise = data.exercises[0];

  if (!exercise) {
    return <Text>Exercise not found</Text>;
  }
  return (
    <ScrollView contentContainerStyle={styles.exercisesContainer}>
      <Stack.Screen
        options={{
          title: name,
        }}
      />
      <View style={styles.exerciseHeader}>
        <Text style={styles.exercisesName}>{exercise.name}</Text>
        <Text style={styles.exercisesSubtitle}>
          {exercise.muscle} | {exercise.equipment}
        </Text>
      </View>
      <View style={styles.exerciseDescriptions}>
        <Text
          style={styles.instructions}
          numberOfLines={isInstructionsShow ? 0 : 4}
        >
          {exercise.instructions}
        </Text>
        <Text
          onPress={() => setIsInstructionsShow(!isInstructionsShow)}
          style={styles.see_more}
        >
          See {!isInstructionsShow ? "More" : "Less"}
        </Text>
      </View>
      <NewSetInput />
      <SetsList/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  exercisesContainer: {
    marginTop: 10,
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
    gap: 10,
    marginHorizontal: 8,

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
  exerciseHeader: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    
    backgroundColor: "#fff",
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
  exerciseDescriptions: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    
    backgroundColor: "#fff",
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
