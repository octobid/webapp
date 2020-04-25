import HomepageLayout from "../components/HomepageLayout";
import { Segment, Container, Header, Button, Icon } from "semantic-ui-react";
import { useScreen } from "../context/ScreenContext";

const IndexPage = () => {
  const { isMobile } = useScreen();
  return (
    <HomepageLayout page="Home">
      <Segment
        inverted
        textAlign="center"
        style={{ padding: "5em 0em" }}
        vertical
      >
        <Container text>
          <Header
            as="h1"
            content="OctoBid"
            inverted
            style={{
              fontSize: isMobile ? "2em" : "4em",
              fontWeight: "normal",
              marginBottom: 0,
            }}
          />
          <Header
            as="h2"
            content="Building businesses together"
            inverted
            style={{
              fontSize: isMobile ? "1.5em" : "1.7em",
              fontWeight: "normal",
              marginTop: isMobile ? "0.5em" : "1.5em",
            }}
          />
          <Button primary size="huge">
            Get Started
            <Icon name="arrow right" />
          </Button>
        </Container>
      </Segment>
    </HomepageLayout>
  );
};

export default IndexPage;
