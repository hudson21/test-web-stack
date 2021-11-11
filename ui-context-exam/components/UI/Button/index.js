import classes from './styled.module.css';

const Button = ({ value, onClick, disabled, isPrimary, customStyles }) => {
  return (
    <button
      style={{ ...customStyles }}
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
