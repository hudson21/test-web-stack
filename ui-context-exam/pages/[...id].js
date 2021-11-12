import Head from 'next/head';

import UsersPage from '../components/UsersPage';

export default function Home() {
  return (
    <div>
      <Head>
        <title>UI Context Exam Carlos Hudson</title>
        <meta
          name="description"
          content="This exam is part of the interview process of the Superformula team for a senior frontend position"
        />

        <link
          rel="preload"
          href="/fonts/Source_Sans_Pro/SourceSansPro-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Source_Sans_Pro/SourceSansPro-Light.ttf"
          as="font"
          crossOrigin=""
        />

        <link
          rel="preload"
          href="/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf"
          as="font"
          crossOrigin=""
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UsersPage />
    </div>
  );
}
