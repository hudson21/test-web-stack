import classes from './styled.module.css';
import { useState } from 'react';

import Input from '../../../UI/Input';
import Button from '../../../UI/Button';

const CreateUserForm = ({ onSubmit, onCancel }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [dob, setDob] = useState('');

  const createUserHandler = () => {
    onSubmit({
      variables: {
        data: {
          name,
          address,
          description,
          dob,
        },
      },
    });
    onCancel();
    setTimeout(() => {
      setName('');
      setAddress('');
      setDescription('');
      setDob('');
    }, 5000);
  };

  return (
    <div>
      <h1 className="heading">Create user</h1>
      <div className="flex-column" style={{ marginTop: '30px' }}>
        <Input
          label="Name"
          value={name}
          onChange={setName}
          fullWidth
          customStyles={{ marginBottom: '36px', width: '100%' }}
        />

        <Input
          label="DOB"
          value={dob}
          onChange={setDob}
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
      <div className={classes['actions-wrapper']}>
        <Button
          isPrimary
          value="Save"
          onClick={createUserHandler}
          customStyles={{ marginRight: '62px' }}
        />
        <Button value="Cancel" onClick={onCancel} />
      </div>
    </div>
  );
};

export default CreateUserForm;
