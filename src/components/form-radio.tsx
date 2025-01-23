import { useId, type ComponentProps } from 'react';

interface FormInputProps extends ComponentProps<'input'> {
  label: string;
}

// type FormInputProps = ComponentProps<'input'> & {
//   label: string;
// };

function FormRadio({ label, ...restProps }: FormInputProps) {
  const inputId = useId();

  return (
    <div className="formRadioControl">
      <input type="radio" id={inputId} {...restProps} />
      <label htmlFor={inputId}>{label}</label>
    </div>
  );
}

export default FormRadio;
