import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="bg-gray-900 p-4">
      <div className="text-center">
        <Link legacyBehavior href="/">
          <a>
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg" alt="Marvel Logo" className="mx-auto w-24" />
          </a>
        </Link>
      </div>
      <div className="container mx-auto flex items-center justify-between">
        <ul className="flex space-x-4">
          <li>
            <Link legacyBehavior href="/personagens">
              <a className="text-white">Personagens</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/login">
              <a className="text-white">Login</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
