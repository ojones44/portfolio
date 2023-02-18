// React Imports
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Component Imports
import Button from './Button';

// Asset Imports
import { HamburgerIcon, CloseIcon, OliverLogo } from '../svgs/embedded';

function MenuButton({ onClick, isOpen }) {
  return (
    <button
      type='button'
      className='mobile-nav-toggle'
      aria-controls='primary-nav'
      onClick={onClick}
    >
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </button>
  );
}

function MobileMenu({ t }) {
  return (
    <nav className='secondary-nav requires-no-scroll' id='secondary-nav'>
      <div className='width-fit'>
        <ul aria-label='Secondary' className='nav-list-sm'>
          <li>
            <a href='#'>{t('about1')}</a>
          </li>
          <li>
            <a href='#'>{t('projects2')}</a>
          </li>
          <li>
            <a href='#'>{t('contact3')}</a>
          </li>
          <li>
            <button type='button' className='button' data-type='inverted'>
              {t('resume')}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function DesktopMenu({ t, langs, langChange }) {
  return (
    <nav className='primary-nav' id='primary-nav'>
      <ul aria-label='Primary' className='nav-list'>
        <li>
          <a href='#'>{t('about1')}</a>
        </li>
        <li>
          <a href='#'>{t('projects2')}</a>
        </li>
        <li>
          <a href='#'>{t('contact3')}</a>
        </li>
        <li>
          <button
            type='button'
            className='button raise display-md-inline-flex primary-nav'
          >
            {t('resume')}
          </button>
        </li>
        <li>
          <select onChange={langChange}>
            {langs.map((item) => (
              <option key={item.id} label={item.lang} value={item.locale} />
            ))}
          </select>
        </li>
      </ul>
    </nav>
  );
}

function Navbar({ t, languages, langChange, mobNavOpen, isOpen }) {
  return (
    <header className='heading'>
      <div className='container'>
        <div className='nav-wrapper'>
          <Link to='/'>
            <OliverLogo />
          </Link>
          <DesktopMenu t={t} langs={languages} langChange={langChange} />
          {isOpen && (
            <MobileMenu t={t} langs={languages} langChange={langChange} />
          )}
          <MenuButton onClick={mobNavOpen} isOpen={isOpen} />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
