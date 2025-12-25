import React, { createContext } from "react";

export const NavigationContext = createContext({
  index: 0,
  setIndex: () => {},
});

export function NavigationProvider({ children, value }) {
  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}
