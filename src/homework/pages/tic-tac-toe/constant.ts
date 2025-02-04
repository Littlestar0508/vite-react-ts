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
