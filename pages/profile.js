class Profile extends React.Component {
   render() {
      return (
         <div>
            <div className='container'>
               <div className='flex-column p-4 shadow-xl w-full  md:max-w-md mx-auto'>
                  <img src='/public/img/user-placeholder.jpeg' className='rounded-bl-full' />
                  <h2>Miguel Duque </h2>
               </div>
            </div>
         </div>
      );
   }
}

export default Profile;
