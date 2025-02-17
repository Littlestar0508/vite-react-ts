import { useEffect, useState } from 'react';
import type { Recipes } from '../types';
import { getRecipes } from '../lib/recipes';

export default function RecipeList() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | Error>(null);
  const [data, setData] = useState<null | Recipes>(null);

  useEffect(() => {
    const ignore = false;

    getRecipes()
      .then((data) => {
        if (!ignore) {
          setData(data);
        }
      })
      .catch((error: Error) => {
        if (!ignore) {
          setError(error);
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      setLoading(true);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-medium">Loading</h3>
        <p>로딩 상태(loading)</p>
        <pre className="rounded p-6 overflow-auto bg-react text-[#22d045] text-sm">
          {loading.toString()}
        </pre>
      </div>

      <details className="flex flex-col gap-1">
        <summary className="text-xl font-medium">Data</summary>
        <p>성취(fulfilled)</p>
        <pre className="rounded p-6 overflow-auto bg-react text-[#27a0cc] text-sm">
          {JSON.stringify(data, null, 2) ?? 'DATA'}
        </pre>
      </details>

      <details className="flex flex-col gap-1">
        <summary className="text-xl font-medium">Error</summary>
        <p>거부(rejected)</p>
        <pre className="rounded p-6 overflow-auto bg-react text-[#f0439f] text-sm">
          {error ? error.message : 'ERROR'}
        </pre>
      </details>
    </>
  );
}
