import { Button } from 'antd';

export default {
  title: 'Atomic/Button',
  component: Button,
  argTypes: {
    type: {
      options: ['primary', 'dashed', 'link', 'text', 'default'],
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => <Button {...args}>Some text</Button>;

export const DefaultBtn = Template.bind({});
DefaultBtn.args = {
  block: true,
  type: 'default',
  htmlType: 'button',
};

export const Link = Template.bind({});
Link.args = {
  type: 'link',
};
