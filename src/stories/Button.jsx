import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Es este un botón principal?
   */
  primary: PropTypes.bool,
  /**
   * Color de fondo
   */
  backgroundColor: PropTypes.string,
  /**
   * Largo del borón
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Contenido del botón
   */
  label: PropTypes.string.isRequired,
  /**
   * Función al presionar
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
