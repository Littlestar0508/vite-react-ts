import S from './style.module.css';
import clsx from 'clsx/lite';

function ActionButton({
  type = 'submit',
  className = '',
  ...buttonProps
}: React.ComponentProps<'button'>) {
  const buttonStyles = clsx(S.actionButton, className);

  return <button type={type} className={buttonStyles} {...buttonProps} />;
}

export default ActionButton;
