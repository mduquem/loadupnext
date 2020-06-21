export default (props) => (
   <div className='my-3'>
      <label className='label '>{props.label}</label>
      <select value={props.value} className='input' onChange={props.changeHandler}>
         {props.options.map((option) => {
            return (
               <option key={option.value} value={option.value}>
                  {option.text}
               </option>
            );
         })}
      </select>
   </div>
);
