export function generateRandomEmail() {
  return `test${Math.floor(Math.random() * 10000)}@mail.com`;
}