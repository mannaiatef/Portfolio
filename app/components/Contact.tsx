import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <FaPhone className="text-blue-600 dark:text-blue-400 text-xl" />
                  <span className="text-gray-700 dark:text-gray-300">+216 55 739 162</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-blue-600 dark:text-blue-400 text-xl" />
                  <span className="text-gray-700 dark:text-gray-300">atefmannai22@gmail.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400 text-xl" />
                  <span className="text-gray-700 dark:text-gray-300">Cité el fawez, Mourouj 5, Ben Arous</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaGithub className="text-blue-600 dark:text-blue-400 text-xl" />
                  <Link 
                    href="https://github.com/mannaiatef" 
                    target="_blank"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    github.com/mannaiatef
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <FaLinkedin className="text-blue-600 dark:text-blue-400 text-xl" />
                  <Link 
                    href="https://www.linkedin.com/in/atef-mannai-4b70a119a/" 
                    target="_blank"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    linkedin.com/in/atef-mannai-4b70a119a
                  </Link>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-800 dark:text-white"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-800 dark:text-white"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-800 dark:text-white"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 