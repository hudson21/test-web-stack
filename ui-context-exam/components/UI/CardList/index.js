import Card from '../Card';

const CardList = ({ users, openUpdateModal }) => {
  return (
    <div className="flex-center" style={{ flexWrap: 'wrap' }}>
      {users.map((user) => (
        <Card
          key={user.id}
          openUpdateModal={() => openUpdateModal(user)}
          {...user}
        />
      ))}
    </div>
  );
};

export default CardList;
