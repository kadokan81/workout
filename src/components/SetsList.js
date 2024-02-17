import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import graphqlClient from "../graphqlClient";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";

const setsQuery = gql`
query sets($exercise:String!) {
  sets(exercise: $exercise) {
    documents {
      _id
      exercise
      reps
      weight
    }
  }
}
`;

export const SetsList = ({ ListHeaderComponent ,setListName}) => {
console.log("🚀 ~ SetsList ~ setListName:", setListName)

  const { data, isLoading, error } = useQuery({
    queryKey: ["sets",setListName],
    queryFn: () => graphqlClient.request(setsQuery,{exercise:setListName}),
  });
  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch data</Text>;
  }

  const sets = data.sets.documents;
  console.log("🚀 ~ SetsList ~ sets:", sets)

  return (
    <FlatList
      data={sets}
      ListHeaderComponent={ListHeaderComponent}
      ListHeaderComponentStyle={{marginBottom:10}}
      keyExtractor={(item, ind) => item._id}
      renderItem={({ item }) => (
        <Text
          style={{
            width: "100%",
            padding: 5,
            paddingHorizontal: 20,
            borderCurve: 6,
            backgroundColor: "white",
            marginVertical: 5,
          }}
        >
          {item.exercise} {item.reps} * {item.weight}
        </Text>
      )}
    />
  );
};
