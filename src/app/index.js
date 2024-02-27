import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ExercisesListItem from "../components/ExercisesListItem";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import client from "../graphqlClient";
import { Redirect } from "expo-router";
import { useAuth } from "../components/provider/AuthContextProvider";

const exerciseQuery = gql`
  query exercises($muscle: String, $name: String, $offset: Int) {
    exercises(muscle: $muscle, name: $name, offset: $offset) {
      muscle
      name
      equipment
    }
  }
`;

export default function App() {
  const { data, isLoading, error, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["exercises"],
      queryFn: ({ pageParam }) =>
        client.request(exerciseQuery, { offset: pageParam }),
      initialPageParam: 0,
      getNextPageParam: (lastPage, pages) => pages.length * 10,
    });

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Failed To Fetch</Text>;
  }

  const exercises = data.pages.flatMap((page) => page.exercises);

  const { username } = useAuth();

  const loadMore = () => {
    if (isFetchingNextPage) {
      return;
    }

    fetchNextPage();
  };

  if (!username) {
    return <Redirect href={"/auth"} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        contentContainerStyle={{ gap: 7 }}
        keyExtractor={(item, ind) => item.name + ind}
        renderItem={({ item }) => <ExercisesListItem item={item} />}
        onEndReachedThreshold={1}
        onEndReached={loadMore}
        contentInsetAdjustmentBehavior="automatic"
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
