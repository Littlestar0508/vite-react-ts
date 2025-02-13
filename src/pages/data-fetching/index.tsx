import { useEffect, useState } from 'react';

interface ResponseDataType {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

export default function DataFetchingPage() {
  // 화면 업데이트를 관리할 상태 두 가지
  const [data, setData] = useState<null | ResponseDataType>(null);
  const [error, setError] = useState<null | Error>(null);

  // 레시피 한 개 가져오기
  // 서버 (리액트의 외부 시스템)
  // 이펙트를 사용해 서버에 요청
  useEffect(() => {
    // 마운트 이후 1회 요청(반복 필요X)
    // StricMode에서는 2회 렌더링 하므로 통신 2회 요청
    // Fetch API or Axios

    fetch('https://dummyjson.com/recipes/1')
      .then((response) => response.json())
      .then((data) => setData(data as ResponseDataType))
      .catch((error) => console.error(error));
    // Promise<pending | fulfilled | rejected>
  }, []);

  return (
    <section className="flex flex-col gap-5">
      <h2 className="text-2xl font-medium">Data Fecthing</h2>
    </section>
  );
}
