import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export const NewSetInput = () => {
    const[ reps,setReps]= useState('')
    const[ weight,setWeight]= useState('')


    const addSet =() => {
      console.warn('Add SEt'+reps+":"+weight)
    }
  return (
    <View style={styles.container}>
      <TextInput value={reps}  onChangeText={(val)=>setReps(val.toString())} placeholder="Reps" style={styles.input} keyboardType='numeric' />
      <TextInput value={weight}  onChangeText={(val)=>setWeight(val.toString())} placeholder="Weight" style={styles.input} keyboardType='numeric'  />
      <Button  title="ADD" onPress={addSet}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
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
  input: {
    borderWidth: 1,
    borderColor: "gainsboro",
    padding:10,
    flex:1,
    borderRadius:5
  },
});
