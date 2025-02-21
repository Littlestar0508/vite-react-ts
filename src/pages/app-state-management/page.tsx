import Section from '@/components/section';
import Title from '@/components/title';
import { Heading } from '@mynaui/icons-react';
import Counter from './components/counter';

export default function AppStateManagement() {
  return (
    <>
      <Title>앱 상태 관리</Title>

      <Section level={2} className="flex flex-col gap=2 items-start">
        <Heading className="text-2xl font-medium">
          애플리케이션 상태 관리 (with Zustand)
        </Heading>
        <Counter />
      </Section>
    </>
  );
}
