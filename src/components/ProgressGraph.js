import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LineGraph } from "react-native-graph";

const ProgressGraph = ({ sets = [] }) => {
  const newSets = sets.map((set) => {
    const d = new Date(parseInt(set._id.substring(0, 8), 16) * 1000);
    return {
      value: set.reps * set.weight,
      date: d,
    };
  });
  console.log("🚀 ~ newSets ~ newSets:", newSets);

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
        points={newSets}
        color="#4484B2"
        animated={false}
        onPointSelected= {(point) => <Text>{point}</Text>}
        TopAxisLabel={() => <Text>123</Text>}
        BottomAxisLabel={() => <Text>123</Text>}
        style={styles.graph}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 10,
  },
  graph: {
    width: "100%",
    height: 200,
  },
});

export default ProgressGraph;
