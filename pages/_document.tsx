import { Html, Head, Main, NextScript } from "next/document";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

export default function Document() {
  return (
    <Html>
      <Head></Head>
      <body>
        <Main />
        <NextScript />
        <GoogleTagManager gtmId="G-7NNJFP05M4" />{" "}
        <GoogleAnalytics gaId="G-7NNJFP05M4" />
      </body>
    </Html>
  );
}
