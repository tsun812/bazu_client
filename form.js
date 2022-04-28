import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, Button } from "react-native";
import { Box, Input } from "native-base";
import React from "react";
import Error from "./Error";
import Promo from "./Promo";
export default function Form(props) {
  const handleClick = () => {};
  return (
    <Box alignItems="center">
      <Text>Promo Code</Text>
      <Input
        type="text"
        w="75%"
        maxW="300px"
        py="0"
        InputRightElement={
          <Button
            size="xs"
            rounded="none"
            w="1/6"
            h="full"
            onPress={handleClick}
            title="add"
          ></Button>
        }
        placeholder="Enter your promo here"
      />
      <Promo />
      <Error />
    </Box>
  );
}
