class ChessElement {
  constructor(type) {
    this.type = this.initializeElement(type);
    this.isDead = false;
    // this.currentPlayer = "white";
  }

  initializeBoard(type) {
    // super.color
    // 체스말의 상태를 초기화합니다.
  }

  movePoint() {
    // 이동할 수 있는 경로를 표출합니다.
  }
  click() {
    this.movePoint();
  }
}
class BlackElement extends ChessElement {
  static color = "B";
  constructor(type) {
    super(type);
  }
}
class WhiteElement extends ChessElement {
  static color = "W";
  constructor(type) {
    super(type);
  }
}
class ChessEngine {
  constructor() {
    this.board = this.initializeBoard();
    this.lastMoved = {
      x: 0,
      y: 0,
    };
    this.currentPlayer = "white";
  }

  initializeBoard() {
    // 체스 보드를 초기화합니다.
  }

  movePiece(from, to) {
    // 말의 움직임을 처리하고 게임 상태를 업데이트합니다.
  }

  isCheck() {
    // 체크 상태를 검증합니다.
  }

  isCheckmate() {
    // 체크메이트 상태를 검증합니다.
  }

  isStalemate() {
    // 스테일메이트 상태를 검증합니다.
  }
}
{
}
{
}
{
  action: "PHON";
  postion: "GO";
}
{
  action: "PHON";
  postion: "BACK";
}
() => (next) => (action) => {
  next(action);
};
