import classes from './styled.module.css';

const Input = ({ onChange, value, placeholder, label }) => {
  return (
    <>
      {label && <label className={classes.label}>{label}</label>}
      <input
        className={classes.input}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
