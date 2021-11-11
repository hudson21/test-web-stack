import { useState } from 'react';

import SearchInput from '../UI/Input';
import CardList from '../UI/CardList';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import EditUserForm from './Form/Edit';

const DUMMY_DATA = [
  {
    id: 1,
    name: 'Carlos Hudson',
    dob: '12/23/1995',
    address: 'Address 1',
    description: `Lorem Ipsum is simply dummy text of
    the printing and typesetting industry.`,
    createdAt: '11/05/2021',
    updatedAt: '11/05/2021',
  },
  {
    id: 2,
    name: 'Carlos Hudson',
    dob: '12/23/1995',
    address: 'Address 1',
    description: `Lorem Ipsum is simply dummy text of
    the printing and typesetting industry.`,
    createdAt: '11/05/2021',
    updatedAt: '11/05/2021',
  },
  {
    id: 3,
    name: 'Carlos Hudson',
    dob: '12/23/1995',
    address: 'Address 1',
    description: `Lorem Ipsum is simply dummy text of
    the printing and typesetting industry.`,
    createdAt: '11/05/2021',
    updatedAt: '11/05/2021',
  },
  {
    id: 4,
    name: 'Carlos Hudson',
    dob: '12/23/1995',
    address: 'Address 1',
    description: `Lorem Ipsum is simply dummy text of
    the printing and typesetting industry.`,
    createdAt: '11/05/2021',
    updatedAt: '11/05/2021',
  },
];

const UsersPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({
    savedName: '',
    savedAddress: '',
    savedDescription: '',
  });

  const openUpdateModal = (user) => {
    setSelectedUser({
      savedName: user.name,
      savedAddress: user.address,
      savedDescription: user.description,
      ...user,
    });
    setShowUpdateModal(true);
  };

  const closeUpdateModal = () => {
    setShowUpdateModal(false);
    setTimeout(() => {
      setSelectedUser({
        savedName: '',
        savedAddress: '',
        savedDescription: '',
      });
    }, 500);
  };

  const loadMoreUsers = () => {
    console.log('load more users');
  };

  const updateUser = () => {
    console.log('Update User');
  };

  return (
    <div className="flex-column">
      <Modal show={showUpdateModal} onClose={closeUpdateModal}>
        <EditUserForm
          savedUser={selectedUser}
          onCancel={closeUpdateModal}
          onSubmit={updateUser}
        />
      </Modal>
      <div
        className="flex-center"
        style={{ marginBottom: '64px', flexWrap: 'wrap' }}
      >
        <h1 className="heading">Users list</h1>
        <SearchInput
          placeholder="Search..."
          onChange={setSearchValue}
          value={searchValue}
        />
      </div>
      <CardList users={DUMMY_DATA} openUpdateModal={openUpdateModal} />
      <Button value="Load More" isPrimary onClick={loadMoreUsers} />
    </div>
  );
};

export default UsersPage;
