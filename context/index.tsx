import React from "react";
import { AuthProvider } from "./AuthContext";
import { UserProvider } from "./UserContext";
import { ScreenProvider } from "./ScreenContext";

export const AppProviders: React.FC = ({ children }) => {
  return (
    <ScreenProvider>
      <AuthProvider>
        <UserProvider>{children}</UserProvider>
      </AuthProvider>
    </ScreenProvider>
  );
};
