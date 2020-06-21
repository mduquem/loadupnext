import NavigationItem from './navigationItem/navigationItem';

const NavigationItems = () => (
   <ul className='flex'>
      <NavigationItem>Browse</NavigationItem>
      <NavigationItem>Trade</NavigationItem>
      <NavigationItem>Profile</NavigationItem>
      <NavigationItem>Authenticate</NavigationItem>
   </ul>
);

export default NavigationItems;
