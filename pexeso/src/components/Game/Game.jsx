import React, { Component } from "react";
import TableWins from "../TableWins/TableWins";
import Topbar from "../Topbar/Torbar";
import './Game.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: props.cards,
      card1: undefined,
      score: 0,
      time: 0,
      workTimer: true,
      backImage: props.backImg,
      tableWins: [],
      gameFinish: false
    };
  }

  setUnClickImgs() {
    setTimeout(() => {
      const len = this.state.images.length;
      for (let i = 0; i < len; i++) {
        this.state.images[i].onClick = false;
      }
    }, 200);
  }

  check(nameCard, idCard, isUsed) {
    if (isUsed === true) {
      return;
    }
    if (this.state.card1 === undefined) {
      this.setState({ card1: [nameCard, idCard] });
    }
    else {
      if (this.state.card1[0] === nameCard && this.state.card1[1] === idCard) {
        return;
      }
      else if (this.state.card1[0] === nameCard && this.state.card1[1] !== idCard) {
        this.markToUsed(this.state.card1[1]);
        this.markToUsed(idCard);
        // const currentScore = this.state.score;
        // this.setState({ score: currentScore + 1 });
        this.state.score += 1;
        this.setState({ card1: undefined });
        this.checkWin();
        this.setUnClickImgs();
      }
      else {
        this.setState({ card1: undefined });
        this.setUnClickImgs();
      }
    }
  }
  imgSrc(id) {
    if (this.state.images[id].onClick === true || this.state.images[id].isUsed) {
      return `/images/${this.state.images[id].name}.png`;
    }
    else
      return `${this.state.backImage}`;
  }
  onClickImg(id) {
    const elem = this.state.images[id].isUsed;
    if (elem === false) {
      this.state.images[id].onClick = true;
    }
  }
  markToUsed(idCard) {
    this.state.images[idCard].isUsed = true;
  }

  // ===== Clock =====

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    if (this.state.workTimer === true)
      this.setState({
        time: this.state.time + 1
      });
  }

  checkWin() {
    if (this.state.score === this.state.images.length / 2) {
      this.setState({workTimer: false});
      let wins = this.state.tableWins;
      const len = this.state.tableWins.length;
      let newTable = [];
      for (let i = 0; i < len; i++) {
        newTable.push(wins[i]);
      }
      newTable.push({time: this.state.time, score: this.state.score});
      this.setState({tableWins: newTable});
    }
  }

  render() {
    let i = 0;
    return (
      <div>
        <Topbar time={this.state.time} score={this.state.score} />
        <div className="gameContainer">
          <div className="game">
            <div className="items">
              {
                this.state.images.map(image => (
                  <div key={i++} className="item" onClick={() => {
                    this.check(image.name, image.id, image.isUsed);
                    this.onClickImg(image.id);
                  }}>
                    <img src={this.imgSrc(image.id)} alt="fruit" />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <TableWins items={this.state.tableWins} nameTable={'Table wins'} />
      </div>
    )
  }
}

//    :(

export default Game;