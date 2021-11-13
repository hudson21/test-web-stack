import PropTypes from 'prop-types';
import { BASE_UNSPLASH_URL } from '../../../constans';
import classes from './styled.module.css';

const Avatar = ({ name, id }) => {
  return (
    <img
      className={classes.avatar}
      alt={`${name} image`}
      src={BASE_UNSPLASH_URL(id)}
    />
  );
};

Avatar.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
};

export default Avatar;
