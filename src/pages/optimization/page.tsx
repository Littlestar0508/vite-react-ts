import Heading from '@/components/heading';
import Section from '@/components/section';
import Title from '@/components/title';
import { createContext, useState } from 'react';
import Counter from './components/counter';
import Message from './components/message';
import ColorContextSetter from './components/color-context-setter';

// eslint-disable-next-line react-refresh/only-export-components
export const ColorContext = createContext('#000');

export default function Optimization() {
  const [color, setColor] = useState('#000');

  const [stars, setStars] = useState('⭐️');
  const handleAddStar = () => setStars((s) => s + '⭐️');

  // const cachedElement = useMemo(
  //   () => (
  //     <Counter
  //       messageElement={<Message greeting="요소 최적화가 필요해요! 😳" />}
  //     />
  //   ),
  //   []
  // );

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

        <ColorContext value={color}>
          <ColorContextSetter setColor={setColor} />
          <hr className="my-8" />
          {/* <Counter
            messageElement={<Message greeting="요소 최적화가 필요해요! 😳" />}
            /> */}
          <Counter
            messageElement={<Message greeting="요소 최적화가 필요해요! 😳" />}
          />
        </ColorContext>
      </Section>
    </>
  );
}
