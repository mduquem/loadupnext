export default (props) => (
   <div className='shadow-lg my-3'>
      <label className='label'>{props.label}</label>
      <input
         {...props}
         className={['input placeholder-color-gray', props.className].join(' ')}
         onChange={props.onChangeHandler}
      />
   </div>
);
