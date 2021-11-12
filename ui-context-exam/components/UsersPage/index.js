import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import SearchInput from '../UI/Input';
import CardList from '../UI/CardList';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import EditUserForm from './Form/Edit';
import CreateUserForm from './Form/Create';
import Spinner from '../UI/Spinner';

import { GET_USERS } from '../../graphql/gql/queries/GET_USERS';
import { CREATE_USER } from '../../graphql/gql/mutations/CREATE_USER';
import { DELETE_USER } from '../../graphql/gql/mutations/DELETE_USER';
import { UPDATE_USER } from '../../graphql/gql/mutations/UPDATE_USER';
import { GET_USERS_LENGTH } from '../../graphql/gql/queries/GET_USERS_LENGTH';
import { useQuery } from '@apollo/client';

import { FaPlus } from 'react-icons/fa';

const UsersPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({
    savedName: '',
    savedAddress: '',
    savedDescription: '',
  });

  const router = useRouter();
  const id = router.query.id;

  const {
    loading,
    error,
    data: getUserResponse,
  } = useQuery(GET_USERS, {
    variables: { limit: id * 6 },
  });
  const { data: getUsersLengthResponse } = useQuery(GET_USERS_LENGTH);

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

  const deleteUserHandler = (userId) => {
    console.log('delete', userId);
  };

  const loadMoreUsers = () => {
    router.push(`/${+id + 1}`);
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
      <Modal show={showCreateModal} onClose={() => setShowCreateModal(false)}>
        <CreateUserForm />
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

      {loading && !getUserResponse ? (
        <div className="spinner-wrapper">
          <Spinner />
        </div>
      ) : (
        <>
          <CardList
            users={getUserResponse.users}
            openUpdateModal={openUpdateModal}
            deleteUserHandler={deleteUserHandler}
          />

          <Button
            disabled={id * 6 >= getUsersLengthResponse.getUsersLength}
            value="Load More"
            isPrimary
            onClick={loadMoreUsers}
          />
          <div
            className="add-more-btn"
            onClick={() => setShowCreateModal(true)}
          >
            <FaPlus />
          </div>
        </>
      )}
    </div>
  );
};

export default UsersPage;
