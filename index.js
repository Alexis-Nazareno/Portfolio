import Head from "next/head";

const Index = () => {
  return (
    <div id="main-container">
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <Head>
        <title>Pragmanila Solutions Inc.</title>
        <link
          rel="shortcut icon"
          href="/static/img/menu/pragmanila_favicon.png"
        />
        {/* for tailwind css */}
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css"
        /> */}

        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/tw-elements.min.css"
        /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta property="og:title" content="Pragmanila Solutions Inc." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pragmanila.com" />
        {/* <meta property="fb:app_id" content={process.env.NEXT_PUBLIC_APP_ID} /> */}
        {/* For Image */}
        {/* <meta property="og:image" content={ogImage} /> */}
        {/* <meta property="og:image:secure_url" content={ogImage} /> */}
        <meta property="og:image:type" content="image/jpeg" />
        <meta
          property="og:image:alt"
          content="Pragmanila About Company Image"
        />
        <meta
          property="og:description"
          content="Pragmatic Innovations, Straightforward Solutions to Propel Your Business"
        />
      </Head>

      <div> hello </div>
    </div>
  );
};

export default Index;
