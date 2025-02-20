import { memo, use } from 'react';
import { ColorContext } from '../page';
interface MessageProps {
  greeting: string;
  color?: string;
}

function Message({ greeting }: MessageProps) {
  const color = use(ColorContext);

  console.log('렌더링', greeting);
  return <p style={{ color }}>{greeting}</p>;
}

export default memo(Message);
