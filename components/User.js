import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput } from "react-native";
import { Button, Box } from "native-base";
import React from "react";
export default function User(props) {
  const handlePress = (e, title) => {
    console.log(e);
    if (title === "Sally") {
      props.setId("3");
      props.fetch("3");
    } else {
      props.setId("4");
      props.fetch("4");
    }
  };
  return (
    <Box>
      <Button
        size="sm"
        variant="subtle"
        my="10"
        mx="10"
        onPress={(e) => handlePress(e, "Sally")}
      >
        Sally
      </Button>
      <Button
        size="sm"
        variant="subtle"
        my="10"
        mx="10"
        px="10"
        onPress={(e) => handlePress(e, "Bob")}
      >
        Bob
      </Button>
    </Box>
  );
}
