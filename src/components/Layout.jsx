import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';

const Layout = ({ children }) => {
    return (
        <div className="pm-site">
            <Navbar />
            <main>{children}</main>
            <Footer />
            <WhatsAppFloat />
        </div>
    );
};

export default Layout;
