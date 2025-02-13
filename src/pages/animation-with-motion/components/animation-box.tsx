import { tm } from '@/utils/tw-merge';
import { animate } from 'motion';
import { useEffect, useRef } from 'react';

export default function AnimationBox({
  className,
  ...restProps
}: React.ComponentProps<'div'>) {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const boxElement = boxRef.current;
    if (boxElement) {
      animate(
        boxElement,
        {
          // x: 240 /* 240px 만큼 이동 */,
          rotateY: 360,
        },
        {
          type: 'spring',
          duration: '1',
        }
      );
    }
  }, []);

  return (
    <div
      ref={boxRef}
      {...restProps}
      className={tm(
        'flex justify-center items-center',
        'size-40',
        'bg-react text-white text-lg font-medium',
        'rounded-xl',
        className
      )}
      {...restProps}
    />
  );
}
