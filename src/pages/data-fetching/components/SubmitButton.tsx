import { PlusSolid, Spinner } from '@mynaui/icons-react';
import { useFormStatus } from 'react-dom';

export default function SubmitButton({
  size = 24,
  ...restProps
}: {
  size?: number;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="p-1 bg-react text-white my-1 cursor-pointer"
      aria-label="추가"
      {...restProps}
    >
      {pending ? (
        <Spinner size={size} className="animate-spin opacity-50" />
      ) : (
        <PlusSolid size={size} />
      )}
    </button>
  );
}
