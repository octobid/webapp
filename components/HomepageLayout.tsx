import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import {
  Container,
  Button,
  Icon,
  Responsive,
  Visibility,
  Segment,
  Menu,
  Sidebar,
} from "semantic-ui-react";
import {useScreen} from "../context/ScreenContext";

type Pages = "Home" | "About";

type HomepageLayoutProps = {
  page: Pages;
};

type ResponsiveContainerProps = {
  page: Pages;
};

type DesktopContainerProps = {
  page: Pages;
};

type MobileContainerProps = {
  page: Pages;
};

const DesktopContainer: React.FC<DesktopContainerProps> = ({
  children,
  page,
}) => {
  const [fixed, setFixed] = useState<boolean>(false);
  const { width } = useScreen();

  const hideFixedMenu = () => setFixed(false);
  const showFixedMenu = () => setFixed(true);

  return (
    <Responsive getWidth={() => width} minWidth={Responsive.onlyTablet.minWidth}>
      <Visibility
        once={false}
        onBottomPassed={showFixedMenu}
        onBottomPassedReverse={hideFixedMenu}
      >
        <Segment
          inverted
          textAlign="center"
          style={{ padding: "1em 0em" }}
          vertical
        >
          <Menu
            fixed={fixed ? "top" : undefined}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
          >
            <Container>
              <Link href="/">
                <Menu.Item as="a" active={page === "Home"}>
                  Home
                </Menu.Item>
              </Link>
              <Link href="/about">
                <Menu.Item as="a" active={page === "About"}>
                  About
                </Menu.Item>
              </Link>
              <Menu.Item position="right">
                <Button as="a" inverted={!fixed}>
                  Log in
                </Button>
                <Button
                  as="a"
                  inverted={!fixed}
                  primary={fixed}
                  style={{ marginLeft: "0.5em" }}
                >
                  Sign Up
                </Button>
              </Menu.Item>
            </Container>
          </Menu>
        </Segment>
      </Visibility>

      {children}
    </Responsive>
  );
};

const MobileContainer: React.FC<MobileContainerProps> = ({
  children,
  page,
}) => {
  const [sidebarOpened, setSidebarOpened] = useState<boolean>(false);
  const { width } = useScreen();

  const handleSidebarHide = () => setSidebarOpened(false);
  const handleToggle = () => setSidebarOpened(true);

  return (
    <Responsive
      as={Sidebar.Pushable}
      getWidth={() => width}
      maxWidth={Responsive.onlyMobile.maxWidth}
    >
      <Sidebar
        as={Menu}
        animation="push"
        inverted
        onHide={handleSidebarHide}
        vertical
        visible={sidebarOpened}
      >
        <Link href="/">
          <Menu.Item as="a" active={page === "Home"}>
            Home
          </Menu.Item>
        </Link>
        <Link href="/about">
          <Menu.Item as="a" active={page === "About"}>
            About
          </Menu.Item>
        </Link>
        <Menu.Item as="a">Log in</Menu.Item>
        <Menu.Item as="a">Sign Up</Menu.Item>
      </Sidebar>

      <Sidebar.Pusher dimmed={sidebarOpened}>
        <Segment
          inverted
          textAlign="center"
          style={{ padding: "1em 0em" }}
          vertical
        >
          <Container>
            <Menu inverted pointing secondary size="large">
              <Menu.Item onClick={handleToggle}>
                <Icon name="sidebar" />
              </Menu.Item>
              <Menu.Item position="right">
                <Button as="a" inverted>
                  Log in
                </Button>
                <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                  Sign Up
                </Button>
              </Menu.Item>
            </Menu>
          </Container>
        </Segment>

        {children}
      </Sidebar.Pusher>
    </Responsive>
  );
};

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  page,
}) => {
  return (
    <div>
      <MobileContainer page={page}>{children}</MobileContainer>
      <DesktopContainer page={page}>{children}</DesktopContainer>
    </div>
  );
};

const HomepageLayout: React.FC<HomepageLayoutProps> = ({ children, page }) => {
  return (
    <div>
      <Head>
        <title>OctoBid | {page}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
      </Head>

      <ResponsiveContainer page={page}>{children}</ResponsiveContainer>
    </div>
  );
};

export default HomepageLayout;
