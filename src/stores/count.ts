import { create, type StateCreator } from 'zustand';

interface State {
  count: number;
  step: number;
  min: number;
  max: number;
}

interface Actions {
  increment: () => void;
  decrement: () => void;
  update: (value: number) => void;
  reset: () => void;
  setStep: (value: number) => void;
  setMin: (value: number) => void;
  setMax: (value: number) => void;
}

type Store = State & Actions;

// 스토어(상태 + 액션 저장소) 생성 함수
const createStore: StateCreator<Store> = (set) => ({
  // 상태
  count: 0,
  step: 5,
  min: 0,
  max: 10,

  // 액션
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  update: (value) => set({ count: value }),
  reset: () => set({ count: 0 }),
  setStep: (value) => set({ step: value }),
  setMin: (value) => set({ min: value }),
  setMax: (value) => set({ max: value }),
});

export const useCountStore = create<Store>((set) => ({
  // 상태
  count: 0,
  step: 5,
  min: 0,
  max: 10,

  // 액션
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  update: (value) => set({ count: value }),
  reset: () => set({ count: 0 }),
  setStep: (value) => set({ step: value }),
  setMin: (value) => set({ min: value }),
  setMax: (value) => set({ max: value }),
}));

// 카운트 상태를 관리하는 스토어를 생성한 후, 외부 컴포넌트에서 호출 가능한 훅 함수를 생성
// export const useCountStore = create(createStore);
