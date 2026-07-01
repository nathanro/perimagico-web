import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import { CartProvider } from '../context/CartContext';

const Layout = ({ children }) => {
    return (
        <CartProvider>
            <div className="min-h-screen bg-bg">
                <Navbar />
                <main>{children}</main>
                <Footer />
                <CartDrawer />
            </div>
        </CartProvider>
    );
};

export default Layout;
