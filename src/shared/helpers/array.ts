export function clearArray<T>(arr: T[]) {
  console.log(arr);
  while (arr.length) {
    arr.pop();
  }
}
