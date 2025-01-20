import { Chip as ChipType } from '@/types/chip';
import './chip.css';

interface ChipProps {
  item: ChipType;
}

function Chip({ item }: ChipProps) {
  const handleToggle = () => {
    console.log('ToggleChip');
  };

  return (
    <span
      role="button"
      aria-pressed={true}
      tabIndex={0}
      onClick={handleToggle}
      className="Chip"
    >
      {item.label}
    </span>
  );
}

export default Chip;
