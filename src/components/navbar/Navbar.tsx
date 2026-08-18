import { Link } from "react-router-dom";

 import { useState } from "react";  
 

function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);  

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/75 backdrop-blur-md border-b border-slate-200">
      <nav className="flex items-center justify-between px-4 md:px-8 py-3 max-w-7xl mx-auto">
        
        <img
          className="h-9 object-contain"
          src="https://ik.imagekit.io/up25hc32q3/pratica%2007/logo_startup.svg"
          alt="Imagem Logo"
        />
          
        <div className="hidden md:flex items-center gap-2">
          <Link to="/" className="px-3 py-1 text-slate-600 hover:text-blue-600 transition-colors">Home</Link>
          <Link to="/sobre" className="px-3 py-1 text-slate-600 hover:text-blue-600 transition-colors">Sobre nós</Link>
          <Link to="/contato" className="px-3 py-1 text-slate-600 hover:text-blue-600 transition-colors">Contato</Link>
        </div>
          
        <button className="md:hidden text-2xl" onClick={() => setMenuAberto(!menuAberto)}>
          {menuAberto ? "✕" : "☰"}
        </button>
      
      </nav>

      {menuAberto && (
        <div className="md:hidden flex flex-col items-center gap-4 bg-white/95 border-t border-slate-200 py-4">
          <Link to="/" onClick={() => setMenuAberto(false)}>Home</Link>
          <Link to="/sobre" onClick={() => setMenuAberto(false)}>Sobre nós</Link>
          <Link to="/contato" onClick={() => setMenuAberto(false)}>Contato</Link>
        </div>
      )}
    </header>
  );
}

export default Navbar    