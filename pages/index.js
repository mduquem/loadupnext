import Head from 'next/head';
import Link from 'next/link';

import TwitterIcon from '../components/twitterIcon';

export default function Home() {
   return (
      <div className='content-center text-center'>
         <Head>
            <title>Load Up Today</title>
            <link rel='icon' href='/favicon.ico' />
         </Head>

         <div className='max-w-full md:max-w-md shadow-2xl rounded-b-lg mx-auto border-solid border-4 border-background-gray text-justify mb-20 p-5'>
            <p>
               Loadup is a <strong>social trading app 📈</strong> available for paper trading first.
               This project aims to build the necessary infrastructure to eventually transition to
               real-world trading. <strong>Beta version will include these features: </strong>
            </p>
            <br />
            <ul className='list-inside'>
               <li>💵 Browse stock data & visualizations</li>
               <li>💵 Trade stocks with your friends</li>
               <li>💵 Prove who's boss by engaging in weekly challenges + MUCH MORE</li>
            </ul>
            <br />
            <div className='flex justify-around'>
               <p>DM me if you're excited or you'd like to help </p>
               <a href='https://twitter.com/miguelduque'>
                  <TwitterIcon />
               </a>
            </div>
         </div>

         <div className='max-w-md shadow-lg mx-auto mt-20'>
            <h1>
               Please go to{' '}
               <Link href='/waitlist'>
                  <a className='underline text-green-500'>Waitlist</a>
               </Link>{' '}
               for regular updates 💸
            </h1>
         </div>
      </div>
   );
}
