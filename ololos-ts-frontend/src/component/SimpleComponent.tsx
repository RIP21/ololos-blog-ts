import * as React from 'react';
import * as classNames from 'classnames';

interface ButtonProps extends React.Props<any> {
  onClick?: () => void;
  type?: string;
  className?: string;
  id?: string;
  testid?: string;
}

export default function Button({
  onClick = null,
  type = 'button',
  className = '',
  id = '',
  testid = '',
  children = null
}: ButtonProps) {
  const buttonClasses = classNames('btn', 'btn-primary', className);

  return (
    <button
      data-testid={ testid }
      id={ id }
      type={ type }
      className={ buttonClasses }
      onClick={ onClick }>
      { children }
    </button>
  );
}
