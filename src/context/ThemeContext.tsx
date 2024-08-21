"use client";
import React, { createContext, useState, ReactNode } from "react";

// Define the shape of the ThemeContext
interface ThemeContextProps {
  theme: string;
  setTheme: (theme: string) => void;
}

// Initialize the context with default values
export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined,
);

interface ThemeContextProviderProps {
  children: ReactNode;
}

const getFromLocalStorage = (): string => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light"; // Default to "light" if no value is found
  }
  return "light"; // Default to "light" on the server or in non-browser environments
};

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<string>(getFromLocalStorage);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
