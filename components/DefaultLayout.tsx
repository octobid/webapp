import Head from "next/head";

type DefaultLayoutProps = {
  page: string;
};

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children, page }) => (
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

    {children}
  </div>
);

export default DefaultLayout;
