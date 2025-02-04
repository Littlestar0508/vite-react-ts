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

  // 네비게이션 list
  const navList = [
    {
      id: 'item-1',
      content: '로그인',
      href: 'signin',
      isActive: isSigninView,
    },
    {
      id: 'item-2',
      content: '회원가입',
      href: 'signup',
      isActive: isSignupView,
    },
    {
      id: 'item-3',
      content: '상태관리전략',
      href: 'state-management',
      isActive: isStateManagementView,
    },
  ];

  return (
    <nav className="nav">
      <h2 className="sr-only">페이지 탐색</h2>
      {navList.map((navItem) => (
        <NavLink
          key={navItem.id}
          href={navItem.href}
          isActive={navItem.isActive}
        >
          {navItem.content}
        </NavLink>
      ))}
    </nav>
  );
}

export default Nav;
