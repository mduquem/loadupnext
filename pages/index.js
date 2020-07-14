import Head from 'next/head';
import TextInput from '../components/textInput';
import MainButton from '../components/mainButton';
import Loader from '../components/UI/loader';
import Link from 'next/link';

import triangles from '../public/svg/triangles.svg';
import emailSvg from '../public/svg/email.svg';
import iphone from '../public/img/iphone.png';
import twitter from '../public/img/twitter.png';

class Home extends React.Component {
   state = {
      email: '',
      loading: false,
      success: false,
      error: false,
   };
   inputChanged = (event) => {
      this.setState({
         ...this.state,
         email: event.target.value,
      });

      console.log('EVENT CAMBIO', this.state);
   };
   refreshPage = () => {
      this.setState({
         ...this.state,
         loading: false,
         success: false,
         error: false,
      });
   };
   buttonClicked = async (event) => {
      event.preventDefault();

      this.setState({
         ...this.state,
         loading: true,
      });

      try {
         const res = await fetch('./api/subscribe', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               emailAddress: this.state.email,
            }),
         });
         if (res.status === 200) {
            this.setState({
               ...this.state,
               loading: false,
               success: true,
            });
         } else {
            this.setState({
               ...this.state,
               loading: false,
               error: true,
            });
         }
      } catch (err) {
         this.setState({
            ...this.state,
            loading: false,
            error: true,
         });
      }
   };
   twitterHandle = () => {
      window.location.hrf = 'https://www.twitter.com/mduquem';
   };

   render() {
      let content = (
         <form className=' input-group '>
            <div className='email-input'>
               <img className='email-icon' src={emailSvg} alt='email icon' />

               <input
                  type='email'
                  className='shadow-md placeholder-color-gray py-3 px-6 mt-3 bg-background-gray rounded-lg text-white input'
                  placeholder='E-Mail Address'
                  onChange={this.inputChanged}
                  value={this.state.email}
               />
            </div>

            <button
               className='sub-btn text-white font-bold py-2 px-4 rounded-lg bg-secondary-blue hover:bg-blue-700 shadow-md '
               onClick={this.buttonClicked}
            >
               Subscribe for updates
            </button>
            <style jsx>{`
               .email-icon {
                  position: absolute;
                  top: 30%;
                  left: 0;
                  margin: 10px;
               }
               .sub-btn {
                  height: 57px;
                  width: 295px;
                  margin-left: 20px;
               }
               .input-group {
                  display: flex;
                  justify-content: start;
                  align-items: flex-end;
                  width: 100%;
               }
               .input {
                  height: 60px;
                  width: 295px;
                  margin-right: 20px;
                  background-color: #2c343a;
                  padding-left: 45px;
               }

               .email-input {
                  position: relative;
                  width: 295px;
               }
            `}</style>
         </form>
      );

      if (this.state.success) {
         content = <p>Thank you! Expect technical and marketing updates soon</p>;
      }

      if (this.state.loading) {
         content = <Loader />;
      }

      if (this.state.error) {
         content = (
            <div>
               <h1>This email has already been used. Please try again with another email</h1>
               <button
                  className='sub-btn text-white font-bold py-2 px-4 rounded-lg bg-main-green hover:bg-green-700 shadow-md'
                  onClick={this.refreshPage}
               >
                  Retry
               </button>
            </div>
         );
      }

      return (
         <div className='max-h-screen container landing'>
            <Head>
               <title>Susbcribe to loadup!</title>
            </Head>
            <div className='landing'>
               <img src={triangles} />
            </div>
            <div>
               <div onClick={this.twitterHandle} style={{ cursor: 'pointer' }}>
                  <img className='twitter' src={twitter} alt='twitter icon' />
               </div>

               <div className='burger-container'>
                  <div className=' form-container shadow-2xl '>
                     <div className='inside-container'>
                        <h1 className='title'>Coming soon...</h1>
                        <ul className='list'>
                           <li>
                              <p className='list-item'>Browse & visualize trending stocks</p>
                           </li>
                           <li>
                              <p className='list-item'>
                                 Trade the most popular stocks, or paper-trade if you want to test
                                 your strategy first
                              </p>
                           </li>
                           <li>
                              <p className='list-item'>Prove who's the boss among your friends</p>
                           </li>
                        </ul>
                        <div className='input-group'>{content}</div>
                     </div>
                  </div>
                  <div className='iphone-container'>
                     <img src={iphone} alt='iphone screenshot with stock data and graphics' />
                  </div>
               </div>
            </div>

            <style jsx>
               {`
                  @font-face {
                     font-family: 'Oswald';
                     src: url('/fonts/Oswald-Bold.ttf');
                  }

                  .landing {
                     position: fixed;
                     top: 0;
                     left: 0;
                     height: 100vh;
                     width: 100vw;
                     z-index: -10;
                     overflow-x: visible;
                  }
                  .burger-container {
                     position: relative;
                     margin: 40px 100px auto 90px;
                  }
                  .form-container {
                     width: 998px;
                     background-color: #1b2127;
                     border-radius: 15px;
                     display: flex;
                     align-items: flex-end;
                     justify-content: space-between;
                     position: absolute;
                     left: -10px;
                  }

                  .inside-container {
                     margin: 85px 150px;

                     display: flex;
                     flex-direction: column;
                     justify-content: space-around;
                  }
                  .iphone-container {
                     position: absolute;
                     right: -10vw;
                     top: -40px;
                  }
                  .title {
                     font-size: 48px;
                     font-weight: 800;
                     font-family: 'Oswald';
                     margin-bottom: 55px;
                  }
                  .list-item {
                     font-size: 16px;
                  }
                  .list {
                     list-style: disc;
                     margin-bottom: 60px;
                     padding: 0 100px;
                  }
                  .twitter {
                     margin-left: 80px;
                     margin-top: 40px;
                  }
               `}
            </style>
         </div>
      );
   }
}

export default Home;
