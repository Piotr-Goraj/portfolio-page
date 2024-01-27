import { Input } from 'antd';
const { TextArea } = Input;

export default {
  title: 'Atomic/Input',
  component: Input,
};

const Template = (args) => {
  return <TextArea {...args} />;
};

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  placeholder: 'Default input text area',
};

export const SizedInput = Template.bind({});
SizedInput.args = {
  placeholder: 'Autosize height with minimum and maximum number of lines',
  autoSize: {
    minRows: 1,
    maxRows: 2,
  },
};

export const CountInput = Template.bind({});
CountInput.args = {
  placeholder: 'Count input',
  count: {
    show: true,
    max: 10,
  },
};
