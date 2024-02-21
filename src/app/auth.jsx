import { Redirect, Stack } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button, Pressable } from "react-native";
import { useAuth } from "../components/provider/AuthContextProvider";

const AuthScreen = () => {
  const [localUsername, setLocalUserName] = useState("");
  const { username, setUserName } = useAuth();

  const onSignIn = () => {
    setUserName(localUsername);
  };
  if (username) {
    return <Redirect href={"/"} />;
  }
  return (
    <View style={styles.exercisesContainer}>
      <Stack.Screen options={{ title: "Sign In" }} />
      <Text style={styles.nameTitle}>UserName</Text>
      <TextInput
        style={styles.nameInput}
        value={localUsername}
        onChangeText={setLocalUserName}
        placeholder="Username"
      />
      <Pressable onPress={onSignIn}>
        <Text style={styles.btn}>Sign In</Text>
      </Pressable>
      <Text>{username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  exercisesContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    gap: 30,
    marginHorizontal: 15,
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
  nameTitle: {
    fontSize: 23,
  },
  nameInput: {
    width: "100%",
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: "gainsboro",

    borderRadius: 5,
    fontSize: 24,
  },
  btn: {
    fontSize:24,
    fontWeight:'bold',
    color:'gray',
    width: "100%",
    borderWidth:1,
    borderColor: "gainsboro",
    paddingVertical: 10,
    borderRadius: 5,
    textAlign:"center"
  },
});

export default AuthScreen;
