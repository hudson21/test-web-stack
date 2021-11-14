import Card from '../Card';

import { FaRegSmileBeam } from 'react-icons/fa';

const CardList = ({ users, openUpdateModal, deleteUserHandler }) => {
  return (
    <>
      {users.length > 0 ? (
        <div className="flex-center" style={{ flexWrap: 'wrap' }}>
          {users.map((user) => (
            <Card
              key={user._id}
              openUpdateModal={() => openUpdateModal(user)}
              deleteUserHandler={() => deleteUserHandler(user._id)}
              {...user}
            />
          ))}
        </div>
      ) : (
        <div className="flex-column">
          <h1 style={{ textAlign: 'center' }}>
            There are not users. Please add one or look for another one
          </h1>
          <FaRegSmileBeam style={{ marginTop: '20px' }} size={60} />
        </div>
      )}
    </>
  );
};

export default CardList;
