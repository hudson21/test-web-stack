import React from 'react';

import Avatar from '../../components/UI/Avatar';

export default {
  title: 'Components/UI/Avatar',
  component: Avatar,
  argTypes: {},
};

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: 'Image 1',
  id: '1232',
};
