import Head from 'next/head';
import Link from 'next/link';
import TextInput from '../components/textInput';
import MainButton from '../components/mainButton';
import Loader from '../components/UI/loader';

class Waitlist extends React.Component {
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
   render() {
      let content = (
         <form>
            <TextInput
               type='email'
               placeholder='E-Mail Address'
               label='Subscribe for updates on Loadup Today 💵'
               onChangeHandler={(event) => this.inputChanged(event)}
               value={this.state.email}
            />

            <MainButton clicked={this.buttonClicked}>Subscribe</MainButton>
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
               <h1>This email has already been used. Please try again with another email</h1>;
               <MainButton clicked={this.refreshPage}>Go back</MainButton>
            </div>
         );
      }

      return (
         <div className='p-4 shadow-xl w-full  md:max-w-md mx-auto'>
            <Head>
               <title>Susbcribe to loadup!</title>
            </Head>
            {content}
            <div className='mx-auto'>
               <small>
                  {' '}
                  Go{' '}
                  <Link href='/'>
                     <a>Home</a>
                  </Link>
               </small>
            </div>
         </div>
      );
   }
}

export default Waitlist;
