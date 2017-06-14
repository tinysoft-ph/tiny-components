import React from 'react';
import PropTypes from 'prop-types';

const Button = ( {
    children,
    className,
    onClick,
} ) => {
  return (
    <button
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf( ['default', 'primary', 'success', 'danger'] ).isRequired,
};

Button.defaultProps = {
  type: 'default',
};

export default Button;
