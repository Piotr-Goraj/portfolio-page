// libs
import React from 'react';
import { Dropdown, Button } from 'antd';

// hooks
import { useContext, useState } from 'react';

// functions
import { LanguageContext } from '../../shared/LanguageWrapper';

// UI
import plFlag from '../../translations/flags-png/pl.png';
import enFlag from '../../translations/flags-png/en.png';

// scss
import './scss/_TopBar.scss';
import './scss/_SelectLanguage.scss';

const SelectLanguage: React.FC = () => {
  const langContext = useContext(LanguageContext);

  // variables for change language
  const [SelectedLenguage, setSelectedLanguage] = useState('English');
  const [currentLang, setCurrentLang] = useState(langContext.locale);

  // variables for current language change
  const languageSelectedText = currentLang === 'en' ? 'English' : 'Polski';
  const languageSelectedFlag = currentLang === 'en' ? enFlag : plFlag;

  const items = [
    {
      key: '1',
      label: (
        <a
          onClick={() => {
            langContext.selectLang('en');
            setCurrentLang('en');
            setSelectedLanguage('English');
          }}
          className='dropdown__img'
        >
          <img src={enFlag} />
          English
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a
          onClick={() => {
            langContext.selectLang('pl');
            setCurrentLang('pl');
            setSelectedLanguage('Polski');
          }}
          className='dropdown__img'
        >
          <img src={plFlag} />
          Polski
        </a>
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
        <Button className='dropdown__img'>
          <img src={languageSelectedFlag} /> {SelectedLenguage}
        </Button>
      </Dropdown>
    </div>
  );
};

export default SelectLanguage;
