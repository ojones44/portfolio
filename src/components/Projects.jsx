// Data Imports
import projects from '../data/projects';

export function ProjectCard(props) {
  return (
    <div className='padding-block-900'>
      <h1>{props.name}</h1>
      <h2>{props.desc}</h2>
      {/* {props.langs.map((lang) => (
        <p key={props.id}>{lang}</p>
      ))} */}
      <p>{props.database}</p>
    </div>
  );
}

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

export { Projects };
