import React from 'react';

import Modal from '../../components/UI/Modal';

export default {
  title: 'Components/UI/Modal',
  component: Modal,
  argTypes: {},
};

const Template = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  modalStyle: { width: '500px' },
  children: <div>Content of the Modal</div>,
  show: true,
  onClose: () => console.log('onClose'),
  backdropStyle: {},
};
