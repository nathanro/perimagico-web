import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Atracciones from './pages/Atracciones';
import Precios from './pages/Precios';
import Eventos from './pages/Eventos';
import Restaurante from './pages/Restaurante';
import Contacto from './pages/Contacto';
import Reservaciones from './pages/Reservaciones';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/atracciones" element={<Atracciones />} />
                <Route path="/precios" element={<Precios />} />
                <Route path="/eventos" element={<Eventos />} />
                <Route path="/restaurante" element={<Restaurante />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/reservaciones" element={<Reservaciones />} />
            </Routes>
        </Router>
    );
}

export default App;
