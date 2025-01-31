import ActionButton from '../components/action-button';
import FormInput from '../components/form-input';

// CSS Module
// import S from './sign-in.module.css';

// Sass
import './sign-in.scss';

// Sass Module
// import S from './sign-in.module.scss';

function HomeWorkSignIn() {
  return (
    <section>
      <h2 className="sr-only">로그인 폼</h2>
      {/* <form className={S.signInForm}> */}
      <form className="signInForm">
        <FormInput
          type="email"
          label="이메일"
          name="useremail"
          placeholder="user@company.io"
        />
        <FormInput
          type="password"
          label="패스워드"
          name="userpassword"
          placeholder="숫자, 영문 조합 6자리 이상 입력"
          hasToggleButton
        />
        <ActionButton>회원 가입</ActionButton>
      </form>
    </section>
  );
}

export default HomeWorkSignIn;
