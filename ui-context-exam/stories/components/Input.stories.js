import React from 'react';

import Input from '../../components/UI/Input';

export default {
  title: 'Components/UI/Input',
  component: Input,
  argTypes: {},
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  onChange: () => {
    console.log('onChange');
  },
  value: 'Carlos Hudson',
  placeholder: 'Type ...',
  label: '',
  customstyles: {},
  fullwidth: true,
};

export const FullWidthFalse = Template.bind({});
FullWidthFalse.args = {
  onChange: () => {
    console.log('onChange');
  },
  value: 'Carlos Hudson',
  placeholder: 'Type ...',
  label: '',
  customstyles: {},
  fullwidth: false,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  onChange: () => {
    console.log('onChange');
  },
  value: 'Carlos Hudson',
  placeholder: 'Type ...',
  label: 'Name',
  customstyles: {},
  fullwidth: true,
};
