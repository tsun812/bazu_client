import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, Button } from "react-native";
import { Box, Input } from "native-base";
import React from "react";
export default function Form() {
  const [promo, setPromo] = React.useState("");
  const handleClick = () => {};
  return (
    <Box alignItems="center">
      <Text>Promo Code</Text>
      <Input
        mx="3"
        placeholder="Enter promo code here"
        w="75%"
        maxWidth="300px"
        InputRightElement={
          <Button
            size="xs"
            rounded="none"
            w="1/6"
            h="full"
            onPress={handleClick}
            title="Add"
          ></Button>
        }
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFA500",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
