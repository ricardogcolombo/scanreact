import React from 'react';

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

export default Button
