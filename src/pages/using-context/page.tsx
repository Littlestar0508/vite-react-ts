import Title from '@/components/title';
import GrandParent from './components/grand-parent';
// import { useState } from 'react';

export default function UsingContextPage() {
  // const [message, setMessage] = useState('hello Grand Parent');

  return (
    <>
      <Title>컨텍스트를 사용한 상태 공유</Title>
      <section className="flex flex-col gap-2">
        <h2 className="text-2xl font-medium">컨텍스트 활용(상태 공유)</h2>
        <GrandParent />
      </section>
    </>
  );
}
