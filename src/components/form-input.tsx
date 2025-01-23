import { useId, type ComponentProps } from 'react';

interface FormInputProps extends ComponentProps<'input'> {
  label: string;
}

// type FormInputProps = ComponentProps<'input'> & {
//   label: string;
// };

function FormInput({ label, type, ...restProps }: FormInputProps) {
  const inputId = useId();

  let radioOrCheckboxLabel = null;
  if (type === 'radio' || type === 'checkbox') {
    radioOrCheckboxLabel = <label htmlFor={inputId}>{label}</label>;
  }

  return (
    <div className="formControl">
      {!radioOrCheckboxLabel && <label htmlFor={inputId}>{label}</label>}
      <input id={inputId} {...restProps} />
      {radioOrCheckboxLabel}
    </div>
  );
}

export default FormInput;
