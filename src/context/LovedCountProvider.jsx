/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const LovedCountContext = createContext();

export const LovedCountProvider = ({ children }) => {
  const [lovedCounts, setLovedCounts] = useState({});

  const fetchLovedCount = async (contentId) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/contents/${contentId}`
      );
      const updatedLovedCounts = {
        ...lovedCounts,
        [contentId]: response.data.lovedCount,
      };
      setLovedCounts(updatedLovedCounts);
    } catch (error) {
      console.error(error);
    }
  };

  const updateLovedCount = async (contentId, newLovedCount) => {
    try {
      await axios.patch(`http://localhost:5000/api/v1/contents/${contentId}`, {
        lovedCount: newLovedCount,
      });
      const updatedLovedCounts = { ...lovedCounts, [contentId]: newLovedCount };
      setLovedCounts(updatedLovedCounts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchInitialLovedCounts = async () => {
      try {
        // Fetch initial loved counts for all content
        const response = await axios.get(
          "http://localhost:5000/api/v1/contents"
        );
        const initialLovedCounts = response.data.reduce(
          (counts, content) => ({
            ...counts,
            [content._id]: content.lovedCount,
          }),
          {}
        );
        setLovedCounts(initialLovedCounts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchInitialLovedCounts();
  }, []);

  return (
    <LovedCountContext.Provider
      value={{ lovedCounts, fetchLovedCount, updateLovedCount }}
    >
      {children}
    </LovedCountContext.Provider>
  );
};
