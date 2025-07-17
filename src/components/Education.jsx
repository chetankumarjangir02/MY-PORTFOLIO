import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bechlor Of Technology',
      institution: 'Vivekananda Global University',
      location: 'Jaipur, Raj',
      period: '2023 - 2026',
      cgpa: '8/10',
      description: 'Specialized in Machine Learning and Distributed Systems. Thesis on "Scalable Web Architecture Patterns".',
      achievements: ['Dean\'s List',]
    },
    {
      degree: 'Bachelor of Science ',
      institution: 'University of Rajasthan',
      location: 'Jaipur , Raj',
      period: '2020 - 2023',
      cgpa:'6.84/10',
      description: 'Focused on software development methodologies and web technologies. Graduated Summa Cum Laude.',
      achievements: ['Got First Devision', ]
    }
  ];

  const certifications = [
    {
      name: 'Management Information System',
      issuer: 'NPTEL',
      date: '2024',
      credentialId: ''
    },
    {
      name: 'Business Fundamentals for Entrepreneurs',
      issuer: 'NPTEL',
      date: '2024',
      credentialId: 'GCP-PD-2022-002'
    },

  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My academic journey and professional certifications that shape my expertise
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Education Timeline */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-md flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-semibold">Academic Background</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  {index !== education.length - 1 && (
                    <div className="absolute left-4 top-12 w-0.5 h-full bg-gray-200 dark:bg-gray-700"></div>
                  )}
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-lg font-semibold">{edu.degree}</h4>
                        <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.period}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-4 mb-3">
                        <h5 className="text-blue-600 dark:text-blue-400 font-medium">{edu.institution}</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {edu.location}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-3">{edu.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {edu.achievements.map((achievement, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                      
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        GPA: <span className="font-semibold">{edu.cgpa}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-green-600 text-white rounded-md flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">{cert.name}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{cert.issuer}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-green-600 dark:text-green-400">{cert.date}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{cert.credentialId}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Relevant Coursework</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                'Data Structures & Algorithms',
                'Database Systems',
                'Web Development',
                'Machine Learning',
                'Software Engineering',

                'Computer Networks',
                
              ].map((course) => (
                <span key={course} className="text-sm text-gray-600 dark:text-gray-400">
                  • {course}
                </span>
              ))}
            </div>
          </div>

   
        </div>
      </div>
    </section>
  );
};

export default Education;