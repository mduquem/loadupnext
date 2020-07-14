export default (props) => (
   <button
      onClick={props.clicked}
      className={[
         props.backgroundColor === 'secondary'
            ? ' bg-secondary-blue hover:bg-blue-700 '
            : 'bg-main-green hover:bg-green-700 ',
         'text-white font-bold py-2 px-4 rounded ',
      ]}
   >
      {props.children}
   </button>
);
