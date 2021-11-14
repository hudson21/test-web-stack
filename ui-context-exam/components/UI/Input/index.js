import PropTypes from 'prop-types';

import classes from './styled.module.css';

const Input = ({
  onChange,
  value,
  placeholder,
  label,
  customstyles,
  fullwidth,
  ...rest
}) => {
  return (
    <div className="flex-column" style={{ ...customstyles }}>
      {label && (
        <label className="label" data-test="input-label">
          {label}
        </label>
      )}
      <input
        {...rest}
        data-test="input"
        className={classes.input}
        style={{ width: fullwidth ? '100%' : '' }}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

Input.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  customstyles: PropTypes.object,
  fullwidth: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default Input;
