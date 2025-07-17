import React from 'react';
import { MapPin, Mail, Phone, Download ,Linkedin,Github } from 'lucide-react';

const AboutMe = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
           A driven full-stack developer with a knack for rapid learning and creating responsive, impactful solutions. My passion lies in combining robust development with a growing expertise in data science to contribute meaningfully.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Main Profile Card */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
             <div className="w-32 h-32 rounded-full flex items-center justify-center overflow-hidden">
             <img src="/chetan.jpg" alt="Chetan photo" className="h-full w-full object-cover" /> 
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Chetan Kumar Jangir</h3>
                <p className="text-xl text-blue-600 dark:text-blue-400 mb-4">Full Stack Developer</p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I'm a passionate developer creating scalable web applications. 
                  I love turning complex problems into simple, beautiful solutions that users enjoy interacting with.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info Card */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-sm">Jaipur, Raj</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-sm">Chetankumarjangir02@email.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-sm">+91 8875656828</span>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="w-5 h-5 text-gray-400" />
                <span className="text-sm">chetan kumar jangir</span>
              </div>
              <div className="flex items-center space-x-3">
                <Github className="w-5 h-5 text-gray-400" />
                <span className="text-sm">chetankumarjangir02</span>
              </div>
            </div>
          </div>


        
        </div>
      </div>
    </section>
  );
};

export default AboutMe;