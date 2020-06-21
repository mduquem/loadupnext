import Link from 'next/link';

import TextInput from '../components/textInput';
import MainButton from '../components/MainButton';

class Authenticate extends React.Component {
   state = {
      form: {
         email: '',
         name: '',
         phone: '',
         password: '',
         privacyPolicy: false,
      },
      isSignup: true,
   };
   onChangeHandler = (event) => {
      this.setState({
         ...this.state,
         form: {
            ...this.state.form,
            [event.target.name]: event.target.value,
         },
      });
      console.log(this.state.form);
   };

   signUserIn = (event) => {
      event.preventDefault();
   };

   signUserUp = (event) => {
      event.preventDefault();
   };
   render() {
      let form = (
         <form>
            <TextInput
               type='email'
               name='email'
               placeholder='E-Mail Address'
               onChangeHandler={this.onChangeHandler}
            />
            <TextInput
               name='password'
               type='text'
               placeholder='Password'
               onChangeHandler={this.onChangeHandler}
            />
            <MainButton clicked={this.signUserIn}>Sign in</MainButton>
         </form>
      );

      let switchScreen = (
         <div>
            <h4>Don't have an account?</h4>
            <button
               onClick={() => {
                  this.setState({
                     ...this.state,
                     isSignup: true,
                  });
               }}
            >
               Sign up
            </button>
         </div>
      );

      if (this.state.isSignup) {
         switchScreen = (
            <div>
               <h4>Already have an account an account?</h4>
               <button
                  onClick={() => {
                     this.setState({
                        ...this.state,
                        isSignup: false,
                     });
                  }}
               >
                  Sign in
               </button>
            </div>
         );

         form = (
            <form>
               <div className='md:flex md:flex-wrap md:justify-between '>
                  <TextInput
                     type='email'
                     placeholder='E-Mail Address'
                     name='email'
                     onChangeHandler={this.onChangeHandler}
                  />
                  <TextInput
                     type='text'
                     placeholder='Name'
                     name='name'
                     onChangeHandler={this.onChangeHandler}
                  />
                  <TextInput
                     type='phone'
                     placeholder='Phone'
                     name='phone'
                     onChangeHandler={this.onChangeHandler}
                  />
                  <TextInput
                     type='password'
                     placeholder='Password'
                     name='password'
                     onChangeHandler={this.onChangeHandler}
                  />
               </div>
               <div>
                  <input
                     type='checkbox'
                     value={this.state.form.privacyPolicy}
                     onChange={() => {
                        this.setState({
                           ...this.state,
                           form: {
                              ...this.state.form,
                              privacyPolicy: !this.state.form.privacyPolicy,
                           },
                        });

                        console.log('STATE', this.state);
                     }}
                     name='privacyPolicy'
                  />
                  <label className='text-white'>
                     {'   '}I accept the{' '}
                     <Link href='/privacy'>
                        <a>privacy policy</a>
                     </Link>
                  </label>
               </div>

               <MainButton clicked={this.signUserUp}>Sign up</MainButton>
            </form>
         );
      }
      return (
         <div className='md:max-w-lg mx-auto max-w-screen-md '>
            <h1 className='text-white'> {this.state.isSignup ? 'Sign up' : 'Sign in'}</h1>
            <h2>Fill in your credentials</h2>
            {/* {form}

            {switchScreen} */}
            <h4>Hello</h4>

            <style jsx>
               {`
                  h1 {
                     font-size: 30px;
                  }

                  h2 {
                     color: #717b8a;
                     font-size: 16px;
                  }
               `}
            </style>
         </div>
      );
   }
}
export default Authenticate;
