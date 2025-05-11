const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "DNDSERVE",
      period: "2025",
      description: "Developed a microservices architecture for construction management system. Implemented RESTful APIs and frontend components using Spring Boot and Angular."
    },
    {
      title: "Assistant Customer Service",
      company: "GÉANT, Azure City",
      period: "2021 - 2023",
      description: "Worked as an after-sales service assistant handling customer relations management."
    },
    {
      title: "Engineering Student",
      company: "ESPRIT",
      period: "2023 - Present",
      description: "Pursuing an Engineering Degree in Software Engineering with specialization in Systems, Applications, and Enterprise (SAE) since 2024."
    },
    {
      title: "Applied License",
      company: "Higher Institute of Studies and Technologies of Béja",
      period: "2014 - 2016",
      description: "Obtained an Applied License in Information System Development."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Experience & <span className="text-blue-600 dark:text-blue-400">Education</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-blue-600 dark:border-blue-400 pl-8 ml-4">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-12 relative">
                <div className="absolute -left-12 w-6 h-6 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-gray-800"></div>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{exp.period}</p>
                  <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 