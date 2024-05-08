"use client";

import Script from "next/script";
import React from "react";

const GoogleTag = ({ ga_id }) => {
  return (
    <>
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
          function tag(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          }
          tag(window,document,'script','dataLayer','${ga_id}');
      `,
        }}
      ></Script>
    </>
  );
};

export default GoogleTag;
