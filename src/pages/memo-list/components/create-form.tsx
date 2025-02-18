import { addMemoItem } from '../lib/api';
import type { MemoItemInsert } from '../lib/supabase-client';
import { useId } from 'react';
import SendButton from './send-button';
import delay from '@/utils/delay';

export default function CreateForm() {
  const titleId = useId();
  const contentId = useId();

  const handleAddMemo = async (formData: FormData) => {
    const id = Math.floor(Math.random() * 1000);
    const title = (formData.get('title') as string).trim();
    const content = (formData.get('content') as string).trim();

    const newMemoItem = {
      id,
      title,
      content,
    } as MemoItemInsert;

    await delay(600);

    await addMemoItem(newMemoItem);
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
        <SendButton />
      </form>
    </section>
  );
}
