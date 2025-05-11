import { FaCode, FaTools } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Smart Delivery System",
      year: "2025",
      type: "Microservices Project",
      technologies: ["Python", "Spring Boot", "Angular", "JavaScript"],
      description: "Designed and implemented a complete smart delivery system with microservices architecture."
    },
    {
      title: "3D Construction Model Generator",
      year: "2025",
      type: "AI & Modeling Project",
      technologies: ["Python"],
      description: "Developed a Python application that converts 2D construction plans into 3D models."
    },
    {
      title: "Flight Management System",
      year: "2024",
      type: "Desktop Application",
      technologies: [".NET", "C#"],
      description: "Built a comprehensive flight management system with booking, scheduling, and reporting features."
    },
    {
      title: "Dormitory Management System",
      year: "2024",
      type: "Web Application",
      technologies: ["Spring Boot"],
      description: "Created a system to manage dormitory operations including room allocation, maintenance requests, and student records."
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Academic <span className="text-blue-600 dark:text-blue-400">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-600 dark:bg-blue-500 p-4 text-white">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-sm opacity-90">{project.type}</span>
                  <span className="text-sm opacity-90">{project.year}</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex items-center gap-2 mb-3">
                  <FaTools className="text-blue-600 dark:text-blue-400" />
                  <h4 className="font-semibold text-sm">Technologies:</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm border border-gray-200 dark:border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 