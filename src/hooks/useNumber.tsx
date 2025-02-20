import { useMemo } from 'react';

function Demo() {
  const obj = useMemo(() => {
    const o = {
      name: 'a',
    };
    return o;
  }, []);

  return <div>{obj.name}</div>;
}

export default Demo;
