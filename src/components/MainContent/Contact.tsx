// libs
import React from 'react';

// components
import { Button } from 'antd';
import ContactForm from './ContactForm';

// scss
import './scss/_Contact.scss';
import './scss/_ContactLink.scss';

const Contact: React.FC = () => {
  const contactLinkHandler = (): void => {
    window.open(
      'https://www.linkedin.com/in/piotr-goraj-154a79225/?locale=en_US',
      '_blank'
    );
  };

  return (
    <div className='contact__wrapper'>
      <Button
        onClick={contactLinkHandler}
        className='contact__link'
      >
        <i className='icon-linkedin'></i>&nbsp; My LinkedIn profile
      </Button>

      <ContactForm />
    </div>
  );
};

export default Contact;
