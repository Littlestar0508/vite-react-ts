import Section from '@/components/section';
import Heading from '@/components/heading';
import Message from './components/message';
import Counter from './components/counter';

export default function Optimization() {
  return (
    <Section level={2}>
      <Heading>성능 최적화</Heading>
      <Message greeting="성능 최적화가 필요해요"></Message>
      <hr className="my-8" />
      <Counter />
    </Section>
  );
}
