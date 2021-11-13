import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

import Input from '../../../UI/Input';
import Button from '../../../UI/Button';
import DateInput from '../../../UI/DateInput';

// Wrapper to render Map component with no SSR
const MapNoSSR = dynamic(() => import('../../../UI/Map'), { ssr: false });

import classes from './styled.module.css';

const EditUserForm = ({ savedUser, onCancel, onSubmit }) => {
  const { savedName, savedAddress, savedDescription, savedDob } = savedUser;
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [dob, setDob] = useState('');

  useEffect(() => {
    setName(savedName);
  }, [savedName]);

  useEffect(() => {
    setAddress(savedAddress);
  }, [savedAddress]);

  useEffect(() => {
    setDescription(savedDescription);
  }, [savedDescription]);

  useEffect(() => {
    setDob(savedDob);
  }, [savedDob]);

  const updateUserHandler = () => {
    onSubmit({
      variables: {
        updateUserId: savedUser._id.toString(),
        data: {
          name,
          description,
          address,
          dob,
        },
      },
    });
    onCancel();
  };

  return (
    <>
      <h1 className="heading">Edit user</h1>
      <div className="flex-center" style={{ marginTop: '64.5px' }}>
        {savedAddress && (
          <div className={classes['map-wrapper']}>
            <MapNoSSR address={savedAddress}>
              {({ TileLayer, Marker, Popup }) => (
                <>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={DEFAULT_CENTER}>
                    <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                  </Marker>
                </>
              )}
            </MapNoSSR>
          </div>
        )}

        <div className={classes['input-group']}>
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
              width: '100%',
            }}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
          />

          <Input
            label="Location"
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
      </div>
      <div className={classes['actions-wrapper']}>
        <Button
          isPrimary
          value="Save"
          onClick={updateUserHandler}
          customstyles={{ marginRight: '62px' }}
        />
        <Button value="Cancel" onClick={onCancel} />
      </div>
    </>
  );
};

export default EditUserForm;
