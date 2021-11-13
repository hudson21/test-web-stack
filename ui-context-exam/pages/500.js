import Link from 'next/link';
import { FaUndoAlt, FaCarCrash } from 'react-icons/fa';

const ErrorPage = () => {
  return (
    <div className="flex-column" style={{ height: '65vh', width: '100%' }}>
      <FaCarCrash
        size={65}
        style={{ marginBottom: '30px', color: 'var(--red-color)' }}
      />

      <h1 className="heading" style={{ color: 'var(--red-color)' }}>
        Something went wrong.
      </h1>

      <Link href="/1">
        <h1 className="heading">Please go to the Home page</h1>
      </Link>

      <Link href="/1">
        <FaUndoAlt
          size={65}
          style={{ marginTop: '30px' }}
          color={'var(--red-color)'}
        />
      </Link>
    </div>
  );
};

export default ErrorPage;
