/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useState } from "react";

export const LovedCountContext = createContext();

export const LovedCountProvider = ({ children }) => {
  const [lovedCount, setLovedCount] = useState(0);

  const fetchLovedCount = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/contents/${id}`
      );
      setLovedCount(response.data.lovedCount);
    } catch (error) {
      console.error(error);
    }
  };

  const updateLovedCount = async (id, newLovedCount) => {
    try {
      await axios.patch(`http://localhost:5000/api/v1/contents/${id}`, {
        lovedCount: newLovedCount,
      });
      setLovedCount(newLovedCount);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LovedCountContext.Provider
      value={{
        lovedCount,
        fetchLovedCount,
        updateLovedCount,
      }}
    >
      {children}
    </LovedCountContext.Provider>
  );
};
