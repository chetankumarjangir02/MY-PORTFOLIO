import React from 'react';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (

      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navigation />
        <main className="pt-16">
          <AboutMe />
          <Skills />
          <Education />
          <Experience />
          <Projects />
         
        </main>
      </div>
   
  );
}

export default App;