import RecipeList from './components/RecipeList';
import RecipeSingle from './components/RecipeSingle';

export default function DataFetchingPage() {
  return (
    <section className="flex flex-col gap-5 my-5">
      <h2 className="text-2xl font-medium">데이터 가져오기</h2>
      <RecipeSingle />
      <RecipeList />
    </section>
  );
}
