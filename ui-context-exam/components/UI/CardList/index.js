import Card from '../Card';

const CardList = ({ users, openUpdateModal, deleteUserHandler }) => {
  return (
    <div className="flex-center" style={{ flexWrap: 'wrap' }}>
      {users.map((user) => (
        <Card
          key={user.id}
          openUpdateModal={() => openUpdateModal(user)}
          deleteUserHandler={() => deleteUserHandler(user.id)}
          {...user}
        />
      ))}
    </div>
  );
};

export default CardList;
