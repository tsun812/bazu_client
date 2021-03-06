import React from "react";
import { useState } from "react";

import { NativeBaseProvider, Text, Box } from "native-base";
import Form from "./components/Form";
import User from "./components/User";
import useApplicationData from "./hooks/useApplicationData";
export default function App() {
  // 2. Use at the root of your app
  // const [mode, setMode] = useState("user");
  const {
    id,
    mode,
    promo,
    error,
    setError,
    setId,
    setMode,
    setPromo,
    cleanup,
    fetchAPI,
    updatePromo,
    deletePromo,
  } = useApplicationData();
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#FFFFFF" alignItems="center" justifyContent="center">
        <Text>Bazu</Text>
        {mode === "user" && (
          <User id={id} setId={setId} setMode={setMode} fetch={fetchAPI} />
        )}
        {mode === "promo" && (
          <Form
            id={id}
            promo={promo}
            setMode={setMode}
            updatePromo={updatePromo}
            deletePromo={deletePromo}
            error={error}
            setError={setError}
            setPromo={setPromo}
            cleanup={cleanup}
          />
        )}
      </Box>
    </NativeBaseProvider>
  );
}
