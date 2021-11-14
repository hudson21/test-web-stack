import Card from '../Card';

import { FaRegSmileBeam } from 'react-icons/fa';

const CardList = ({ users, openUpdateModal, deleteUserHandler }) => {
  return (
    <div className="flex-center" style={{ flexWrap: 'wrap' }}>
      {users.length > 0 ? (
        users.map((user) => (
          <Card
            key={user._id}
            openUpdateModal={() => openUpdateModal(user)}
            deleteUserHandler={() => deleteUserHandler(user._id)}
            {...user}
          />
        ))
      ) : (
        <div className="flex-column" style={{ textAlign: 'center' }}>
          <h1>There are not users. Please add one or look for another one</h1>
          <FaRegSmileBeam style={{ marginTop: '20px' }} size={60} />
        </div>
      )}
    </div>
  );
};

export default CardList;
