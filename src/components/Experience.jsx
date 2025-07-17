import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: ' Full Stack Developer Intern',
      company: 'Tensax Innovation Lab',
      location: 'Jaipur, Raj',
      period: 'Feb 2025 - May 2025',
      type: 'Full-time',
      description: 'Build some projects solving real world problem ',
      achievements: [
        ' Developed and maintained real-world web and cross-platform applications using Svelte for fast and efficient front-end development',
        'Integrated Firebase for authentication, real-time database, and hosting, enabling scalable backend support.',
        'Utilized AWS services (e.g., S3, Lambda, API , S3) to deploy and manage cloud-based infrastructure forproduction-ready apps',
   
      ],
      technologies: ['Svelte','SvelteKit', 'Node.js', 'Firebase', 'AWS',]
    },

  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey and key contributions in building exceptional digital products
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Experience Timeline */}
          <div className="lg:col-span-2 bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-sm">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-md flex items-center justify-center">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-semibold">Professional Experience</h3>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-4 top-16 w-0.5 h-full bg-gray-300 dark:bg-gray-600"></div>
                  )}
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-2">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    
                    <div className="flex-1 bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h4 className="text-lg font-semibold">{exp.title}</h4>
                        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-4">
                        <h5 className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</h5>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {exp.location}
                          </span>
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                      
                      <div className="mb-4">
                        <h6 className="text-sm font-semibold mb-2">Key Achievements:</h6>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h6 className="text-sm font-semibold mb-2">Technologies:</h6>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span 
                              key={i}
                              className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            {/* Career Highlights */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Career Highlights</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400"> Experience</span>
                  <span className="font-semibold">4 months</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</span>
                  <span className="font-semibold">5+</span>
                </div>
             
              </div>
            </div>

            {/* Skills Growth */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Skills Development</h3>
              <div className="space-y-3">
                {[
                  { skill: 'Leadership', level: 90 },
                  { skill: 'Mentoring', level: 88 },
                  { skill: 'Problem Solving', level: 95 }
                ].map((item) => (
                  <div key={item.skill}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{item.skill}</span>
                      <span className="text-blue-600 dark:text-blue-400">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>


            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm text-center">
  <h3 className="text-lg font-semibold mb-4">Interested in working together?</h3>

  <a href="chetanResume.pdf" target="_blank" rel="noopener noreferrer">
    <button className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex items-center justify-center mx-auto transition-colors group">
      <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
    </button>
  </a>
  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">View Full Resume</p>
</div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;