import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [id, setId] = useState("");
  const [mode, setMode] = useState("user");
  const [promo, setPromo] = useState(null);

  const fetchAPI = () => {
    Promise.all([axios.get(`/users/{id}`)]).then((all) => {
      setMode(all[0]["data"].promo);
    });
  };
  const updatePromo = (id, newPromo) => {
    let params = {
      promo: newPromo,
    };
    axios.put(`/users/${id}`, params).then((all) => {
      setPromo(newPromo);
    });
  };

  const deletePromo = (id) => {
    axios.put(`/users/${id}`, null).then((all) => {
      setPromo(null);
    });
  };

  return {
    id,
    mode,
    promo,
    setId,
    setMode,
    setPromo,
    fetchAPI,
    updatePromo,
    deletePromo,
  };
}
