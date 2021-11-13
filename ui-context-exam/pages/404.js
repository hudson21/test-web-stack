import Link from 'next/link';
import { FaSadTear, FaRocket } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <div
      className="flex-column"
      style={{ height: '65vh', width: '100%', color: 'var(--red-color)' }}
    >
      <FaSadTear
        size={65}
        style={{ marginBottom: '30px' }}
        color={'var(--red-color)'}
      />
      <h1 className="heading">
        The page you are looking for could not be found.
      </h1>
      <Link href="/1">
        <h1
          className="heading"
          style={{ color: 'var(--black-color)', marginTop: '10px' }}
        >
          Click here to go to the Home page
        </h1>
      </Link>

      <Link href="/1">
        <FaRocket
          size={65}
          style={{ marginTop: '30px', color: 'var(--black-color)' }}
        />
      </Link>
    </div>
  );
};

export default NotFoundPage;
