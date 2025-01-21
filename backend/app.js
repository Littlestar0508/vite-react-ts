import express from 'express';
import { createUser } from './lib/user.js';

// Express {}
const app = express();
// url parser
app.use(express.urlencoded({ extended: false }));

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
    console.log(1);
    const newUser = await createUser({
      name: username,
      email: useremail,
      password: userpassword,
    });
    console.log(newUser);

    if (newUser) {
      res.status(200).send(`<p>회원 가입에 성공했습니다.</p>`);
    } else {
      res.status(400).send(`<p>이미 가입된 이메일입니다</p>`);
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
