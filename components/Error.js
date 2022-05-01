import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, Button } from "react-native";
import {
  Input,
  FormControl,
  WarningOutlineIcon,
  Box,
  Center,
  NativeBaseProvider,
} from "native-base";
import React from "react";
export default function Error() {
  const [promo, setPromo] = React.useState("");
  const handleClick = () => {};
  return (
    <Box>
      <FormControl isInvalid w="75%" maxW="300px">
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Promo code already applied
        </FormControl.ErrorMessage>
      </FormControl>
    </Box>
  );
}
