import express from 'express';
import { createUser, isRegisteredUser } from './lib/user.js';

// Express {}
const app = express();
// url parser
app.use(express.urlencoded({ extended: false }));

app.post('/api/signin', async (req, res) => {
  const { useremail, userpassword } = req.body;

  if (!useremail || !userpassword) {
    return res
      .status(400)
      .send('로그인을 시도하려면 이메일과 비밀번호 둘 다 입력해주세요');
  }

  const result = await isRegisteredUser(useremail, userpassword); // True of False

  if (result === null) {
    return res.status(400).send(`
        <p>${useremail} 계정으로 회원가입된 적이 없습니다</p>
      `);
  }

  if (result) {
    // true인 경우 패스워드도 일치하여 인증 성공
    return res.status(200).send(`<p>환영합니다 ${useremail}님</p>`);
  } else {
    return res.status(400).send(`
        <p>${useremail} 계정 패스워드가 잘못되었습니다</p>
      `);
  }

  res.status(200).send('로그인 성공');
});

app.post('/api/signup', async (req, res) => {
  // request.body를 통해 client 요청된 데이터를 받는다
  const { username, useremail, userpassword } = req.body;

  if (!username || !useremail || !userpassword) {
    return res.status(400).send(`
  <p style="color:red; font-size:48px">회원 가입에 필요한 정보를 모두 입력해주세요</p>
  `);
  }

  // 새 사용자 생성 (백엔드 스토리지)
  try {
    const newUser = await createUser({
      name: username,
      email: useremail,
      password: userpassword,
    });
    console.log(newUser);

    if (newUser) {
      res
        .status(200)
        .send(`<p>${newUser.name}님 회원 가입에 성공했습니다.</p>`);
    } else {
      res.status(400).send(`<p>${useremail}은 이미 가입된 이메일입니다</p>`);
    }
  } catch (err) {
    res.status(400).send('새 사용자 생성에 문제가 발생했습니다.');
  }
});

// 라우팅
app.get('/api/hello', (request, response) => {
  const { username, useremail } = request.query;

  if (username && useremail) {
    response
      .status(200)
      .send(
        `<h1>hello ${username}!</h1> <p>your email address is ${useremail}</p>`
      );
  } else {
    response
      .status(400)
      .send(`<p>사용자 이름과 이메일이 전송되지 않았습니다</p>`);
  }
});

app.listen(4000, () => {
  console.log('백엔드 프로그램 서버 구동 http://localhost:4000');
});
