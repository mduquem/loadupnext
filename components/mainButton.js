export default (props) => (
   <button onClick={props.clicked} className='btn-main-green'>
      {props.children}
   </button>
);
