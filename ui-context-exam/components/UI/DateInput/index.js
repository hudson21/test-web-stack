import PropTypes from 'prop-types';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateInput = (props) => {
  const { selected, onChange, label, customstyles } = props;

  return (
    <div style={{ ...customstyles }}>
      {label && <label className="label">{label}</label>}
      <DatePicker
        onChange={(date) => onChange(date)}
        selected={selected}
        {...props}
      />
    </div>
  );
};

Date.propTypes = {
  selected: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  label: PropTypes.string,
  customstyles: PropTypes.object,
};

export default DateInput;
