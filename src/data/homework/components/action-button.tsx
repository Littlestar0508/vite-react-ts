import type { ComponentProps } from 'react';
import S from './action-button.module.css';

function ActionButton({
  type = 'submit',
  className = '',
  ...buttonProps
}: ComponentProps<'button'>) {
  const classNames = `${S.actionButton} ${className}`.trim();

  return <button className={classNames} type={type} {...buttonProps} />;
}

export default ActionButton;
