import Router from "next/router";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { Loader, Container } from "semantic-ui-react";
import DefaultLayout from "../components/DefaultLayout";

const LogoutPage = () => {
  const { logout } = useAuth();

  useEffect(() => {
    logout();
    Router.push("/");
  }, []);

  return (
    <DefaultLayout page="Logout">
      <Container style={{ marginTop: "100px" }}>
        <Loader active inline="centered" />
      </Container>
    </DefaultLayout>
  );
};

export default LogoutPage;
