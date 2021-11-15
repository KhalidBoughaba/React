import React from 'react'
import Board from './Board'

class Game extends React.Component {
  render() {
    return (
      <main className="game">
        <section className="game-board">
          <Board />
        </section>
        <section className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </section>
      </main>
    )
  }
}
export default Game
