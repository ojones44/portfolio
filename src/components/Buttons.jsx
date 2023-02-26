function Button({ classes, body, onClick }) {
  return (
    <button type='button' className={classes} onClick={onClick}>
      {body}
    </button>
  );
}

function ButtonLink({ classes, body, onClick, link }) {
  return (
    <a href={link} target='_blank' rel='noreferrer'>
      <button type='button' className={classes} onClick={onClick}>
        {body}
      </button>
    </a>
  );
}

Button.defaultProps = {
  classes: ['btn'],
  body: 'Standard Button',
  onClick: null,
};

ButtonLink.defaultProps = {
  classes: ['btn'],
  body: 'Standard Button',
  onClick: null,
  link: 'https://beta.reactjs.org/',
};

export { Button, ButtonLink };
