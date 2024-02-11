import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import graphqlClient from "../graphqlClient";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { FlatList } from "react-native";

const setsQuery = gql`
  query sets {
    sets {
      documents {
        _id
        exercise
        reps
        weight
      }
    }
  }
`;

export const SetsList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["sets"],
    queryFn: () => graphqlClient.request(setsQuery),
  });
  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch data</Text>;
  }

  const sets = data.sets.documents;

  return (
    <View>
      <FlatList
        data={sets}
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
      {/* <StatusBar style="auto" /> */}
    </View>
  );
};
