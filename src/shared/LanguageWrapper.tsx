// libs
import React, { createContext, useState } from 'react';
import { IntlProvider } from 'react-intl';

// translations
import English from '../translations/en.json';
import Polish from '../translations/pl.json';

// Define the type for context
interface LanguageContextProps {
  locale: string;
  selectLang: (lang: string) => void;
}

// Create context with initial values
export const LanguageContext = createContext<LanguageContextProps>({
  locale: 'pl',
  selectLang: () => {},
});

function LanguageWrapper(props: React.PropsWithChildren<{}>) {
  const [locale, setLocale] = useState('en');
  const [messages, setMessages] = useState(locale === 'en' ? English : Polish);

  function selectLang(langSelected: string) {
    const newLocale = langSelected;
    setLocale(newLocale);

    if (newLocale === 'pl') {
      setMessages(Polish);
    } else {
      setMessages(English);
    }
  }

  return (
    <LanguageContext.Provider value={{ locale, selectLang }}>
      <IntlProvider
        messages={messages}
        locale={locale}
      >
        {props.children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
}

export default LanguageWrapper;
