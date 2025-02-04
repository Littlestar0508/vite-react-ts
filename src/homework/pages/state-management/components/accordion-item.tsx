import { useState } from 'react';
import { tm } from '@/utils/tw-merge';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

export default function AccordionItem({ title, children }: AccordionItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const handleToggle = () => setIsVisible((v) => !v);

  return (
    <div className={tm('flex flex-col space-y-2', 'mb-8')}>
      <button
        type="button"
        onClick={handleToggle}
        className={tm(
          'text-xl font-medium text-primary-500',
          'cursor-pointer',
          'hover:text-primary-700'
        )}
      >
        {title}
      </button>
      <div
        className={tm(
          { hidden: !isVisible },
          'text-sm text-slate-800 leading-[1.5]',
          '*:mb-3',
          // 전환(transition)
          // [from]
          'opacity-50 -translate-y-2',
          // @starting-style
          'starting:opacity-0 starting:-translate-y-2',
          'transition-all transition-discrete duration-500',
          // [to]
          { 'opacity-100 translate-y-0': isVisible },
          'transition-discrete'
        )}
      >
        {children}
      </div>
    </div>
  );
}
