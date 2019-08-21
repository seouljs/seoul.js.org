import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class Site extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
          <meta name="theme-color" content="#000" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
