import { getUIView, type UIView } from '@/homework/lib/ui-view';
import { useState } from 'react';
import NavLink from './nav-link';
import './style.css';

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
      <NavLink href="signin" isActive={isSigninView}>
        로그인
      </NavLink>
      <NavLink href="signup" isActive={isSignupView}>
        회원가입
      </NavLink>
      <NavLink href="state-management" isActive={isStateManagementView}>
        상태관리전략
      </NavLink>
    </nav>
  );
}

export default Nav;
