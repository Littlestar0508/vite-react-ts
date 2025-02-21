import Section from '@/components/section';
import Heading from '@/components/heading';
import { useCountStore } from '@/stores/_count';

export default function ZustandManageStatePage() {
  const increment = useCountStore((state) => state.increment);

  return (
    <Section className="flex flex-col gap-2">
      <Heading>zustand</Heading>
      <button
        type="button"
        onClick={increment}
        className="bg-black text-white p-3 cursor-pointer"
      >
        +1
      </button>
    </Section>
  );
}
