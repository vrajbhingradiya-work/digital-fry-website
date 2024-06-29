import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/layout/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/layout/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/layout/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/layout/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/layout/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="msapplication-config"
          content="/layout/favicon/browserconfig.xml"
        />
      </head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
