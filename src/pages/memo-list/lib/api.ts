import { supabase } from './supabase-client';
import type {
  MemoItem,
  MemoItemInsert,
  MemoItemUpdate,
} from './supabase-client';

const DATABASE_NAME = 'memo-list';

interface QueryOptions {
  columns?: string;
  page?: number;
  perPage?: number;
  orderKey?: keyof MemoItem;
  isAscending?: boolean;
}

export const getMemoList = async ({
  // 필드 필터링
  columns = '*',
  // pagination
  page = 0,
  perPage = 10,
  // 정렬
  orderKey = 'created_at',
  isAscending = false,
}: QueryOptions = {}) => {
  const fromIndex = page > 0 ? page + perPage - 1 : 0;
  const toIndex = perPage > 1 ? page + perPage - 1 : fromIndex;

  return await supabase
    .from(DATABASE_NAME)
    .select(columns)
    .range(fromIndex, toIndex)
    .order(orderKey, { ascending: isAscending })
    .returns<MemoItem[]>();
};

export const getMemoItemById = async (id: MemoItem['id']) => {
  return await supabase
    .from(DATABASE_NAME)
    .select('*')
    .eq('id', id)
    .returns<MemoItem[]>();
};

export const addMemoItem = async (...newMemoItems: MemoItemInsert[]) => {
  return await supabase.from(DATABASE_NAME).insert(newMemoItems).select();
};

export const editMemoItem = async (updateMemoItem: MemoItemUpdate) => {
  if (!updateMemoItem.id) {
    throw new Error('updateMemoItem 객체에 id 속성 입력이 필요합니다.');
  }

  return await supabase
    .from(DATABASE_NAME)
    .update(updateMemoItem)
    .eq('id', updateMemoItem.id)
    .select();
};

export const deleteMemoItem = async (deleteItemId: MemoItem['id']) => {
  return await supabase.from(DATABASE_NAME).delete().eq('id', deleteItemId);
};
