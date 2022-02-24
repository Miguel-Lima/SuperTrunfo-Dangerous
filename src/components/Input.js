import React from "react";
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { name, type, dataid, value, onChange } = this.props;
    return (
      <label htmlFor={ name }>
          { name }
          <input
          id={ name }
          name={ name }
          type={ type }
          data-testid={ dataid }
          value={ value }
          onChange={ onChange }
          />
          <br/>
      </label>
    )
  }
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    testid: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

export default Input;
