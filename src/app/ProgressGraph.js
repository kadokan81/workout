import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LineGraph } from "react-native-graph";

const ProgressGraph = () => {
  const points = [
    {
      value: 10,
      date: new Date("2024-01-01"),
    },
    {
      value: 20,
      date: new Date("2024-01-02"),
    },
    {
      value: 5,
      date: new Date("2024-01-03"),
    },
    {
        value: 15,
        date: new Date("2024-01-04"),
      },
  ];
  return (
    <View style={styles.container}>
      <Text>ProgressGraph</Text>
      <LineGraph
        points={points}
        color="#4484B2"
        animated={false}
        style={styles.graph}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  graph: {
    width: "100%",
    height: 200,
  },
});

export default ProgressGraph;
