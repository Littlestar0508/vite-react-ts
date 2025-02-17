import type { Recipes, Recipe } from '../types';

const END_POINT = 'https://dummyjson.com/recipes';

interface Options {
  q?: string;
  limit?: number;
  skip?: number;
  fields?: string;
  sortBy?: string;
  order?: 'asc' | 'desc';
}

// Update
export const editRecipe = async (editRecipe: Partial<Recipe>) => {
  const { id, ...recipe } = editRecipe;

  const response = await fetch(`${END_POINT}/${id}`, {
    method: 'PUT' /* or PATCH */,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(recipe),
  });

  if (!response.ok) {
    throw new Error('레시피 추가에 실패했습니다. 😭');
  }

  return (await response.json()) as Recipe;
};

// CREATE
export const addRecipe = async (newRecipe: Partial<Recipe>) => {
  const response = await fetch(`${END_POINT}/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newRecipe),
  });

  if (!response.ok) {
    throw new Error('레시피 추가에 실패했습니다. 😭');
  }

  return (await response.json()) as Recipe;
};

// READ

export const getRecipes = async ({
  q = '',
  limit = 10,
  skip = -1,
  fields = '',
  sortBy = 'id',
  order = 'asc',
}: Options) => {
  let requestQuery = `${END_POINT}/`;

  if (q.trim().length > 0) {
    requestQuery += `search/?q=${q}`;
  }

  if (limit) {
    requestQuery += requestQuery.includes('?')
      ? `&limit=${limit}`
      : `?limit=${limit}`;
  }

  if (skip) {
    requestQuery += `&skip=${skip - 1}`;
  }

  if (fields.trim().length > 0) {
    requestQuery += `&select=${fields}`;
  }

  if (sortBy) {
    requestQuery += `&sortBy=${sortBy}`;
  }

  if (order) {
    requestQuery += `&order=${order}`;
  }

  return (await fetch(requestQuery).then((response) =>
    response.json()
  )) as Recipes;
};

export const getRecipeById = async (id: string | number) => {
  return (await fetch(`${END_POINT}/${id}`).then((response) =>
    response.json()
  )) as Recipe;
};
