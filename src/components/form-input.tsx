import { useId, type ComponentProps } from 'react';
import FormRadioOrCheckbox from './form-radio-or-checkbox';
import './form-input.css';

type FormInputProps = ComponentProps<'input'> & {
  label: string;
};

function FormInput({ label, type, ...restProps }: FormInputProps) {
  const inputId = useId();

  if (type === 'radio' || type === 'checkbox') {
    return <FormRadioOrCheckbox label={label} type={type} {...restProps} />;
  }

  return (
    <div className="formControl">
      <label htmlFor={inputId}>{label}</label>
      <input id={inputId} {...restProps} type={type} />
    </div>
  );
}

export default FormInput;
