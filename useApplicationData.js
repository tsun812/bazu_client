import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [id, setId] = useState("");
  const [mode, setMode] = useState("user");
  const [promo, setPromo] = useState("");
  return { id, mode, promo, setId, setMode, setPromo };
}
