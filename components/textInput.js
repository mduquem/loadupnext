export default (props) => (
   <div className='shadow-xl my-3'>
      <label className='label'>{props.label}</label>
      <input
         {...props}
         className='input placeholder-color-gray'
         type={props.type}
         placeholder={props.placeholder}
         onChange={props.onChangeHandler}
         value={props.value}
         name={props.name}
      />
   </div>
);
