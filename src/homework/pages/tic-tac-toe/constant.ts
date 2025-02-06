/* -------------------------------------------------------------------------- */
/*                                    게임 상수                                   */
/* -------------------------------------------------------------------------- */

export const INITIAL_CELLS = Array(9).fill(null);

export enum PLAYER {
  ONE = '⭐',
  TWO = '🦝',
}

export type Player = null | PLAYER.ONE | PLAYER.TWO;

export type Cells = Player[];

// 게임의 승리 조건
const WIN_CONDITION = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export type Winner = {
  player: PLAYER;
  condition: [number, number, number];
} | null;

export const getWinner = (cells: Cells): Winner => {
  let winner = null;

  // 승리조건 순환
  for (const [i, j, k] of WIN_CONDITION) {
    // 승리 조건에 해당하는 위치에 말판이 일치하는지 검사-
    const player = cells.at(i);

    if (player && cells.at(j) === player && cells.at(k) === player) {
      winner = {
        player,
        condition: [i, j, k],
      };
      break;
    }
  }

  return winner as Winner;
};
