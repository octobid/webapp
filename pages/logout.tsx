import Router from "next/router";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

const LogoutPage = () => {
  const { logout } = useAuth();

  useEffect(() => {
    logout();
    Router.push("/");
  }, []);

  return null;
};

export default LogoutPage;
