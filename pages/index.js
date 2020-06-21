import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
   return (
      <div className='container'>
         <Head>
            <title>Load Up Today</title>
            <link rel='icon' href='/favicon.ico' />
         </Head>
         <h1>
            Please go to{' '}
            <Link href='/waitlist'>
               <a>Waitlist</a>
            </Link>
            for regular updates
         </h1>
      </div>
   );
}
