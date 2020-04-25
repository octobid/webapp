import React, { useContext, createContext, useState } from "react";
import { useAuth } from "./AuthContext";
import jwt from "jsonwebtoken";
import { JwtTokenPayload, User } from "../interfaces";

const UserContext = createContext<User>({
  id: "",
  name: "",
  email: "",
});

const UserProvider: React.FC = (props) => {
  const { token } = useAuth();
  const [user, setUser] = useState<User>({ id: "", name: "", email: "" });

  if (token) {
    const jwtPayload = jwt.decode(token) as JwtTokenPayload;

    setUser({
      id: jwtPayload.sub,
      email: jwtPayload.email,
      name: jwtPayload.name
    })
  }

  return <UserContext.Provider value={user} {...props} />;
};

const useUser = () => useContext(UserContext);
export { UserProvider, useUser };
