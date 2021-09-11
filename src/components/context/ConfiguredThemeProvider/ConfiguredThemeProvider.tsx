import React, { useContext, useState } from "react";
import { ThemeProvider } from "styled-components";

type ConfiguredThemeProviderProps = {
  children: React.ReactNode;
};

const ConfiguredThemeContext = React.createContext({
  toggle: false,
  toggleDarkMode: () => {},
});

export const lightTheme = {
  fg: "#202020",
  bg: "#fcc0b830",
  primary: "#fcc0b8",
};

export const darkTheme = {
  fg: "#f1f1f1",
  bg: `${lightTheme.fg}`,
  primary: "#fcc0b8",
};

export const useConfiguredThemeContext = () =>
  useContext(ConfiguredThemeContext);

export const ConfiguredThemeProvider = ({
  children,
}: ConfiguredThemeProviderProps) => {
  const [toggle, flick] = useState(true);

  return (
    <ConfiguredThemeContext.Provider
      value={{
        toggle,
        toggleDarkMode: () => {
          flick(!toggle);
        },
      }}
    >
      <ThemeProvider theme={toggle ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ConfiguredThemeContext.Provider>
  );
};
