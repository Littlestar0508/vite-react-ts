import { tm } from '@/utils/tw-merge';
import type { MemoItem as MemoItemType } from '../lib/supabase-client';
import { EditOne, TrashOne } from '@mynaui/icons-react';
import { deleteMemoItem } from '../lib/api';

interface MemoItemProps {
  item: MemoItemType;
}

export default function MemoItem({ item }: MemoItemProps) {
  const handleDelete = async () => {
    const response = await deleteMemoItem(item.id);

    console.log(response);
  };

  return (
    <li
      key={item.id}
      className="flex flex-col gap-1.5 p-4 bg-react text-white rounded-sm"
    >
      <h3 className="font-light tracking-wide text-xl text-sky-300">
        {item.title}
      </h3>
      <p className="text-sm text-slate-200 leading-relaxed">{item.content}</p>
      <div role="group">
        <button
          type="button"
          aria-label="수정"
          title="수정"
          className={tm(
            'cursor-pointer',
            'size-6 opacity-75 hover:opacity-100'
          )}
        >
          <EditOne size={20} />
          {/* <EditOneSolid size={20} /> */}
        </button>
        <button
          type="button"
          aria-label="삭제"
          title="삭제"
          onClick={handleDelete}
          className={tm(
            'cursor-pointer',
            'size-6 opacity-75 hover:opacity-100'
          )}
        >
          <TrashOne size={20} />
        </button>
      </div>
    </li>
  );
}
