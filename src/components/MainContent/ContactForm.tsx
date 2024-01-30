// libs
import React from 'react';
import emailjs from '@emailjs/browser';

// hooks
import { FormattedMessage, useIntl } from 'react-intl';

// components
import { Button, Input, message } from 'antd';

// scss
import './scss/_ContactForm.scss';

const ContactForm: React.FC = () => {
  const intl = useIntl();
  const [messageApi, contextHolder] = message.useMessage();
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
      messageApi.open({
        content: intl.formatMessage({
          id: 'contact-correct',
          defaultMessage: 'E-mail sent correctly!',
        }),
        type: 'success',
        duration: 1,
      });
    } catch (error) {
      console.error('Error occurred while sending email:', error);
    }
  };

  return (
    <>
      <div className='contact__form'>
        <form onSubmit={contactFormHandler}>
          <Input
            name='email_from'
            id='emailFrom'
            className='form__email'
            placeholder={intl.formatMessage({
              id: 'contact-email',
              defaultMessage: 'Enter your e-mail',
            })}
            type='email'
            required
          />
          <TextArea
            name='message'
            id='message'
            className='form__message'
            placeholder={intl.formatMessage({
              id: 'contact-txt',
              defaultMessage: 'Write message to me!',
            })}
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
            <FormattedMessage
              id='send'
              defaultMessage='Send'
            />
          </Button>
        </form>
      </div>

      {contextHolder}
    </>
  );
};

export default ContactForm;
