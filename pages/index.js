import Head from 'next/head';

export default function Home() {
   return (
      <div className='container'>
         <Head>
            <title>Load Up Today</title>
            <link rel='icon' href='/favicon.ico' />
         </Head>
         <h1>Welcome back</h1>
      </div>
   );
}
