import styleModule from './form-input.module.css';
import { type ComponentProps, useId } from 'react';

function FormInput({
  label,
  ...inputProps
}: ComponentProps<'input'> & {
  label: string;
}) {
  const id = useId();

  return (
    <div className={styleModule.formInput}>
      <label className={styleModule.formInputLabel} htmlFor={id}>
        {label}
      </label>
      <input id={id} {...inputProps} />
    </div>
  );
}

export default FormInput;
