import classes from './styled.module.css';

import { FaPen, FaTrash } from 'react-icons/fa';

import { BASE_UNSPLASH_URL } from '../../../constans';

const Card = ({ id, name, description, createdAt }) => {
  return (
    <div className={`flex-column ${classes.card}`}>
      <div className={classes['card-actions']}>
        <FaPen />
        <FaTrash />
      </div>
      <img alt={`${name} image`} src={BASE_UNSPLASH_URL(id)} />
      <h2 className="sub-heading">{name}</h2>
      <p className="description">{description}</p>
    </div>
  );
};

export default Card;
