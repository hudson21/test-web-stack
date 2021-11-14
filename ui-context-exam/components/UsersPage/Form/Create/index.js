import classes from './styled.module.css';
import { useState } from 'react';

import Input from '../../../UI/Input';
import Button from '../../../UI/Button';
import DateInput from '../../../UI/DateInput';

const CreateUserForm = ({ onSubmit, onCancel }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [dob, setDob] = useState('');

  const clearFields = () => {
    setTimeout(() => {
      setName('');
      setAddress('');
      setDescription('');
      setDob('');
    }, 500);
  };

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
    clearFields();
  };

  return (
    <div>
      <h1 className="heading">Create user</h1>
      <div className="flex-column" style={{ marginTop: '30px', width: '100%' }}>
        <Input
          label="Name"
          value={name}
          onChange={setName}
          fullwidth="true"
          customstyles={{ marginBottom: '36px', width: '100%' }}
        />

        <DateInput
          selected={dob}
          label="DOB"
          onChange={setDob}
          maxDate={Date.now()}
          customstyles={{
            marginBottom: '36px',
            alignSelf: 'flex-start',
            width: '100%',
          }}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
        />

        <Input
          label="Address"
          value={address}
          onChange={setAddress}
          fullwidth="true"
          customstyles={{ marginBottom: '36px', width: '100%' }}
        />

        <Input
          label="Description"
          value={description}
          onChange={setDescription}
          fullwidth="true"
          customstyles={{ width: '100%' }}
        />
      </div>
      <div className={classes['actions-wrapper']}>
        <Button
          isPrimary
          value="Save"
          onClick={createUserHandler}
          customstyles={{ marginRight: '62px' }}
          disabled={!name || !address || !description || !dob}
        />
        <Button
          value="Cancel"
          onClick={() => {
            onCancel();
            clearFields();
          }}
        />
      </div>
    </div>
  );
};

export default CreateUserForm;
