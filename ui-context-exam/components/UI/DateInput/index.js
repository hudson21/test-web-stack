import { forwardRef } from 'react';
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

export default DateInput;
