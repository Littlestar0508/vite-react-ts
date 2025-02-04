import { useState } from 'react';
import Cell from './cell';
import { tm } from '@/utils/tw-merge';
import { type Cells, INITIAL_CELLS, PLAYER } from '../constant';

export default function Grid() {
  // 상태(게임 보드 3x3)
  const [cells] = useState<Cells>(INITIAL_CELLS);
  const [order, setOrder] = useState<number>(0);

  // [파생된 상태]
  // 다음 플레이어는?
  const nextPlayer = order % 2 === 0 ? PLAYER.ONE : PLAYER.TWO;

  // [이벤트 핸들러]
  // 게임 상태 업데이트
  const handlePlay = (index: number) => {
    const nextOrder = order + 1;
    setOrder(nextOrder);

    console.log(index, 'click', nextPlayer);
  };

  return (
    <div className={tm('grid grid-rows-3 grid-cols-3 gap-1')}>
      {cells.map((_cell, index) => {
        return (
          <Cell key={index} onPlay={() => handlePlay(index)}>
            {index}
          </Cell>
        );
      })}
    </div>
  );
}
