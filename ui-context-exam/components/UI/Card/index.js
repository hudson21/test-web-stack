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
  return (
    <div className={`flex-column ${classes.card}`}>
      <div className={classes['card-actions']}>
        <FaPen onClick={openUpdateModal} />
        <FaTrash onClick={deleteUserHandler} />
      </div>
      <img alt={`${name} image`} src={BASE_UNSPLASH_URL(_id)} />
      <h2 className="sub-heading">{name}</h2>
      <p className="description">{description}</p>
    </div>
  );
};

export default Card;
