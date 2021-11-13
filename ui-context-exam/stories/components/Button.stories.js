import React from 'react';

import Button from '../../components/UI/Button';

export default {
  title: 'Components/UI/Button',
  component: Button,
  argTypes: {},
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: 'Primary',
  onClick: () => console.log('Primary Button'),
  disabled: false,
  isPrimary: true,
  customstyles: {},
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  value: 'Primary',
  onClick: () => console.log('Primary Button'),
  disabled: true,
  isPrimary: true,
  customstyles: {},
};

export const Secondary = Template.bind({});
Secondary.args = {
  value: 'Secondary',
  onClick: () => console.log('Secondary Button'),
  disabled: false,
  isPrimary: false,
  customstyles: {},
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  value: 'Secondary',
  onClick: () => console.log('Secondary Button'),
  disabled: true,
  isPrimary: false,
  customstyles: {},
};
