function ProjectCard({ name, desc, projectId, demo, repo, languages }) {
  return (
    <section id={projectId} className='card'>
      <div className='content'>
        <h1 className='card-title'>{name}</h1>
        <div className='links'>
          {demo && (
            <button type='button'>
              <a href={demo} target='_blank' rel='noreferrer'>
                Live Demo
              </a>
            </button>
          )}
          <button type='button'>
            <a href={repo} target='_blank' rel='noreferrer'>
              Github
            </a>
          </button>
        </div>
        <code className='codey-codey'>
          {languages.map((lang) => (
            <p className='language'>{lang}</p>
          ))}
        </code>
      </div>
      <div className='overlay' />
      <p className='description'>{desc}</p>
    </section>
  );
}

export default ProjectCard;
