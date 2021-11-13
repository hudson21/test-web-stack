import Link from 'next/link';
import { FaUndoAlt } from 'react-icons/fa';

const ErrorPage = () => {
  return (
    <div className="flex-column" style={{ height: '65vh', width: '100%' }}>
      <h1 className="heading">
        Something went wrong. Please{' '}
        <Link href="/1" style={{ color: 'var(--red-color)' }}>
          reload the page
        </Link>
      </h1>
      <FaUndoAlt
        size={65}
        style={{ marginTop: '30px' }}
        color={'var(--red-color)'}
      />
    </div>
  );
};

export default ErrorPage;
