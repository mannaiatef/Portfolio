import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="font-bold text-xl">Atef Mannai</div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Experience
              </Link>
            </li>
            <li>
              <Link href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 