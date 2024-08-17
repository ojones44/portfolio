function LanguageMenu({ languages, handleLangChange }) {
  return (
    <nav className='secondary-nav language-select requires-no-scroll'>
      <div className='width-fit'>
        <ul aria-label='Secondary' className='nav-list-lang-select'>
          {languages.map((language) => (
            <button
              key={language.locale}
              onClick={() => handleLangChange(language.locale)}
              type='button'
              className='btn btn-flag display-md-inline-flex primary-nav'
            >
              <span>
                <img className='flag' src={language.img} alt={language.lang} />
              </span>
              {language.lang}
            </button>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default LanguageMenu;
