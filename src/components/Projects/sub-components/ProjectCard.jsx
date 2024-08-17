function ProjectCard({ name, desc, projectId, demo, repo, projectLanguages }) {
  return (
    <section id={projectId} className='card'>
      <div className='content'>
        <h1 className='card-title'>{name}</h1>
        <div className='links'>
          {demo && (
            <button type='button'>
              <a href={demo} target='_blank' rel='noreferrer'>
                Demo
              </a>
            </button>
          )}
          <button type='button'>
            <a href={repo} target='_blank' rel='noreferrer'>
              GitHub
            </a>
          </button>
        </div>
        <code className='codey-codey'>
          {projectLanguages.map((lang, i) => (
            <p key={`tech-${i}`} className='language'>
              {lang}
            </p>
          ))}
        </code>
      </div>
      <div className='overlay' />
      <p className='description'>{desc}</p>
    </section>
  );
}

export default ProjectCard;
