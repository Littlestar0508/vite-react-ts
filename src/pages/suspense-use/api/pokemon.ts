import type { Pokemon } from '../types';

const _fetchPokemon = async (id: number) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  return data as Pokemon;
};

// Client Component + Server Component (e.g: Remix, Astro, Next.js, ...)
// Client Component (e.g: Vite, Create React App, ...)

// use() 함수를 클라이언트 컴포넌트에서 사용할 때 무한 루프에 빠지는 이유

// 클라이언트 캐시(Client Cache) : 데이터 메모리
// Suspense => use(Promise) => Loop
// Suspense => use(Promise) => Cache => 1회만 데이터 요청

const cache = new Map<number, Promise<Pokemon>>();

export const fetchPokemon = (id: number) => {
  const pokemonPromise = cache.get(id) ?? _fetchPokemon(id);
  cache.set(id, pokemonPromise);
  return pokemonPromise;
};
