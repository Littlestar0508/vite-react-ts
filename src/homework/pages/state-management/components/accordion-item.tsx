import { tm } from '@/utils/tw-merge';

export interface AccordionItemType {
  id: string;
  title: string;
  children?: React.ReactNode;
  isOpen?: boolean;
}

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  open?: boolean;
  onUpdate?: () => void;
}

export default function AccordionItem({
  title,
  children,
  open = false,
  onUpdate,
}: AccordionItemProps) {
  const handleToggle = () => {
    console.log('toggle');
    onUpdate?.();
  };

  return (
    <div className={tm('flex flex-col space-y-2', 'mb-8 w-full')}>
      <button
        type="button"
        className={tm(
          'text-xl font-medium text-primary-500',
          'hover:text-primary-700',
          'cursor-pointer'
        )}
        onClick={handleToggle}
      >
        {title}
      </button>
      <div
        className={tm(
          { hidden: !open },
          'text-sm text-slate-800 leading-[1.5]',
          '*:mb-3',
          // 전환(transition)
          // [from]
          'opacity-50 -translate-y-2 h-0',
          // @starting-style
          'starting:opacity-0 starting:-translate-y-2 starting:h-0',
          'transition-all transition-discrete duration-500 delay-100',
          // [to]
          { 'opacity-100 translate-y-0 h-50': open },
          'transition-discrete'
        )}
      >
        {children}
      </div>
    </div>
  );
}
