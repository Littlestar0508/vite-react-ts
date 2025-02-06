import { useState } from 'react';
import Cell from './cell';
import { tm } from '@/utils/tw-merge';
import { type Cells, getWinner, INITIAL_CELLS, PLAYER } from '../constant';

export default function Grid() {
  // 상태(게임 보드 3x3)
  const [cells, setCells] = useState<Cells>(INITIAL_CELLS);

  const length = cells.filter((cell) => Boolean(cell)).length;

  // [파생된 상태]
  // 다음 플레이어는?
  const nextPlayer = length % 2 === 0 ? PLAYER.ONE : PLAYER.TWO;

  // 현재 이번 턴에 게임 승리자가 있나요?
  const winner = getWinner(cells);

  // [이벤트 핸들러]
  // 게임 상태 업데이트
  const handlePlay = (index: number) => {
    // 승리자가 있다면 game over
    if (winner) {
      alert(`GAME OVER!\nWinner ${winner.player}`);
      return;
    }

    // 없다면 정상 진행
    const nextCells = cells.map((cell, i) => (index !== i ? cell : nextPlayer));
    setCells(nextCells);
  };

  return (
    <div className={tm('grid grid-rows-3 grid-cols-3 gap-1')}>
      {cells.map((cell, index) => {
        let winnerClass = '';
        if (winner) {
          const [x, y, z] = winner.condition;
          if (index === x || index === y || index === z) {
            winnerClass = 'bg-blue-700/30 outline-3 outline-blue-700';
          }
        }

        return (
          <Cell
            key={index}
            onPlay={() => handlePlay(index)}
            className={winnerClass}
          >
            {cell}
          </Cell>
        );
      })}
    </div>
  );
}
