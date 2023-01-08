import App, { AppContext, AppInitialProps } from "next/app";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import "bootswatch/dist/flatly/bootstrap.min.css";
import Script from "next/script";
import NavBar from "../components/navbar";
// __app.tsx 파일은 전체 컴포넌트에 적용되는 Wrapper 라고 생각하면 쉽다.
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <NavBar></NavBar>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  //userAgent
  const userAgent = (await appContext.ctx.req)
    ? appContext.ctx.req?.headers["user-agent"]
    : navigator.userAgent;

  //Mobile
  const mobile = await userAgent?.indexOf("Mobi");

  //Mobile in pageProps
  appProps.pageProps.isMobile = (await (mobile !== -1)) ? true : false;

  return { ...appProps };
};

export default MyApp;
