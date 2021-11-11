import { useState } from 'react';

import Input from '../../../UI/Input';
import Button from '../../../UI/Button';

import classes from './styled.module.css';

const EditUserForm = ({
  savedName,
  savedAddress,
  savedDescription,
  onCancel,
  onSubmit,
}) => {
  const [name, setName] = useState(savedName || '');
  const [address, setAddress] = useState(savedAddress || '');
  const [description, setDescription] = useState(savedDescription || '');

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
          onClick={onSubmit}
          customStyles={{ marginRight: '62px' }}
        />
        <Button value="Cancel" onClick={onCancel} />
      </div>
    </>
  );
};

export default EditUserForm;
