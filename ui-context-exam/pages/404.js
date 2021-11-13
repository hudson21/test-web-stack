import { FaSadTear } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <div
      className="flex-column"
      style={{ height: '65vh', width: '100%', color: 'var(--red-color)' }}
    >
      <h1 className="heading">
        The page you are looking for could not be found.
      </h1>
      <FaSadTear
        size={65}
        style={{ marginTop: '30px' }}
        color={'var(--red-color)'}
      />
    </div>
  );
};

export default NotFoundPage;
