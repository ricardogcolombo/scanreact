import React, {
  PropTypes
} from 'react';

const Button = ({ onClick, text ,className}) =>
  (
    <button
        onClick={onClick}
        className={className}
    >
   {text}
   </button>
  )

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Button
