/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from "next/document";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <Script
          src="https://cdn.jsdelivr.net/npm/tsparticles@1.9.2/dist/tsparticles.min.js"
          integrity="sha256-5kED68Spy7K2CEbfu4CjV92DmZR5ZQFUoIR5qmPzZWg="
          crossOrigin="anonymous"
        ></Script>
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
          <script>
            <script
              dangerouslySetInnerHTML={{
                __html: `   (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:3848934,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
              }}
            ></script>
          </script>
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <GoogleTagManager gtmId="G-7NNJFP05M4" />{" "}
        <GoogleAnalytics gaId="G-7NNJFP05M4" />
        <script src="../sample.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/tsparticles@1.18.3/dist/tsparticles.min.js"></script>
      </body>
    </Html>
  );
}
