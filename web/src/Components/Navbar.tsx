import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Link para a página inicial */}
        <Link legacyBehavior href="/">
          <a>
            <div className="flex items-center">
              {/* Logotipo da Marvel */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg"
                alt="Marvel Logo"
                className="w-24 mb-2 sm:w-32 sm:mb-0" // Tamanho maior para telas maiores
              />
            </div>
          </a>
        </Link>
        {/* Lista de links de navegação */}
        <ul className="hidden sm:flex space-x-4"> {/* Mostrar os links em telas maiores */}
          <li>
            {/* Link para a seção de heróis */}
            <Link legacyBehavior href="#herois">
              <a className="text-white">Search hero</a>
            </Link>
          </li>
          <li>
            {/* Link para a seção de revistas */}
            <Link legacyBehavior href="#revista">
              <a className="text-white">New magazine</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
