// libs
import React from 'react';

// components
import { Button, message } from 'antd';

// UI elements
import '../../fonts/fontello/css/portfolio.css';

// scss
import './scss/_Footer.scss';

const Footer: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const copyToClipboard = (text: string): void => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  };

  // Przykład użycia:
  const mailHandler = (): void => {
    const email: string = 'pg.portfolio.contact@gmail.com';
    copyToClipboard(email);

    messageApi.open({
      type: 'success',
      content: 'E-mail copied to clipboard.',
      className: 'email-message',
    });
  };

  const linkedinHandler = (): void => {
    window.open(
      'https://www.linkedin.com/in/piotr-goraj-154a79225/?locale=en_US',
      '_blank'
    );
  };

  return (
    <footer className='footer-bar'>
      Piotr Goraj&nbsp;
      <Button
        className='footer__link'
        onClick={mailHandler}
      >
        <i className='icon-mail'></i>
      </Button>
      <Button
        className='footer__link'
        onClick={linkedinHandler}
      >
        <i className='icon-linkedin'></i>
      </Button>
      {contextHolder}
    </footer>
  );
};

export default Footer;
