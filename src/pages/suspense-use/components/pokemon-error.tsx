import PokemonLayout from './pokemon-layout';

function PokemonError() {
  return (
    <PokemonLayout className="text-red-500 border-red-500">
      <p role="alert">오류가 발생했습니다. 😥</p>
    </PokemonLayout>
  );
}

export default PokemonError;
