import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import SearchInput from '../UI/Input';
import CardList from '../UI/CardList';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import EditUserForm from './Form/Edit';
import CreateUserForm from './Form/Create';
import DeleteUserForm from './Delete';
import Spinner from '../UI/Spinner';

import { GET_USERS } from '../../graphql/gql/queries/GET_USERS';
import { CREATE_USER } from '../../graphql/gql/mutations/CREATE_USER';
import { DELETE_USER } from '../../graphql/gql/mutations/DELETE_USER';
import { UPDATE_USER } from '../../graphql/gql/mutations/UPDATE_USER';
import { GET_USERS_LENGTH } from '../../graphql/gql/queries/GET_USERS_LENGTH';
import { useQuery, useMutation } from '@apollo/client';

import { FaPlus } from 'react-icons/fa';

const UsersPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [userToDelete, setUserToDelete] = useState(null);

  const [selectedUser, setSelectedUser] = useState({
    savedName: '',
    savedAddress: '',
    savedDescription: '',
    dob: '',
  });

  const router = useRouter();
  const id = router.query.id;

  const {
    loading,
    error,
    data: getUserResponse,
    refetch,
  } = useQuery(GET_USERS, {
    variables: { limit: id ? id * 6 : 1 * 6 },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
  });
  const { data: getUsersLengthResponse } = useQuery(GET_USERS_LENGTH);
  const [deleteUser] = useMutation(DELETE_USER, {
    refetchQueries: [GET_USERS],
  });
  const [updateUser] = useMutation(UPDATE_USER, {
    refetchQueries: [GET_USERS],
  });
  const [createUser] = useMutation(CREATE_USER, {
    refetchQueries: [GET_USERS],
  });

  useEffect(() => {
    return () => {
      handleScrollPosition();
    };
  }, []);

  const handleScrollPosition = () => {
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
      window.scrollTo(0, +scrollPosition);
      sessionStorage.removeItem('scrollPosition');
    }
  };

  const saveScrollPosition = () => {
    sessionStorage.setItem('scrollPosition', window.pageYOffset);
  };

  const onSearchHandler = (value) => {
    setSearchValue(value);
    refetch({ limit: id * 6, filter: searchValue });
  };

  const openUpdateModal = (user) => {
    setSelectedUser({
      savedName: user.name,
      savedAddress: user.address,
      savedDescription: user.description,
      savedDob: new Date(user.dob),
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
        savedDob: '',
      });
    }, 500);
  };

  const openDeleteUserModal = (userId) => {
    setShowDeleteModal(true);
    setUserToDelete(userId);
  };

  const closeDeleteUserModal = () => {
    setShowDeleteModal(false);
    setUserToDelete(null);
  };

  const deleteUserHandler = () => {
    deleteUser({ variables: { userId: userToDelete } });
    setShowDeleteModal(false);
    setUserToDelete(null);
    saveScrollPosition();
  };

  const loadMoreUsers = () => {
    saveScrollPosition();
    router.push(`/${+id + 1}`);
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
      <Modal
        modalStyle={{ width: '1280px' }}
        show={showCreateModal}
        onClose={() => setShowCreateModal(false)}
      >
        <CreateUserForm
          onCancel={() => setShowCreateModal(false)}
          onSubmit={createUser}
        />
      </Modal>
      <Modal
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        modalStyle={{ width: '800px' }}
      >
        <DeleteUserForm
          onCancel={closeDeleteUserModal}
          onDelete={deleteUserHandler}
        />
      </Modal>
      <div
        className="flex-center"
        style={{ marginBottom: '64px', flexWrap: 'wrap' }}
      >
        <h1 className="heading">Users list</h1>
        <SearchInput
          placeholder="Search..."
          onChange={onSearchHandler}
          value={searchValue}
        />
      </div>

      {loading ? (
        <div className="spinner-wrapper">
          <Spinner />
        </div>
      ) : (
        <>
          <CardList
            users={getUserResponse.users}
            openUpdateModal={openUpdateModal}
            deleteUserHandler={openDeleteUserModal}
          />

          <Button
            disabled={id * 6 >= getUsersLengthResponse?.getUsersLength}
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
