import CounterClass from './components/counter.class';
import Counter from './components/counter.function';

export default function MemoryComponentDataPage() {
  return (
    <section>
      <h2 className="text-2xl text-slate-800 font-medium mb-4">
        컴포넌트 데이터 메모리
      </h2>
      <CounterClass />
      <Counter />
    </section>
  );
}
