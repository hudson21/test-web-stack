import Card from '../Card';

const CardList = ({ users }) => {
  return (
    <div className="flex-center" style={{ flexWrap: 'wrap' }}>
      {users.map((user) => (
        <Card key={user.id} {...user} />
      ))}
    </div>
  );
};

export default CardList;
