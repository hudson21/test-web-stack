import { useRouter } from 'next/router';
import { FaUndoAlt, FaCarCrash } from 'react-icons/fa';

const ErrorPage = () => {
  const router = useRouter();

  return (
    <div className="flex-column" style={{ height: '65vh', width: '100%' }}>
      <FaCarCrash
        size={65}
        style={{ marginBottom: '30px', color: 'var(--red-color)' }}
      />

      <h1 className="heading" style={{ color: 'var(--red-color)' }}>
        Something went wrong.
      </h1>

      <h1
        onClick={() => router.reload(window.location.pathname)}
        on
        className="heading"
        style={{ cursor: 'pointer' }}
      >
        Please go to the Home page
      </h1>

      <FaUndoAlt
        onClick={() => router.reload(window.location.pathname)}
        size={65}
        style={{ marginTop: '30px', cursor: 'pointer' }}
        color={'var(--red-color)'}
      />
    </div>
  );
};

export default ErrorPage;
