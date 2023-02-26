function ProjectCard({ id, name, desc, langs, database }) {
  return (
    <div className='padding-block-900 flow'>
      <h1>{name}</h1>
      <h2>{desc}</h2>
      {/* {props.langs.map((lang) => (
  <p key="{props.id}">{lang}</p>
  ))} */}
      <p>{database}</p>
    </div>
  );
}

export default ProjectCard;
