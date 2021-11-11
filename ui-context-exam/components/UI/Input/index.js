import classes from './styled.module.css';

const Input = ({
  onChange,
  value,
  placeholder,
  label,
  customStyles,
  fullWidth,
}) => {
  return (
    <div
      className={`flex-column ${classes['input-group']}`}
      style={{ ...customStyles }}
    >
      {label && <label className={classes.label}>{label}</label>}
      <input
        className={classes.input}
        style={{ width: fullWidth ? '100%' : '' }}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
