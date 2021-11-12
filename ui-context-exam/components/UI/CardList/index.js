import Card from '../Card';

const CardList = ({ users, openUpdateModal, deleteUserHandler }) => {
  return (
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
  );
};

export default CardList;
