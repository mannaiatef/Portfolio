import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Atef Mannai</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
            Software Engineering Student
          </h2>
          <p className="text-lg mb-8 text-gray-600 dark:text-gray-400 max-w-lg">
            Passionate software engineering student with strong technical skills in both frontend and backend development.
          </p>
          <div className="flex space-x-4">
            <Link 
              href="/Atef Mannai3 - CV.pdf" 
              target="_blank"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Download CV
            </Link>
            <Link 
              href="#contact" 
              className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400">
            <Image
              src="/images/1744924598943.jpg"
              alt="Atef Mannai"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 