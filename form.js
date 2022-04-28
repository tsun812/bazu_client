import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, Button } from "react-native";
import { Box, Input } from "native-base";
import React from "react";
import Error from "./Error";
import Promo from "./Promo";
import Logout from "./Logout";
export default function Form(props) {
  const handleClick = () => {
    if (props.promo === null) {
    }
  };
  return (
    <Box alignItems="center">
      <Logout setMode={props.setMode} />
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
      {props.promo !== null && <Promo promo={props.promo} />}
      <Error />
    </Box>
  );
}
