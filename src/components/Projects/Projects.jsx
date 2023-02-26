// Data Imports
import projects from '../../data/projects';
import ProjectCard from './sub-components/ProjectCard';

function Projects({ t }) {
  return (
    <section className='container'>
      <h1>{t('projects2')}</h1>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          name={t(project.name)}
          desc={t(project.description)}
          langs={project.languages}
          database={project.database}
        />
      ))}
    </section>
  );
}

export default Projects;
