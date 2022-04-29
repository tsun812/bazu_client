import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput } from "react-native";
import { Button, Box } from "native-base";
import React from "react";
export default function Promo(props) {
  const handlePress = (e) => {
    props.cleanup();
  };
  return (
    <Box alignItems="center">
      <Button
        size="sm"
        size="sm"
        variant="subtle"
        my="10"
        mx="5"
        onPress={handlePress}
      >
        Logout
      </Button>
    </Box>
  );
}
