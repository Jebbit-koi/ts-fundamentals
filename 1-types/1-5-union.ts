namespace Union {
  //function: login -> success, fail
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log("move");
  }

  move("right");

  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    return {
      response: {
        body: "logged in!",
      },
    };
  }
}
