import TextInput from '../components/textInput';
import MainButton from '../components/mainButton';

class Waitlist extends React.Component {
   state = {
      email: '',
      loading: false,
      success: false,
      error: '',
   };
   inputChanged(event) {
      this.setState({
         ...this.state,
         email: event.target.value,
      });
   }
   buttonClicked = async (event) => {
      event.preventDefault();

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
            alert('You are subscribed!');
            this.setState({
               ...this.state,
               success: true,
            });
         } else {
            alert('Sorry, something went wrong.');
         }
      } catch (err) {
         alert(err);
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
      return <div className='p-4 shadow-xl w-full  md:max-w-md mx-auto'>{content}</div>;
   }
}

export default Waitlist;
