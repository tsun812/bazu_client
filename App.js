import React from "react";
import { useState } from "react";

import { NativeBaseProvider, Text, Box } from "native-base";
import Form from "./Form";
import User from "./User";
import { id, promo, setId, setMode, setPromo } from "./useApplicationData";
export default function App() {
  // 2. Use at the root of your app
  const [mode, setMode] = useState("user");
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#FFFFFF" alignItems="center" justifyContent="center">
        <Text>Bazu</Text>
        {mode === "user" && <User id={id} setId={setId} setMode={setMode} />}
        {mode === "promo" && (
          <Form promo={promo} setPromo={setPromo} setMode={setMode} />
        )}
      </Box>
    </NativeBaseProvider>
  );
}
