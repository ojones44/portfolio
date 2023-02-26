function MobileMenu({ t }) {
  return (
    <nav className='secondary-nav requires-no-scroll' id='secondary-nav'>
      <div className='width-fit'>
        <ul aria-label='Secondary' className='nav-list-sm'>
          <li>
            <a className='underline mobile' href='#about'>
              {t('about1')}
            </a>
          </li>
          <li>
            <a className='underline mobile' href='#projects'>
              {t('projects2')}
            </a>
          </li>
          <li>
            <a className='underline mobile' href='#contact'>
              {t('contact3')}
            </a>
          </li>
          <li>
            <button type='button' className='btn' data-type='inverted'>
              {t('resume')}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MobileMenu;
