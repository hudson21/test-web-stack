import React from 'react';

import DateInput from '../../components/UI/DateInput';

export default {
  title: 'Components/UI/DateInput',
  component: DateInput,
  argTypes: {},
};

const Template = (args) => <DateInput {...args} />;

export const DateWithoutLabel = Template.bind({});
DateWithoutLabel.args = {
  selected: new Date(),
  onChange: () => {
    console.log('onChange');
  },
  label: '',
  customstyles: {},
};

export const DateWithLabel = Template.bind({});
DateWithLabel.args = {
  selected: new Date(),
  onChange: () => {
    console.log('onChange');
  },
  label: 'DOB',
  customstyles: {},
};
