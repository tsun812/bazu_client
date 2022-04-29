import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput } from "react-native";
import { Button, Box } from "native-base";
import React from "react";
export default function Promo(props) {
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
    <Box alignItems="center">
      <Button size="sm" onPress={(e) => handlePress(e, "Sally")}>
        Sally
      </Button>
      <Button size="sm" onPress={(e) => handlePress(e, "Bob")}>
        Bob
      </Button>
    </Box>
  );
}
