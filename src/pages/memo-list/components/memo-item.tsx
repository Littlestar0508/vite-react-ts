import { tm } from '@/utils/tw-merge';
import type {
  MemoItem as MemoItemType,
  MemoItemUpdate,
} from '../lib/supabase-client';
import { EditOne, EditOneSolid, TrashOne } from '@mynaui/icons-react';
import { deleteMemoItem, editMemoItem } from '../lib/api';
import { useEffect, useRef, useState } from 'react';
import Loading from './loading';
import delay from '@/utils/delay';

interface MemoItemProps {
  item: MemoItemType;
}

export default function MemoItem({ item }: MemoItemProps) {
  // 수정 상태와 업데이트 핸들러
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (isEditing) {
      titleRef.current?.focus();
      console.log(titleRef.current?.textContent);
    }
  }, [isEditing]);

  // 파생된 상태
  const editButtonLabel = isEditing ? '수정 중...' : '수정';

  const handleChangeEditMode = () => {
    setIsEditing(true);
  };

  const handleChangeViewMode = async () => {
    setIsSaving(true);
    const titleElement = titleRef.current!;
    const contentElement = contentRef.current!;
    const currentTime = new Date().toISOString();

    const willEditMemoItem = {
      ...item,
      title: titleElement.textContent,
      content: contentElement.textContent,
      updated_at: currentTime,
    } as MemoItemUpdate;

    await delay(600);
    await editMemoItem(willEditMemoItem);

    setIsSaving(false);
    setIsEditing(false);
  };

  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLParagraphElement>(null);

  // 삭제 상태와 업데이트 핸들러
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    await delay(600);
    await deleteMemoItem(item.id);
    setIsDeleting(false);
  };

  return (
    <li
      key={item.id}
      className={tm(
        'flex flex-col gap-1.5 p-4 bg-react text-white rounded-sm',
        { 'relative bg-react/35': isDeleting || isSaving }
      )}
    >
      {(isDeleting || isSaving) && (
        <Loading
          label={isSaving ? '수정 중...' : '삭제 중...'}
          className="absolute top-1/2 left-1/2 -translate-1/2 text-sky-300 size-20"
        />
      )}
      <h3
        ref={titleRef}
        contentEditable={isEditing}
        suppressContentEditableWarning
        className="font-medium tracking-wide text-lg text-sky-300"
      >
        {item.title}
      </h3>
      <p
        ref={contentRef}
        contentEditable={isEditing}
        suppressContentEditableWarning
        className="text-sm text-slate-200 leading-relaxed flex-1"
      >
        {item.content}
      </p>
      <div role="group">
        <button
          type="button"
          aria-label={editButtonLabel}
          title={editButtonLabel}
          onClick={!isEditing ? handleChangeEditMode : handleChangeViewMode}
          className={tm(
            'cursor-pointer',
            'size-6 opacity-75 hover:opacity-100'
          )}
        >
          {isEditing ? <EditOneSolid size={20} /> : <EditOne size={20} />}
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
