// libs
import React from 'react';
import emailjs from '@emailjs/browser';

// components
import { Button, Input } from 'antd';

// scss
import './scss/_ContactForm.scss';

const ContactForm: React.FC = () => {
  // pg.portfolio.contact@gmail.com
  const { TextArea } = Input;

  const contactFormHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('One or more environment variables are not defined.');
      return;
    }

    const formData = new FormData(e.currentTarget);
    const emailFrom = formData.get('email_from') as string;
    const message = formData.get('message') as string;

    try {
      await emailjs.send(
        serviceId,
        templateId,
        { email_from: emailFrom, message: message },
        publicKey
      );
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error occurred while sending email:', error);
    }
  };

  return (
    <div className='contact__form'>
      <form onSubmit={contactFormHandler}>
        <Input
          name='email_from'
          id='emailFrom'
          className='form__email'
          placeholder='Enter your e-mail'
          type='email'
          required
        />
        <TextArea
          name='message'
          id='message'
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
