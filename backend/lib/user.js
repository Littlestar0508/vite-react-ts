import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const FILE_PATH = fileURLToPath(new URL('../data/users.json', import.meta.url));

export async function getUsers() {
  const users = await readFile(FILE_PATH, { encoding: 'utf-8' });
  return JSON.parse(users);
}

getUsers();

export async function findUserByEmail() {}

export async function isRegisteredUser() {}

export async function createUser() {}
