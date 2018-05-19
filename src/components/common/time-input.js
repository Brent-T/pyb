import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import { formatHHMMSS, isHHMMSSFormat } from '../../lib/date-time';

const MASK = [/\d/, /\d/, ':', /\d/, /\d/, ':', /\d/, /\d/];
const INVALID_STYLES = { boxShadow: '0 0 0 2px #F00', outline: 'none' };

const TimePicker = ({ name, value, onChange }) => {
  const placeholder = formatHHMMSS(Date.now());
  const styles = getStyles(value);

  return (
    <MaskedInput
      type='text'
      name={name}
      placeholder={placeholder}
      value={value}
      style={styles}
      mask={MASK}
      onChange={onChange} />
  );
};

function getStyles(value) {
  const isValid = isHHMMSSFormat(value);
  return !isValid
    ? INVALID_STYLES
    : {};
}

TimePicker.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func,
};

TimePicker.defaultProps = {
  name: 'time-picker',
  value: formatHHMMSS(Date.now()),
  onChange: () => {},
};

export default TimePicker;
