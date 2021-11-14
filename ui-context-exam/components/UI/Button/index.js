import PropTypes from 'prop-types';

import classes from './styled.module.css';

const Button = ({
  value,
  onClick,
  disabled,
  isPrimary,
  customstyles,
  ...rest
}) => {
  return (
    <button
      {...rest}
      style={{ ...customstyles }}
      className={`${classes.button} ${
        isPrimary ? classes['primary-button'] : classes['secondary-button']
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  isPrimary: PropTypes.bool,
  customstyles: PropTypes.object,
};

export default Button;
