import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Atef Mannai. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Link 
              href="https://github.com/mannaiatef" 
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub className="text-xl" />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/atef-mannai-4b70a119a/" 
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin className="text-xl" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 