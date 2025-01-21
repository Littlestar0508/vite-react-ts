import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import bcrypt from 'bcrypt';

const saltRounds = 9;
const FILE_PATH = fileURLToPath(new URL('../data/users.json', import.meta.url));
const OPTIONS = { encoding: 'utf-8' };

export async function getUsers() {
  const users = await readFile(FILE_PATH, OPTIONS);
  return JSON.parse(users);
}

export async function findUserByEmail(email) {
  const users = await getUsers();

  return users.find((user) => user.email === email);
}

export async function createUser(newUser) {
  // 가입한 사용자인지 확인
  const user = await findUserByEmail(newUser.email);

  // 이미 가입된 사용자라면 null 반환
  // 서버에서 클라이언트에 이미 회원가입한 사용자 임을 응답합니다.
  if (user) return null;

  // 새 가입자라면 사용자 정보를 data/users.json에 저장
  // **요청받은 사용자의 민감한 정보인 password는 암호화
  const users = await getUsers();
  const hashedPassword = await bcrypt.hash(newUser.password, saltRounds);

  const createdUser = {
    id: crypto.randomUUID(),
    name: newUser.name,
    email: newUser.email,
    // 암호화된 패스워드 'bcrypt.hash(password, saltRounds)'
    password: hashedPassword,
  };

  users.push(createdUser);

  writeFile(FILE_PATH, JSON.stringify(users, null, 2), OPTIONS);

  return createdUser;
}

createUser({
  name: '까까룽',
  email: 'abcd@456.com',
  password: 'rmfjgrpgkwlak',
});

export async function isRegisteredUser() {}
