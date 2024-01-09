import { Dropdown, Button } from 'antd';

const items = [
  {
    key: '1',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
        onClick={() => {
          alert('Clicked');
        }}
      >
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
      >
        2nd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a
        target='_blank'
        rel='noopener noreferrer'
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: 'a danger item',
  },
];

export default {
  title: 'Atomic/Dropdown',
  component: Dropdown,
};

const Template = (args) => (
  <Dropdown
    menu={{
      items,
    }}
    {...args}
  >
    <Button>Select language</Button>
  </Dropdown>
);

export const DefaultDropdown = Template.bind({});
