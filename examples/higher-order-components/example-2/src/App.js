import React, { useState } from 'react';

const languages = {
  en: { 'Please Login': 'Please Login' },
  es: { 'Please Login': 'Por favor Iniciar sesión' },
  fr: {
    'Please Login': 'Veuillez vous connecter',
  },
};

function withTranslation(WrappedComponent, translation) {
  return function (props) {
    const [language, setLanguage] = useState('en');

    const translate = (key) => translation[language][key] || key;

    const changeLanguage = (lang) => {
      setLanguage(lang);
    };

    return (
      <WrappedComponent
        {...props}
        t={translate}
        language={language}
        changeLanguage={changeLanguage}
      ></WrappedComponent>
    );
  };
}

const LoginComponent = ({ t, language, changeLanguage }) => {
  return (
    <div>
      <p>{t('Please Login')}</p>
      <p>Current language: {language}</p>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Español</button>
      <button onClick={() => changeLanguage('fr')}>Français</button>
    </div>
  );
};

const LoginComponentWithTranslation = withTranslation(
  LoginComponent,
  languages
);

const App = () => {
  return (
    <div className='App'>
      <LoginComponentWithTranslation />
    </div>
  );
};

export default App;
