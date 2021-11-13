import PropTypes from 'prop-types';

import classes from './styled.module.css';

import { FaPen, FaTrash } from 'react-icons/fa';
import Avatar from '../Avatar';

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
      <Avatar name={name} id={_id} />
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignContent: 'space-between',
        }}
      >
        <h2 className="sub-heading" data-test="sub-heading-card">
          {name}
        </h2>
        <p className={classes['date']}>
          created <span>{transformedDate.toDateString()}</span>
        </p>
      </div>

      <p className="description">{description}</p>
    </div>
  );
};

Card.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  createdAt: PropTypes.string,
  openUpdateModal: PropTypes.func,
  deleteUserHandler: PropTypes.func,
};

export default Card;
