import React from 'react';
import { Code, Database, Globe, Smartphone, Server, Palette, } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: 'React', level: 75 },
        { name: 'JavaScript', level: 80 },
        { name: 'Svelte', level: 80 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Next.js', level: 80 },
      ]
    },
    {
      title: 'Backend',
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: 'Node.js', level: 70 },
        
        { name: 'Express.js', level: 70 },
    
        { name: 'REST APIs', level: 70 },
        {name:'Firebase',level:70}
      ]
    },
    {
      title: 'Database',
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: 'SQL', level: 70 },
        { name: 'MongoDB', level: 70 },
     
      ]
    },
    
    {
      title: 'Design',
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: 'Figma', level: 70 },
      ]
    },
    {
      title: 'Programming',
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'Java', level: 65 },
        { name: 'JavaScript', level: 70 },
        { name: 'Python', level: 70 },
     
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across different domains
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className={`bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              } ${index === 1 ? 'lg:col-span-2' : ''}`}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-md flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Firebase','Tauri','Capacitor',"AWS lambda",'AWS API gateway','S3','Excel','Statistics'
            ].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;



