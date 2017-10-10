import _ from 'lodash';
import React from 'react';
import classNames from 'classnames';
import './calculator_button.css';

const Button = props => {
  const {
    children,
    size, // Integer
    value, // String
    onButtonPressed, // Function
    light, // Boolean
    grey, // Boolean
    orange // Boolean
  } = props;

  var btnClass = classNames({
    button: true,
    f1: size === 1 || _.isUndefined(size),
    f2: size === 2,
    f3: size === 3,
    light: light || (_.isUndefined(grey) && _.isUndefined(orange)),
    grey: grey,
    orange: orange
  });
  return (
    <button
      type="button"
      className={btnClass}
      onClick={() => onButtonPressed(value)}
    >
      <span>{children}</span>
    </button>
  );
};

export { Button };
