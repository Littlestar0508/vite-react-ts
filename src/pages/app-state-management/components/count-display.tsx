import { useCountStore } from '@/stores/count';

export default function CountDisplay() {
  const count = useCountStore(({ count }) => count);

  return <output className="font-black text-3xl">{count}</output>;
}
