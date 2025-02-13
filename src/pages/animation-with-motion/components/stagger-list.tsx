import { tm } from '@/utils/tw-merge';
import { animate, stagger } from 'motion';
import { useEffect, useRef } from 'react';

export default function StaggerList() {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const listElement = listRef.current;

    if (listElement) {
      const listItems = listElement.querySelectorAll('li');

      animate(
        listItems,
        {
          y: [100, -20, 0],
          opacity: [0, 1],
        },
        {
          delay: stagger(0.05),
        }
      );
    }
  }, []);

  return (
    <ul className="flex gap-5" ref={listRef}>
      {Array(4)
        .fill(null)
        .map((_, index) => (
          <li
            key={index}
            className={tm(
              'flex justify-center items-center size-16 rounded-lg',
              'size-10 bg-react text-white text-lg font-medium'
            )}
          >
            {index + 1}
          </li>
        ))}
    </ul>
  );
}
