import { tm } from '@/utils/tw-merge';
import { addMemoItem } from '../lib/api';
import type { MemoItemInsert } from '../lib/supabase-client';
import { SendSolid } from '@mynaui/icons-react';
import { useId } from 'react';

export default function CreateForm() {
  const titleId = useId();
  const contentId = useId();

  const handleAddMemo = async (formData: FormData) => {
    const newMemoItem = {} as MemoItemInsert;

    console.log(formData.get('title'));
    return;

    const { error, data } = await addMemoItem(newMemoItem);

    if (error) {
      throw error;
    }

    if (data) {
      // 화면 업데이트
    }
  };

  return (
    <section className="flex flex-col gap-2">
      <h2 className="font-semibold text-xl">메모작성</h2>
      <form
        action={handleAddMemo}
        className="flex flex-col gap-2 border-3 border-react rounded-sm p-3"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor={titleId} className="font-bold">
            제목
          </label>
          <input
            type="text"
            name="title"
            id={titleId}
            placeholder="제목"
            className="bg-react text-white py-1.5 px-2.5 rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor={contentId} className="font-bold">
            제목
          </label>
          <textarea
            rows={3}
            name="content"
            id={contentId}
            placeholder="내용을 작성하세요"
            className="bg-react text-white py-1.5 px-2.5 rounded-sm"
          />
        </div>
        <button
          type="submit"
          aria-label="작성"
          title="작성"
          className={tm(
            'cursor-pointer self-start',
            'p-1 bg-react text-white/50 rounded-sm',
            'hover:text-sky-300'
          )}
        >
          <SendSolid size={20} />
        </button>
      </form>
    </section>
  );
}
