import Link from 'next/link';
import NavigationItems from './navigationItems/navigationItems';

const Navbar = (props) => (
   <nav className='flex justify-between bg-background-black'>
      {/* <div className='logo'>
         <Link href='/'>
            <a>Load Up</a>
         </Link>
      </div>
      <NavigationItems /> */}
   </nav>
);
export default Navbar;
