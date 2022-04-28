import React from "react";
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, Box } from "native-base";
import Form from "./form";
export default function App() {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#FFA500" alignItems="center" justifyContent="center">
        <Text>Bazu</Text>
        <Form />
      </Box>
    </NativeBaseProvider>
  );
}
