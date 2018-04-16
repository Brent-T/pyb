import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { format as formatDate } from 'date-fns';

const DEFAULT_FORMAT = 'HH:mm:ss';
const timeFormat = new RegExp(/^(?:([01]?\d|2[0-3]):([0-5]?\d):)?([0-5]?\d)$/);

class TimePicker extends Component {
  state = {
    valid: true
  }

  static getDerivedStateFromProps ({ value: nextValue }, { value: prevValue }) {
    if(prevValue !== nextValue) {
      try {
        const value = formatDate(nextValue, DEFAULT_FORMAT);
        return { value, valid: true };
      } catch (err) {
        return { value: nextValue, valid: false };
      }
    }
    return null;
  }

  handleInput = ({ target }) => {
    const { value } = target;
    const valid = timeFormat.test(value);
    this.setState({ value, valid });
  }

  getStyles () {
    const { valid } = this.state;
    return !valid
      ? { outlineStyle: 'solid', outlineColor: '#F00' }
      : {};
  }

  render () {
    const { value } = this.state;
    const { name, onBlur } = this.props;
    const styles = this.getStyles();

    return (
      <input
        name={name}
        value={value}
        style={styles}
        onChange={this.handleInput}
        onBlur={onBlur} />
    );
  }
}

TimePicker.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  format: PropTypes.string,
  onBlur: PropTypes.func,
}

TimePicker.defaultProps = {
  name: 'time-picker',
  value: formatDate(Date.now(), DEFAULT_FORMAT),
  format: DEFAULT_FORMAT,
  onBlur: () => {}
}

export default TimePicker
