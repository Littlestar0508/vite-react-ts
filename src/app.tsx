import HomeWorkSignIn from './data/homework/pages/sign-in';
import HomeWorkSignUp from './data/homework/pages/sign-up';
import Nav from './data/homework/components/nav';
import { useState } from 'react';

type UIView = 'signin' | 'signup';

const getUIView = () => {
  const searchParams = new URLSearchParams(location.search);

  // 리액트 외부 시스템(부수적인 것 : Side Effects)
  const uiView = searchParams.get('view') ?? 'signin';
  return uiView as UIView;
};

function Playground() {
  // 상태 변수
  // Q. 상태 변수의 초깃값을 설정하고 싶은데
  //    컴포넌트(함수) 몸체에는 부수적인 것은 작성하면 안된다면
  //    어떻게 해야 상태 변수의 초깃값으로 부수적인 것의 데이터를 설정할 수 있을까?

  // A. 초기화 함수를 사용하여 초기화 함수 내부에 리액트 외부의 것에 접근해 초깃값(데이터)을 반환하게 된다
  const [uiView /* setUiView */] = useState<UIView>(getUIView);

  // 1. setUiView(nextUiView)
  // 2. setUiView((prevView) => nextUiView)

  // 파생된 상태
  const isSignInView = uiView.includes('signin');

  return (
    <div className="Playground bg-zinc-300">
      <h1>플레이그라운드</h1>
      <Nav />
      {isSignInView ? <HomeWorkSignIn /> : <HomeWorkSignUp />}
    </div>
  );
}

export default Playground;
