function LanguageMenu({ langs, langChange }) {
  return (
    <nav className='secondary-nav language-select requires-no-scroll'>
      <div className='width-fit'>
        <ul aria-label='Secondary' className='nav-list-lang-select'>
          {langs.map((item) => (
            <button
              value={item.locale}
              onClick={langChange}
              type='button'
              className='btn btn-flag display-md-inline-flex primary-nav'
            >
              <span>
                <img className='flag' src={item.img} alt={item.lang} />
              </span>
              {item.lang}
            </button>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default LanguageMenu;
