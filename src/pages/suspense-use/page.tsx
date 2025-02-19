import Title from '@/components/title';
import { Suspense, useState } from 'react';
import Pokemon from './components/pokemon';
import PokemonSpinner from './components/pokemon-spinner';

const POKEMON_ITEMS = {
  min: 1,
  max: 1302,
};

function SuspenseUsePage() {
  // 1~1302
  const [pokemonId, setPokemonId] = useState(1);

  const handlePrev = () => {
    setPokemonId((pokemonId) => {
      const prevPokemonId = pokemonId - 1;
      return prevPokemonId < POKEMON_ITEMS.min
        ? POKEMON_ITEMS.min
        : prevPokemonId;
    });
  };
  const handleNext = () => {
    setPokemonId((pokemonId) => {
      const nextPokemonId = pokemonId + 1;
      return nextPokemonId > POKEMON_ITEMS.max
        ? POKEMON_ITEMS.max
        : nextPokemonId;
    });
  };

  return (
    <>
      <Title>스트리밍(Streaming)</Title>
      <section className="flex flex-col gap-8">
        <h2 className="font-medium text-2xl">
          Suspense 컴포넌트와 use() 훅 함수 활용
        </h2>
        <div className="flex gap-1 items-center">
          <button
            type="button"
            onClick={handlePrev}
            className="cursor-pointer uppercase py-2 px-4 bg-react text-white"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="cursor-pointer uppercase py-2 px-4 bg-react text-white"
          >
            Next
          </button>
          <output className="px-4 font-extralight text-3xl">{pokemonId}</output>
        </div>
        <Suspense fallback={<PokemonSpinner />}>
          <Pokemon id={pokemonId} />
        </Suspense>
      </section>
    </>
  );
}

export default SuspenseUsePage;
