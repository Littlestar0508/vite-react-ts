import { Chip as ChipType } from '@/types/chip';
import './chip.css';

interface ChipProps {
  item: ChipType;
  pressed?: boolean;
  index: number;
  onToggle?: (willChangePressedIndex: number) => void;
}

function Chip({ item, pressed = false, onToggle, index }: ChipProps) {
  const handleToggle = () => {
    if (index > -1) {
      onToggle?.(index);
    }
  };
  const handleKey = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    const keyboardKey: string = e.code;

    switch (keyboardKey) {
      case 'Space':
      case 'Enter':
        handleToggle();
        break;
    }
  };

  return (
    <span
      role="button"
      aria-pressed={pressed}
      aria-disabled={pressed}
      tabIndex={0}
      onClick={handleToggle}
      onKeyDown={handleKey}
      className="Chip"
    >
      {item.label}
    </span>
  );
}

export default Chip;
