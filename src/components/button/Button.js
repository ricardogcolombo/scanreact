import React, {
    PropTypes
} from 'react';

const Button = ({
        onClick,
        onTouchCancel,
        onTouchEnd,
        onTouchMove,
        onTouchStart,
        text,
        className
    }) =>
    (
        <button
        onTouchCancel={onTouchCancel}
        onTouchEnd={onTouchEnd}
        onTouchMove={onTouchMove}
        onTouchStart={onTouchStart}
        onClick={onClick}
        className={className}
    >
   {text}
   </button>
    )

Button.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Button
