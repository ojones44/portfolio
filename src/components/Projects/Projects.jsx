// CSS Imports
import './Projects.css';

// Data Imports
import projects from '../../data/projects';

// Component Imports
import ProjectCard from './sub-components/ProjectCard';

function Projects({ t }) {
  return (
    <section
      id='projects'
      className='container bg-primary-100 padding-block-900'
    >
      <h1 className='sub-heading fs-sub-heading fw-bold'>{t('projects2')}</h1>
      <div className='photo-box'>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={t(project.name)}
            desc={t(project.description)}
            projectId={project.projectId}
            repo={project.repo}
            demo={project.demo}
            languages={project.languages}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
