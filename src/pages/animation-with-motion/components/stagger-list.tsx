import { tm } from '@/utils/tw-merge';
import { animate } from 'motion';
import { useEffect, useRef } from 'react';

export default function StaggerList() {
  const itemMapRef = useRef<null | Map<number, HTMLLIElement>>(null);

  const getItemMap = () => {
    // 최초 렌더링 시, Map 객체 생성
    if (!itemMapRef.current) {
      itemMapRef.current = new Map();
    }

    // 이후 렌더링 시에는 기억된 Map 객체 반환
    return itemMapRef.current;
  };

  useEffect(() => {
    const itemMap = getItemMap();
    const items = Array.from(itemMap.values());

    // stagger 애니메이션
    items.forEach((item, index) => {
      // keyframes 애니메이션
      animate(
        item,
        {
          y: [100, -10, 0],
          opacity: [0, 1],
        },
        {
          delay: 0.05 * index,
        }
      );
    });
  }, []);

  return (
    <ul className="flex gap-5">
      {Array(4)
        .fill(null)
        .map((_, index) => (
          <li
            ref={(element) => {
              // Map 객체에 수집
              const itemMap = getItemMap();
              if (element) {
                itemMap.set(index, element);
              }

              return () => {
                itemMap.delete(index);
              };
            }}
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
