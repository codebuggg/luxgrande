import React from "react";
import Head from "next/head";
import { withRouter, Router } from "next/router";
import { siteTitle } from "../constants";

export interface SeoProps {
  title: string;
  description?: string;
  image?: string;
}

export const Seo = withRouter(
  ({
    title,
    // description,
    // image = "/favicon.ico",
    router,
  }: SeoProps & { router: Router }) => (
    <Head>
      {/* DEFAULT */}

      {title != undefined && (
        <title key="title">
          {title} | {siteTitle}
        </title>
      )}
      <meta
        name="description"
        key="description"
        content={`Welcome to ${siteTitle} - The Beauty Luzury You Deserve`}
      />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />

      {/* OPEN GRAPH */}
      <meta property="og:type" key="og:type" content="website" />
      <meta
        property="og:url"
        key="og:url"
        content={`https://luxgrande.com${router.pathname}`}
      />
      {title != undefined && (
        <meta property="og:title" content={title} key="og:title" />
      )}
      <meta
        property="og:description"
        key="og:description"
        content={`Welcome to Lux Grande - The Beauty Luzury You Deserve`}
      />
      <meta
        property="og:image"
        key="og:image"
        content={`https://${siteTitle.toLowerCase()}.netlify.app/favicon.ico`}
      />

      {/* TWITTER */}
      {/* <meta
        name="twitter:card"
        key="twitter:card"
        content="summary_large_image"
      />
      <meta name="twitter:site" key="twitter:site" content="@mogbami.com/>
      <meta name="twitter:creator" key="twitter:creator" content="@mogbami.com/> */}
      {/* {title != undefined && (
        <meta name="twitter:title" key="twitter:title" content={title} />
      )}
      {description != undefined && (
        <meta
          name="twitter:description"
          key="twitter:description"
          content={description}
        />
      )}
      {image != undefined && (
        <meta
          name="twitter:image"
          key="twitter:image"
          content={`https://mogbami.com${image}`}
        />
      )} */}
    </Head>
  )
);
