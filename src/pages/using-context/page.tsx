import Title from '@/components/title';
import GrandParent from './components/grand-parent';
import { createContext, useState } from 'react';
import AnotherParent from './components/another-parent';

interface GreetingContextValue {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

// 컨텍스트 생성
export const GreetingContext = createContext<GreetingContextValue>({
  message: '',
  setMessage() {
    console.log('init');
  },
});

// 컨텍스트 프로바이더(공급자) => 값 공급
// 컨텍스트 컨슈머(수요자) <= 공급된 값을 소비 (사용 권장 X : 구형)
// 컨텍스트 공급된 값 = useContext(컨텍스트) (신형)
// context === context.provider

export default function UsingContextPage() {
  const [message, setMessage] = useState('hello Grand Parent');

  const value = { message, setMessage };

  return (
    <>
      <Title>컨텍스트를 사용한 상태 공유</Title>
      <section className="flex flex-col gap-5">
        <GreetingContext value={value}>
          <h2 className="text-2xl font-medium">컨텍스트 활용(상태 공유)</h2>
          <h2 className="text-xl font-medium">컨텍스트 범위</h2>
          <GrandParent />
        </GreetingContext>
        <hr />
        <h3 className="text-xl font-medium">컨텍스트 외부</h3>
        <AnotherParent />
      </section>
    </>
  );
}
