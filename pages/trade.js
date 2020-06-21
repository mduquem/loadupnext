import TextInput from '../components/textInput';
import SelectInput from '../components/selectInput';
import MainButton from '../components/mainButton';

class Trade extends React.Component {
   state = {
      formData: {
         symbol: '',
         symbolIsValid: false,
         marketType: '',

         shares: '',
         sharesIsValid: false,
         formIsValid: false,
         error: '',
      },
      selectOptions: [
         { value: 'market', text: 'Market Price' },
         { value: 'endofday', text: 'End of the Day' },
         { value: 'fornexthour', text: 'For the next hour' },
      ],
   };

   changeHandler = (event) => {
      this.setState({
         ...this.state,
         formData: {
            ...this.state.formData,
            [event.target.name]: event.target.value,
         },
      });
   };

   buttonClicked = (event) => {
      event.preventDefault();
      console.log('button clicked', this.state.formData);
   };

   selectChangeHandler = (event) => {
      this.setState({
         ...this.state,
         formData: {
            ...this.state.formData,
            marketType: event.target.value,
         },
      });
   };

   render() {
      return (
         <div className='p-4 shadow-xl w-full  md:max-w-md mx-auto'>
            <form>
               <TextInput
                  onChangeHandler={this.changeHandler}
                  value={this.state.formData.symbol}
                  type='text'
                  placeholder='Enter Stock Here'
                  label='Symbol'
                  name='symbol'
                  minLength='3'
                  maxLength='6'
               />
               <SelectInput
                  label='Market Type'
                  options={this.state.selectOptions}
                  defaultValue={this.state.formData.marketType}
                  onChangeHandler={this.selectChangeHandler}
               />
               <TextInput
                  onChangeHandler={this.changeHandler}
                  value={this.state.formData.shares}
                  type='text'
                  placeholder='100'
                  label='Shares'
                  name='shares'
                  minLength='1'
               />
               <MainButton clicked={this.buttonClicked}>Buy</MainButton>
            </form>
         </div>
      );
   }
}

export default Trade;
