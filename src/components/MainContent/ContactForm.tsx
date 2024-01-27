// libs
import React from 'react';

// components
import { Button, Input } from 'antd';

// scss
import './scss/_ContactForm.scss';

const ContactForm: React.FC = () => {
  // pg.portfolio.contact@gmail.com
  const { TextArea } = Input;

  const contactFormHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <div className='contact__form'>
      <form onSubmit={contactFormHandler}>
        <Input
          className='form__email'
          placeholder='Enter your e-mail'
          type='email'
          required
        />
        <TextArea
          className='form__message'
          placeholder='Write message to me!'
          count={{ show: true }}
          autoSize={{
            minRows: 8,
            maxRows: 10,
          }}
          required
        />
        <Button
          htmlType='submit'
          className='form__submit'
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
