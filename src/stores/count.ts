import { create, type StateCreator } from 'zustand';

interface State {
  count: number;
}

interface Actions {
  increment: () => void;
}

type Store = State & Actions;

// 스토어(상태 + 액션 저장소) 생성 함수
const createStore: StateCreator<Store> = (set, get) => {
  // 상태
  // const count = 0;

  // 액션
  const increment = () => {
    // set() 함수를 사용해 상태 업데이트
    const state = get();
    const nextCount = state.count + 1;
    // 다음 상태 객체 (이전 상태 객체 합성)
    set({ count: nextCount });
  };

  // 스토어(store, 저장소)
  // - 상태(변수)
  // - 액션(상태 업데이트 함수)
  return {
    // 상태
    count: 0,
    // 액션
    increment,
  };
};

// 카운트 상태를 관리하는 스토어를 생성한 후, 외부 컴포넌트에서 호출 가능한 훅 함수를 생성
export const useCountStore = create(createStore);
