import classes from './styled.module.css';

import { FaPen, FaTrash } from 'react-icons/fa';

import { BASE_UNSPLASH_URL } from '../../../constans';

const Card = ({
  _id,
  name,
  description,
  createdAt,
  openUpdateModal,
  deleteUserHandler,
}) => {
  const transformedDate = new Date(+createdAt);

  return (
    <div className={`flex-column ${classes.card}`}>
      <div className={classes['card-actions']}>
        <FaPen onClick={openUpdateModal} />
        <FaTrash onClick={deleteUserHandler} />
      </div>
      <img alt={`${name} image`} src={BASE_UNSPLASH_URL(_id)} />
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignContent: 'space-between',
        }}
      >
        <h2 className="sub-heading">{name}</h2>
        <p className={classes['date']}>
          created <span>{transformedDate.toDateString()}</span>
        </p>
      </div>

      <p className="description">{description}</p>
    </div>
  );
};

export default Card;
