import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Code, Layers, Database } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AI Launchpad',
      description: 'AI Launchpad is a web app that helps users discover and explore top AI tools in one place. Tools are organized by categories like image generation, chatbots, video, and audio tools. Each tool shows its name, logo, a short description, and a direct link.',
      image: 'public/launchpad.png',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'Firebase', 'Vercel'],
      githubUrl: 'https://github.com/chetankumarjangir02/AI-Launchpad',
      liveUrl: 'https://chet-ai-launchpad-five.vercel.app/',
      featured: true
    },
    {
      id: 2,
      title: 'BuddyRide',
      description: 'BuddyRide is a city-focused carpooling app built with Next.js, MongoDB, and Firebase Auth. It lets users easily create and find short-distance rides. Deployed on Vercel for fast, seamless access.',
      image: 'public/buddy.png',
      category: 'full stack',
      technologies: ['React', 'Next.js','Node.js', 'Firebase', 'MongoDB'],
      githubUrl: 'https://github.com/chetankumarjangir02/BuddyRide',
      liveUrl: 'https://chetanbuddyride.netlify.app',
      featured: true
    },
    {
      id: 3,
      title: 'Responsive Landing page',
      description: 'A responsive landing page is a single-page website that automatically adapts its layout and content to look great and work perfectly on any device, from desktops to smartphones, all while driving visitors towards a specific goal, like filling out a form.',
      image: 'public/page.png',
      category: 'frontend',
      technologies: ['Svelte'],
      githubUrl: 'https://github.com/chetankumarjangir02/landing-page-svelte',
      liveUrl: 'https://chetanlandingpage.vercel.app/',
      featured: true
    },
    {
      id: 4,
      title: 'Dice Game',
      description: 'A simple React dice game is a web app using React where users click to "roll" dice, displaying random numbers and a score. It`s an ideal project for learning basic React.',
      image: 'public/dice.png',
      category: 'frontend',
      technologies: ['React'],
      githubUrl: 'https://github.com/chetankumarjangir02/Dice-Game-React-app-',
      liveUrl: 'https://dice-game-react-app.vercel.app/',
      featured: true
    },
    {
      id: 5,
      title: 'Talk-A-Tive',
      description: 'Talk-a-tive is a real-time chat app where users can register, log in, search for others, and engage in one-on-one or group conversations. It includes features like typing indicators and notifications, typically built with React, Node.js/Express, MongoDB, and WebSockets for instant messaging.',
      image: 'public/chat.png',
      category: 'FullStack',
      technologies: ['React','Node','firebase','google Auth'],
      githubUrl: 'https://github.com/chetankumarjangir02/TALK-A-TIVE',
      liveUrl: 'https://chet-talk-a-tive.netlify.app/',
      featured: true
    },

  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my best work demonstrating expertise across different technologies and domains
          </p>
        </div>

        {/* Featured Projects - Bento Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8">Highlighted Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`bg-white dark:bg-gray-900 rounded-xl shadow-sm overflow-hidden group hover:shadow-lg transition-shadow ${
                  index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                } ${index === 1 ? 'lg:col-span-2' : ''}`}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-md flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Github className="w-4 h-4 text-white" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-md flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-white" />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md flex items-center justify-center transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex items-center justify-center transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>



        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Like what you see?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              These are just a few examples of my work. I'm always excited to take on new challenges and create innovative solutions.
            </p>
            <button className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex items-center justify-center mx-auto transition-colors group">
              <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;