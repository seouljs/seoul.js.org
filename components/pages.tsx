import Head from 'next/head';

export default ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <style jsx>{`
        .container {
          overflow-x: hidden;
          background-image: url(/static/images/logo-ye-30.png);
          background-size: 50%, 50%;
          background-repeat: no-repeat, no-repeat;
          background-position: right -100px top -200px, left -450px center;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          height: 100vh;
          box-sizing: border-box;
          background-color: #1b1e35;
          overflow-x: hidden;
          color: #fff;
        }

        body {
          position: relative;
          min-height: 100%;
          margin: 0;
          line-height: 1.65;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
            'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
          font-size: 16px;
          font-weight: 400;
          min-width: 320px;
          direction: ltr;
          font-feature-settings: 'kern';
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          scroll-behavior: smooth;
        }
      `}</style>
      <div className="container">{children}</div>
    </>
  );
};
