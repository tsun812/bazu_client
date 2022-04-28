import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [id, setId] = useState("");
  const [mode, setMode] = useState("user");
  const [promo, setPromo] = useState(null);
  const [error, setError] = useState(false);

  const fetchAPI = () => {
    Promise.all([axios.get(`/users/{id}`)])
      .then((all) => {
        console.log(all[0]["data"].promo);
        setMode(all[0]["data"].promo);
      })
      .catch((error) => console.log(error));
  };
  const updatePromo = (id, newPromo) => {
    let params = {
      promo: newPromo,
    };
    axios
      .put(`/users/${id}`, params)
      .then((all) => {
        setPromo(newPromo);
      })
      .catch((error) => console.log(error));
  };

  const deletePromo = (id) => {
    axios
      .put(`/users/${id}`, null)
      .then((all) => {
        setPromo(null);
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
  };
}
