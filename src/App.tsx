import Home from './pages/home/Home';
import Sobre from './pages/sobre/Sobre';
import Contato from './pages/contato/Contato';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-50 text-slate-800 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;