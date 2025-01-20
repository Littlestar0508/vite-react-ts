import ChipList from './components/chip-list';
import { useState } from 'react';
import type { ChipList as ChipListType } from '@/types/chip';

function Playground() {
  const [chipData] = useState<ChipListType>([
    {
      id: 1,
      label: '전체',
    },
    {
      id: 2,
      label: '아우터',
    },
    {
      id: 3,
      label: '바지',
    },
    {
      id: 4,
      label: '티셔츠',
    },
    {
      id: 5,
      label: '점퍼',
    },
    {
      id: 6,
      label: '원피스',
    },
    {
      id: 7,
      label: '신발',
    },
  ]);

  return (
    <div className="Playground">
      <h1>PlayGround</h1>
      <ChipList items={chipData}></ChipList>
    </div>
  );
}

export default Playground;
