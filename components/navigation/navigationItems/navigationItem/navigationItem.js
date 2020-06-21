import Link from 'next/link';

const NavigationItem = (props) => (
   <li>
      <Link href={props.children.toLowerCase()}>
         <a>{props.children}</a>
      </Link>
   </li>
);

export default NavigationItem;
