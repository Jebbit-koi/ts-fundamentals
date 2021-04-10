{
  // JavaScript

  const num: number = 7;

  // undefined: 값이 있는지 없는지도 아직 결정되지 않은 상태.
  let age: number | undefined;
  age = undefined;
  age = 6;
  function find(): number | undefined {
    return undefined;
  }

  // null: 값이 없는 상태.
  let person: string | null;

  // unknown 💩
  // any 💩

  // void: 함수에서 아무것도 리턴하지 않을 때
  function print(): void {
    console.log("hello");
    return;
  }

  // object 💩
}
