import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput } from "react-native";
import { Button } from "native-base";
import React from "react";
export default function Promo(props) {
  const handlePress = (e) => {
    props.deletePromo(props.id);
  };
  return (
    <Button size="sm" variant="outline" onPress={handlePress}>
      {props.promo}
    </Button>
  );
}
