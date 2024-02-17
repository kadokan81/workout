import { useMutation } from "@tanstack/react-query";
import { gql } from "graphql-request";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import graphqlClient from "../graphqlClient";
import { useQueryClient } from '@tanstack/react-query'




const addSetMutationDocument = gql`
  mutation MyMutation($newSet: NewSet!) {
    insertSet(
      document: $newSet
      dataSource: "Cluster0"
      database: "workouts"
      collection: "sets"
    ) {
      insertedId
    }
  }
`;

export const NewSetInput = ({exerciseName}) => {
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");

  const queryClient = useQueryClient()

  const { mutate, error, isError, isPending } = useMutation({
    mutationFn: (newSet) =>
      graphqlClient.request(addSetMutationDocument, { newSet }),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:['sets',exerciseName]})
      setReps("");
      setWeight("");
    },
  });

  const addSet = () => {
    const newSet = {
      exercise: exerciseName,
      reps: Number.parseInt(reps),
    };
    if (Number.parseFloat(weight)) {
      newSet.weight = Number.parseFloat(weight);
    }
    mutate(newSet);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerForm}>
        <TextInput
          value={reps}
          onChangeText={(val) => setReps(val.toString())}
          placeholder="Reps"
          style={styles.input}
          keyboardType="numeric"
        />
        <TextInput
          value={weight}
          onChangeText={(val) => setWeight(val.toString())}
          placeholder="Weight"
          style={styles.input}
          keyboardType="numeric"
        />
        <Button
          disabled={isPending}
          title={isPending ? `Adding...` : "Add"}
          onPress={addSet}
        />
      </View>
      {isError && <Text style={{ color: "red" }}>Failed to add the set</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    gap: 10,
    padding: 15,
    borderRadius: 5,
    backgroundColor: "ghostwhite",
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
  containerForm:{
    display:"flex",
    flexDirection:"row",
    gap:15,


  },
  input: {
    borderWidth: 1,
    maxWidth:'35%',
    borderColor: "gainsboro",
    padding: 10,
    flex: 1,
    borderRadius: 5,
  },
});
