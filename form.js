import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, Button } from "react-native";
import { Box, Input } from "native-base";
import React from "react";
import { useState } from "react";
import Error from "./Error";
import Promo from "./Promo";
import Logout from "./Logout";
export default function Form(props) {
  const [track, setTrack] = useState("");
  const handleChange = (e) => {
    setTrack(e);
  };
  const handlePress = (e) => {
    console.log(track);
    if (props.promo === null) {
      props.updatePromo(props.id, track);
    } else props.setError(true);
  };

  return (
    <Box alignItems="center">
      <Logout setMode={props.setMode} cleanup={props.cleanup} />
      <Text>Promo Code</Text>
      <Input
        type="text"
        w="75%"
        maxW="300px"
        py="0"
        onChangeText={handleChange}
        InputRightElement={
          <Button
            size="xs"
            rounded="none"
            w="1/6"
            h="full"
            onPress={(e) => handlePress(e)}
            title="Add"
          ></Button>
        }
        placeholder="Enter your promo here"
      />
      {props.promo && (
        <Promo
          id={props.id}
          promo={props.promo}
          deletePromo={props.deletePromo}
        />
      )}
      {props.error && <Error />}
    </Box>
  );
}
