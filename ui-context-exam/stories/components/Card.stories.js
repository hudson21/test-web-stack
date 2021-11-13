import React from 'react';

import Card from '../../components/UI/Card';

export default {
  title: 'Components/UI/Card',
  component: Card,
  argTypes: {},
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  _id: '1234',
  name: 'Carlos Hudson',
  description: 'Description of Carlos Hudson',
  createdAt: '1636670159046',
  openUpdateModal: () => {
    console.log('OpenUpdateModal');
  },
  deleteUserHandler: () => {
    console.log('DeleteUserModal');
  },
};
