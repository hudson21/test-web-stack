import classes from './styled.module.css';

const Button = ({ value, onClick, disabled, isPrimary, customstyles }) => {
  return (
    <button
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

export default Button;
