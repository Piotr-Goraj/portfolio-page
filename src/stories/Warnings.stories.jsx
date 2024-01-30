import { Button, Space, message } from 'antd';

export default {
  title: 'Atomic/Warnings',
  component: message,
  argTypes: {
    type: {
      options: ['success', 'error', 'warning', 'loading', 'default'],
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <>
      <Button
        onClick={() => {
          messageApi.open({
            ...args,
          });
        }}
      >
        Some text
      </Button>
      {contextHolder}
    </>
  );
};

export const MessagesTypes = Template.bind({});
MessagesTypes.args = {
  content: 'This is message!',
  type: 'success',
  duration: 1,
};

export const MessagesFunctions = Template.bind({});
