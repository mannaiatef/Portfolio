const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Java/JEE", "Python", "C#", "C/C++", "JavaScript"]
    },
    {
      category: "Frameworks & Tools",
      skills: ["Spring Boot", "Angular", "JavaFX", ".NET Framework", "PHP/Symfony"]
    },
    {
      category: "Web Development",
      skills: ["HTML5/CSS3", "JavaScript", "Angular", "PHP/Symfony"]
    },
    {
      category: "Databases",
      skills: ["MySQL", "Oracle", "SQL"]
    },
    {
      category: "Other Skills",
      skills: ["Microservices Architecture", "Android", "Windows", "Linux"]
    },
    {
      category: "Languages",
      skills: ["Arabic (Native)", "French (Fluent)", "English (Professional)"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Technical <span className="text-blue-600 dark:text-blue-400">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm border border-gray-200 dark:border-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 