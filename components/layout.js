import Footer from '../components/footer';
import Navbar from '../components/navigation/navbar';

const Layout = (props) => (
   <>
      <Navbar />
      {props.children}
      <Footer />
   </>
);
export default Layout;
