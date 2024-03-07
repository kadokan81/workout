import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function SetListItem({ item }) {
  const date = new Date(parseInt(item._id.substring(0, 8), 16) * 1000);
  return (
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
      <View >
        <Text style={{marginTop:10}}> {date.toISOString()}</Text>
      </View>
    </Text>
  );
}

const styles = StyleSheet.create({});
