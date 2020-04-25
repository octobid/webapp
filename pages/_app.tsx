import React from "react";
import { AppProviders } from "../context";

export default function CustomApp({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  return (
    <AppProviders>
      <Component {...pageProps} />
    </AppProviders>
  );
}
