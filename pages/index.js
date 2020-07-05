import Head from 'next/head';
import Link from 'next/link';

import TwitterIcon from '../components/twitterIcon';
import Loader from '../components/UI/loader';

export default function Home({ user }) {
   console.log('THIS IS THE USER I GET', user);
   return (
      <div className='content-center text-center'>
         <Head>
            <meta property='og:type' content='app' />
            <meta property='og:title' content='Load Up' />
            <meta property='og:description' content='Social Trading App' />
            {/* <meta property='og:image' content='LINK A LA IMAGEN DESTACADA' /> */}
            <meta property='og:url' content='https://loadup.today' />
            <meta property='og:site_name' content='Load Up Today' />
            <title>Load Up Today</title>
            <link rel='icon' href='/favicon.ico' />
         </Head>

         <div className='max-w-full md:max-w-md shadow-2xl rounded-b-lg mx-auto border-solid border-4 border-background-gray text-justify mb-20 p-5'>
            <p>
               Loadup is a <strong>social-paper-trading app 📈</strong>
               <strong>Beta version (available by Fall) will include these features: </strong>
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

         <div className='max-w-md mx-auto mt-20'>
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

Home.getInitialProps = async () => {
   // const response = await fetch('http://localhost:8081/auth/register', {
   //    method: 'POST',
   //    body: {
   //       username: 'mduquem',
   //       email: 'mduquem1@gmail.com',
   //       password: 'password',
   //    },
   // });
   // const user = await response.json();
   // return {
   //    user,
   // };
   return {};
};
