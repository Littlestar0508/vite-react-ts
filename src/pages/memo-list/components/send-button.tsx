import { tm } from '@/utils/tw-merge';
import { SendSolid } from '@mynaui/icons-react';
import { useFormStatus } from 'react-dom';
import Loading from './loading';

export default function SendButton() {
  const { pending } = useFormStatus();
  const buttonLabel = pending ? '전송 중...' : '작성';

  return (
    <button
      type="submit"
      aria-label={buttonLabel}
      title={buttonLabel}
      className={tm(
        'cursor-pointer self-start',
        'p-1 bg-react text-white/50 rounded-sm',
        'hover:text-sky-300'
      )}
    >
      {pending ? <Loading /> : <SendSolid size={20} />}
    </button>
  );
}
