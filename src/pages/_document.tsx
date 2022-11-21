import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

import { theme } from '../styles/Theme/theme';

function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#fff" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <link rel="icon" type="image/png" href="/images/sleepie-favicon.png" />
        <script async type="text/javascript" src="https://cdn.weglot.com/weglot.min.js"></script>
        <script async type="text/javascript" src="/static/scripts.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
