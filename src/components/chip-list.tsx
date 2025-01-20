import Chip from './chip';
import type { ChipList as ChipListType } from '@/types/chip';
import './chip-list.css';
import { useState } from 'react';

interface ChipListProps {
  items: ChipListType;
}

function ChipList({ items }: ChipListProps) {
  const [pressedIndex, setPressedIndex] = useState<number>(0);

  const handleToggle = (willChangePressedIndex: number) => {
    setPressedIndex(willChangePressedIndex);
  };

  return (
    <ul className="ChipList">
      {items.map((item, index) => {
        const isPressed = index === pressedIndex;
        return (
          <li key={item.id}>
            <Chip
              item={item}
              pressed={isPressed}
              onToggle={handleToggle}
              index={index}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ChipList;
