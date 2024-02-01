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
      </body>
    </Html>
  );
}
