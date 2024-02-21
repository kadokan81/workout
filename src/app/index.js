import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ExercisesListItem from "../components/ExercisesListItem";
import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import client from "../graphqlClient";
import { Redirect } from "expo-router";
import { useAuth } from "../components/provider/AuthContextProvider";

const exerciseQuery = gql`
  query exercises($muscle: String, $name: String) {
    exercises(muscle: $muscle, name: $name) {
      muscle
      name
      equipment
    }
  }
`;

export default function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["exercises"],
    queryFn: () => client.request(exerciseQuery),
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Failed To Fetch</Text>;
  }

  const { exercises } = data;
  const {username} = useAuth()

  if(!username){
    return <Redirect href={'/auth'}/>
  }



  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        contentContainerStyle={{ gap: 7 }}
        keyExtractor={(item, ind) => item.name + ind}
        renderItem={({ item }) => <ExercisesListItem item={item} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "ghostwhite",
  },
});
