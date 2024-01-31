import { Html, Head, Main, NextScript } from "next/document";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

export default function Document() {
  return (
    <Html>
      <Head>
        <script>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-7PF8516CM0"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-7PF8516CM0');`,
            }}
          ></script>
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <GoogleTagManager gtmId="G-7NNJFP05M4" />{" "}
        <GoogleAnalytics gaId="G-7NNJFP05M4" />
      </body>
    </Html>
  );
}
