import React, { useState } from "react";
import { Form, Segment, Button } from "semantic-ui-react";

type Props = {
  onSubmit: (username: string, password: string) => void;
};

export const LoginForm = ({ onSubmit }: Props) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const loginButtonOnClickHandler = () => {
    onSubmit(username, password);
  };

  return (
    <Form size="large">
      <Segment stacked>
        <Form.Input
          fluid
          icon="user"
          iconPosition="left"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Form.Input
          fluid
          icon="lock"
          iconPosition="left"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          color="teal"
          fluid
          size="large"
          onClick={loginButtonOnClickHandler}
        >
          Login
        </Button>
      </Segment>
    </Form>
  );
};
