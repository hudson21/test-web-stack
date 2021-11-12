import { useState, useEffect } from 'react';

import Input from '../../../UI/Input';
import Button from '../../../UI/Button';

import classes from './styled.module.css';

const EditUserForm = ({ savedUser, onCancel, onSubmit }) => {
  const { savedName, savedAddress, savedDescription } = savedUser;
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setName(savedName);
  }, [savedName]);

  useEffect(() => {
    setAddress(savedAddress);
  }, [savedAddress]);

  useEffect(() => {
    setDescription(savedDescription);
  }, [savedDescription]);

  const updateUserHandler = () => {
    onSubmit({
      variables: {
        updateUserId: savedUser._id.toString(),
        data: {
          name,
          description,
          address,
        },
      },
    });
    onCancel();
  };

  return (
    <>
      <h1 className="heading">Edit user</h1>
      <div className="flex-center" style={{ marginTop: '64.5px' }}>
        <div className={classes['map-wrapper']}></div>
        <div className={classes['input-group']}>
          <Input
            label="Name"
            value={name}
            onChange={setName}
            fullWidth
            customStyles={{ marginBottom: '36px', width: '100%' }}
          />
          <Input
            label="Address"
            value={address}
            onChange={setAddress}
            fullWidth
            customStyles={{ marginBottom: '36px', width: '100%' }}
          />
          <Input
            label="Description"
            value={description}
            onChange={setDescription}
            fullWidth
            customStyles={{ width: '100%' }}
          />
        </div>
      </div>
      <div className={classes['actions-wrapper']}>
        <Button
          isPrimary
          value="Save"
          onClick={updateUserHandler}
          customStyles={{ marginRight: '62px' }}
        />
        <Button value="Cancel" onClick={onCancel} />
      </div>
    </>
  );
};

export default EditUserForm;
