const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          About <span className="text-blue-600 dark:text-blue-400">Me</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
            I am a passionate software engineering student at ESPRIT (École Supérieure Privée d'Ingénierie et de Technologies), currently in my 4th year with a specialization in Systems, Applications, and Enterprise (SAE) since 2024.
          </p>
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
            I have strong technical skills in both frontend and backend development, with experience in microservices architecture, web applications, and desktop development. I've worked on various projects including a Smart Delivery System and a Construction Management System.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Prior to my engineering degree, I obtained an Applied License in Information System Development from the Higher Institute of Studies and Technologies of Béja. I'm fluent in Arabic, French, and have professional working proficiency in English.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About; 