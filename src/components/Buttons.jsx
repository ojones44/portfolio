function Button({ classes, body, onClick, inverted }) {
  return (
    <button
      type='button'
      data-type={inverted ? 'inverted' : ''}
      className={classes}
      onClick={onClick}
    >
      {body}
    </button>
  );
}

function ButtonLink({ classes, body, onClick, link, inverted }) {
  return (
    <a href={link} target='_blank' rel='noreferrer'>
      <button
        type='button'
        data-type={inverted ? 'inverted' : ''}
        className={classes}
        onClick={onClick}
      >
        {body}
      </button>
    </a>
  );
}

Button.defaultProps = {
  classes: ['btn'],
  body: 'Standard Button',
  onClick: null,
  inverted: false,
};

ButtonLink.defaultProps = {
  classes: ['btn'],
  body: 'Standard Button',
  onClick: null,
  link: 'https://beta.reactjs.org/',
  inverted: false,
};

export { Button, ButtonLink };
