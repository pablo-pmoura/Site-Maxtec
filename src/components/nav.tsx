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
            className={`focus:outline-none ${isScrolled ? 'text-gray-800' : 'text-white'}`}
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
          <ul className={`flex gap-6 font-medium uppercase ${isScrolled ? 'text-maxtec font-med' : 'text-white'}`}>
            <a href=""><li>Home</li></a>
            <a href=""><li>Serviços</li></a>
            <a href=""><li>Projetos</li></a>
            <a href=""><li>Clientes</li></a>
          </ul>
        </div>

        <div className="hidden md:flex md:items-center md:gap-4 md:w-auto">
          <button className={`flex gap-5 font-normal border-2 rounded-2xl py-0.5 px-3 ${isScrolled ? 'text-maxtec border-maxtec' : 'text-white border-white'}`}>Contato</button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-white fixed top-0 right-0 h-screen w-64 shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-maxtec focus:outline-none"
          >
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
          </button>
        </div>
        <ul className="flex flex-col items-center py-4 bg-inherit">
          <a href=""><li className="py-2 text-maxtec font-bold">Home</li></a>
          <a href=""><li className="py-2 text-maxtec">Serviços</li></a>
          <a href=""><li className="py-2 text-maxtec">Projetos</li></a>
          <a href=""><li className="py-2 text-maxtec">Clientes</li></a>
        </ul>
        <div className="text-center py-2 bg-inherit">
          <h1 className="text-maxtec">contato</h1>
        </div>
      </div>
    </nav>
  );
}