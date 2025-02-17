import { useEffect, useState } from 'react';
import { getRecipes } from '../lib/recipes';
import { Recipes } from '../types';
import { Spinner } from '@mynaui/icons-react';

const END_POINT = 'https://dummyjson.com/recipes/add';

export default function RecipeCreate() {
  const [data, setData] = useState<null | Recipes>(null);

  useEffect(() => {
    let ignore = false;

    getRecipes({ skip: 1, limit: 3 }).then((data) => {
      if (!ignore) {
        setData(data);
      }
    });

    return () => {
      ignore = true;
    };
  }, []);

  const handleAdded = async (formData: FormData) => {
    const response = await fetch(END_POINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.get('recipe'),
      }),
    });

    if (!response.ok) {
      throw new Error('레시피 추가에 실패');
    }

    const addedRecipe = await response.json();

    if (data) {
      const nextData: Recipes = {
        ...data,
        recipes: [addedRecipe, ...data.recipes],
      };

      setData(nextData);
    }
  };

  return (
    <article>
      <h4>레시피 리스트</h4>
      <form action={handleAdded}>
        <input
          type="text"
          name="recipe"
          aria-label="레시피"
          defaultValue=""
          className="bg-white"
        />
        <button type="submit" className="px-2 py-1 bg-react text-white">
          추가
        </button>
      </form>
      {!data && (
        <div role="alert" aria-label="로딩 중">
          <Spinner size={24} className="animate-spin opacity-50" />
        </div>
      )}
      <ul>
        {data?.recipes.map((item) => (
          <li key={item.id} className="p-1 border rounded">
            {item.name}
          </li>
        ))}
      </ul>
    </article>
  );
}
