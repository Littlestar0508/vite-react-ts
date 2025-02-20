import Section from '@/components/section';
import Heading from '@/components/heading';
import Message from './components/message';
import Counter from './components/counter';
import { createContext, useState } from 'react';
import Title from '@/components/title';

export const ColorContext = createContext('#000');

const counterElement = (
  <Counter messageElement={<Message greeting="요소 최적화가 필요해요! 😳" />} />
);

export default function Optimization() {
  const [color, setColor] = useState('#000');

  const [stars, setStars] = useState('⭐️');
  const handleAddStar = () => setStars((s) => s + '⭐️');

  return (
    <>
      <Title>리액트 앱 성능 최적화</Title>
      <Section level={2}>
        <Heading>성능 최적화</Heading>
        <div className="flex gap-5">
          <button type="button" onClick={handleAddStar}>
            ⭐️ 추가
          </button>
          <output>{stars}</output>
        </div>
        <hr className="my-8" />

        <Message greeting="성능 최적화가 필요해요"></Message>
        <hr className="my-8" />

        <ColorContext value={color}>{counterElement}</ColorContext>
      </Section>
    </>
  );
}
