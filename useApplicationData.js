import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [id, setId] = useState("");
  const [mode, setMode] = useState("user");
  const [promo, setPromo] = useState(null);
  const [error, setError] = useState(false);
  const cleanup = () => {
    setError(false);
    setPromo(null);
    setId("");
    setMode("user");
  };
  const fetchAPI = (id) => {
    console.log(id);
    axios
      .get(`http://192.168.0.100:3000/users/${id}`)
      .then((res, err) => {
        console.log(res.data.promo);
        setPromo(res["data"]["promo"]);
        setMode("promo");
      })
      .catch((error) => console.log(error));
  };
  const updatePromo = (id, newPromo) => {
    let params = {
      newPromo: newPromo,
    };
    axios
      .put(`http://192.168.0.100:3000/users/${id}`, params)
      .then((all) => {
        setPromo(newPromo);
      })
      .catch((error) => console.log(error));
  };

  const deletePromo = (id) => {
    console.log(promo);
    let params = {
      newPromo: null,
    };
    axios
      .put(`http://192.168.0.100:3000/users/${id}`, params)
      .then((all) => {
        setPromo(null);
        setError(false);
      })
      .catch((error) => console.log(error));
  };

  return {
    id,
    mode,
    promo,
    error,
    setId,
    setMode,
    setPromo,
    fetchAPI,
    updatePromo,
    deletePromo,
    setError,
    cleanup,
  };
}
