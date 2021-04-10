/**
 * Let's make a game 🕹
 */
let position = {
  x: 0,
  y: 0,
};

type Direction = "up" | "down" | "left" | "right";

function move(direction: Direction) {
  // position이 바뀌어야 한다.
  switch (direction) {
    case "up":
      position.y++;
      break;
    case "down":
      position.y--;
      break;
    case "left":
      position.x--;
      break;
    case "right":
      position.x++;
      break;
    default:
      throw new Error("unknown error");
  }
}

console.log(position); // { x: 0, y: 0}
move("up");
console.log(position); // { x: 0, y: 1}
move("down");
console.log(position); // { x: 0, y: 0}
move("left");
console.log(position); // { x: -1, y: 0}
move("right");
console.log(position); // { x: 0, y: 0}
