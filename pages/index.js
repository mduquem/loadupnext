import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
   return (
      <div className='container'>
         <Head>
            <title>Load Up Today</title>
            <link rel='icon' href='/favicon.ico' />
         </Head>

         <div className='max-w-md shadow-lg mx-auto'>
            <h1>
               Please go to
               <Link href='/waitlist'>
                  <a className='underline text-gren-600'> Waitlist </a>
               </Link>
               for regular updates 💸
            </h1>
         </div>
      </div>
   );
}
