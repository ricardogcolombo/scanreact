import React, {
  PropTypes
} from 'react';

const Button = ({ onClick, text }) =>
  (
    <button
        onClick={onClick}
    >
   {text}
   </button>
  )

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Button
