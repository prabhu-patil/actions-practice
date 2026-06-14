// Small pure functions — easy to unit-test in CI.

export function add(a, b) {
  return a + b;
}

export function isPalindrome(text) {
  const clean = String(text).toLowerCase().replace(/[^a-z0-9]/g, "");
  return clean === [...clean].reverse().join("");
}

export function greet(name) {
  if (!name) return "Hello, stranger!";
  return `Hello, ${name}!`;
}
