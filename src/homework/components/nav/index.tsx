import { useState } from 'react';
import { getUIView, type UIView } from '@/homework/lib/ui-view';
import './style.css';
import clsx from 'clsx/lite';

// clsx/lite 모듈
// console.log(clsx('a','b',true && 'c'));
// console.log(clsx('a','b', false && 'c'));

// clsx 모듈
// console.log(clsx('a', 'b', { c: true }));
// console.log(clsx('a', 'b', ['d']));

// clsx/lite 모듈은 배열과 객체는 합성이 불가능하다

function Nav() {
  const [uiView] = useState<UIView>(getUIView);

  switch (uiView) {
    case 'signin':
      break;
    case 'signup':
      break;
    case 'state-management':
      break;
  }

  // 파생된 상태
  const isSigninView = uiView.includes('signin');
  const isSignupView = uiView.includes('signup');
  const isStateManagementView = uiView.includes('state-management');

  return (
    <nav className="nav">
      <h2 className="sr-only">페이지 탐색</h2>
      <a
        href="/?view=signin"
        className={clsx(isSigninView && 'active')}
        // aria-current={isSignInView ? 'page' : undefined}
      >
        로그인
      </a>
      <a
        href="/?view=signup"
        className={clsx(isSignupView && 'active')}
        // aria-current={!isSignInView ? 'page' : undefined}
      >
        회원가입
      </a>
      <a
        href="/?view=state-management"
        className={clsx(isStateManagementView && 'active')}
        // aria-current={!isSignInView ? 'page' : undefined}
      >
        상태관리전략
      </a>
    </nav>
  );
}

export default Nav;
