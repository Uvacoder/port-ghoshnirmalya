import siteConfig from "configs/site";
import { NextSeo } from "next-seo";
import { AppProps } from "next/app";
import Head from "next/head";

const PortfolioApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={siteConfig.assets.favicon} type="image/png" />
      </Head>

      <NextSeo
        title={`${siteConfig.details.title} - ${siteConfig.details.tagLine}`}
        description={siteConfig.details.description}
        twitter={{
          handle: siteConfig.socialLinks.twitter,
          site: siteConfig.socialLinks.twitter,
          cardType: "summary_large_image",
        }}
        openGraph={{
          url: siteConfig.details.url,
          title: siteConfig.details.title,
          description: siteConfig.details.description,
          images: [
            {
              url: `${siteConfig.details.url}${siteConfig.assets.avatar}`,
              width: 800,
              height: 600,
              alt: siteConfig.details.title,
            },
          ],
          site_name: siteConfig.details.title,
          type: "website",
          locale: "en_IE",
        }}
      />

      <Component {...pageProps} />
    </>
  );
};

export default PortfolioApp;
