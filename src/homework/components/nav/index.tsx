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
  const isSignInView = uiView.includes('signin');

  return (
    <nav className="nav">
      <h2 className="sr-only">페이지 탐색</h2>
      <a
        href="/?view=signin"
        className={clsx(isSignInView && 'active')}
        aria-current={isSignInView ? 'page' : undefined}
      >
        로그인
      </a>
      <a
        href="/?view=signup"
        className={clsx(!isSignInView && 'active')}
        aria-current={!isSignInView ? 'page' : undefined}
      >
        회원가입
      </a>
    </nav>
  );
}

export default Nav;
