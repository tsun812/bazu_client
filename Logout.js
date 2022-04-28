import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput } from "react-native";
import { Button, Box } from "native-base";
import React from "react";
export default function Promo(props) {
  const handlePress = (e) => {
    props.setMode("user");
  };
  return (
    <Box alignItems="start">
      <Button size="sm" onPress={handlePress}>
        Logout
      </Button>
    </Box>
  );
}
