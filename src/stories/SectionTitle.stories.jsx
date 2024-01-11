import SectionTitle from '../components/UI/SectionTitle';

export default {
  title: 'Atomic/Section title',
  component: SectionTitle,
};

const Template = (args) => <SectionTitle {...args} />;

export const DefaultTitle = Template.bind({});
DefaultTitle.args = {
  title: 'Default title',
};
