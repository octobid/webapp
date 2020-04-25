import React, { useContext, createContext, useState, useEffect } from "react";
import { Responsive } from "semantic-ui-react";

interface ScreenInterface {
  isMobile: boolean;
  width: number
}

const ScreenContext = createContext<ScreenInterface>({
  isMobile: false,
  width: Responsive.onlyTablet.minWidth as number
});

const ScreenProvider: React.FC = (props) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(
    Responsive.onlyTablet.minWidth as number
  );

  useEffect(() => {
    const isSSR = typeof window === "undefined";
    setWidth(
      isSSR ? (Responsive.onlyTablet.minWidth as number) : window.innerWidth
    );
  }, []);

  useEffect(() => {
    setIsMobile(width <= (Responsive.onlyMobile.maxWidth as number));
  }, [width]);

  const contextValue = {
    isMobile,
    width,
  };

  return <ScreenContext.Provider value={contextValue} {...props} />;
};

const useScreen = () => useContext(ScreenContext);
export { ScreenProvider, useScreen };
