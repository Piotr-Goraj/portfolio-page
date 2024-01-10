// libs
import React from 'react';
import { Dropdown } from 'antd';

// hooks
import { useContext, useState } from 'react';
import { useWindowWidth } from '../../hooks/useWindowSize';

// functions
import { LanguageContext } from '../../shared/LanguageWrapper';

// UI
import plFlag from '../../translations/flags-png/pl.png';
import enFlag from '../../translations/flags-png/en.png';

// scss
import './scss/_TopBar.scss';
import './scss/_SelectLanguage.scss';

const SelectLanguage: React.FC = () => {
  const windowWidth = useWindowWidth();
  const langContext = useContext(LanguageContext);

  // variables for change language
  const [SelectedLenguage, setSelectedLanguage] = useState('English');
  const [currentLang, setCurrentLang] = useState(langContext.locale);

  // variables for current language change
  const languageSelectedFlag = currentLang === 'en' ? enFlag : plFlag;

  const items = [
    {
      key: '1',
      label: (
        <div
          onClick={() => {
            langContext.selectLang('en');
            setCurrentLang('en');
            setSelectedLanguage('English');
          }}
          className='dropdown__option'
        >
          <img
            src={enFlag}
            alt='flag'
          />
          English
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div
          onClick={() => {
            langContext.selectLang('pl');
            setCurrentLang('pl');
            setSelectedLanguage('Polski');
          }}
          className='dropdown__option'
        >
          <img
            src={plFlag}
            alt='flag'
          />
          Polski
        </div>
      ),
    },
  ];

  return (
    <div className='header-bar__language'>
      <Dropdown
        menu={{
          items,
        }}
        className='language__dropdown'
      >
        <div className='dropdown__btn'>
          <img
            src={languageSelectedFlag}
            alt='flag'
          />
          {windowWidth >= 650 && SelectedLenguage}
        </div>
      </Dropdown>
    </div>
  );
};

export default SelectLanguage;
