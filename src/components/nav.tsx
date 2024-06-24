import { useState, useEffect } from "react";
import '/src/styles/global.css'

export default function Nav({ imgSource }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${isScrolled ? 'bg-white' : 'bg-transparent backdrop-blur-sm'}`}>
      <div className="relative mx-6 flex justify-between items-center h-20">
        <div className="w-16">
          <img src={imgSource} alt="Logo" className="w-full" />
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="hidden md:flex md:items-center md:gap-4 md:w-auto">
          <ul className={`flex gap-6 font-normal ${ isScrolled ? '' : 'text-white'}`}>
            <li>Home</li>
            <li>Serviços</li>
            <li>Projetos</li>
            <li>Clientes</li>
          </ul>
        </div>

        <div className={`flex gap-5 font-normal ${ isScrolled ? '' : 'text-white'}`}>
          <h1>contato</h1>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <ul className="flex flex-col items-center py-4">
            <li className="py-2">Home</li>
            <li className="py-2">Serviços</li>
            <li className="py-2">Projetos</li>
            <li className="py-2">Clientes</li>
          </ul>
          <div className="text-center py-2">
            <h1>contato</h1>
          </div>
        </div>
      )}
    </nav>
  );
}