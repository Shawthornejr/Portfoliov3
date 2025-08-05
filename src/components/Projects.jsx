import React from 'react';
import './Projects.css';

const projects = [
  {
    name: 'You-Me Calories',
    description: 'A calorie tracker app for me and my wife to monitor daily intake and maintain healthy habits.',
    demoLink: 'https://your-live-demo-url.com',  
    repoLink: 'https://github.com/Shawthornejr/you-me-calories',
    image: '/images/you-me-calories-screenshot.png',
  },
  {
    name: 'Job Tracker',
    description: 'A job application tracker app to organize job searches and track application status.',
    demoLink: 'https://samsjobtrackerapp.netlify.app/',
    repoLink: 'https://github.com/Shawthornejr/job-tracker',
    image: '/images/job-tracker-screenshot.png',
  },
];


export default function Projects() {
  return (
    <section className="projects-container" id="projects">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-list">
        {projects.map(({ name, description, demoLink, repoLink, image }) => (
          <div key={name} className="project-card">
            <div className="project-image">
              <img src={image} alt={`${name} screenshot`} />
            </div>
            <div className="project-details">
              <h3>{name}</h3>
              <p>{description}</p>
              <div className="project-links">
                {demoLink && (
                  <a href={demoLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
                {repoLink && (
                  <a href={repoLink} target="_blank" rel="noopener noreferrer">
                    GitHub Repo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
