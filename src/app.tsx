import { useState } from 'react';
import SignUpForm from './playground/signup-form';
import SignInForm from './playground/signin-form';

type View = 'signIn' | 'signUp';

function Playground() {
  // 상태 변수(React에서 직접 제어)
  const [view, setView] = useState<View>('signIn');

  // 파생된 상태 변수 (상태 변수가 변경될 때 값이 변경됨)
  const isSignInView = view.includes('signIn');

  // [핸들러] 상태 업데이트 함수
  const handleChangeView = () => {
    // setState() API
    // - setState(nextState)
    // const nextView = isSignInView ? 'signUp' : 'signIn';
    // setView(nextView);

    // - setState((prevState) => nextState)
    setView((prevView) => {
      const nextView = prevView.includes('signIn') ? 'signUp' : 'signIn';
      return nextView;
    });
  };

  return (
    <div className="Playground">
      <h1>플레이그라운드</h1>
      {isSignInView ? <SignInForm /> : <SignUpForm />}

      <hr />

      <button type="button" onClick={handleChangeView}>
        {isSignInView ? '회원가입' : '로그인'} 페이지로 이동
      </button>
    </div>
  );
}

export default Playground;
