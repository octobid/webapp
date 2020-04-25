import HomepageLayout from "../components/HomepageLayout";
import Router from "next/router";
import { Grid, Header } from "semantic-ui-react";
import { useAuth } from "../context/AuthContext";
import { LoginForm } from "../components/LoginForm";
import { useUser } from "../context/UserContext";
import { useEffect } from "react";

const LoginPage = () => {
  const { login } = useAuth();
  const { id } = useUser();

  const redirectToDashboard = () => {
    Router.push("/dashboard");
  };

  const onSubmitHandler = async (username: string, password: string) => {
    try {
      await login(username, password);
      redirectToDashboard();
    } catch (e) {
      alert(e.message);
    }
  };

  useEffect(() => {
    if (id !== "") {
      redirectToDashboard();
    }
  }, [id]);

  return (
    <HomepageLayout page="Login">
      <Grid
        textAlign="center"
        style={{ height: "50vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            Log-in to your account
          </Header>
          <LoginForm onSubmit={onSubmitHandler} />
        </Grid.Column>
      </Grid>
    </HomepageLayout>
  );
};

export default LoginPage;
