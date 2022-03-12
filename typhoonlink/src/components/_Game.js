import { useState } from 'react'

const Game = ({ game_title, game_image, game_description, game_url }) => {
  const [show, setshow] = useState(false)
  return (
    <div className="game_wrapper">
      <div
        className="game"
        onMouseMove={() => setshow(true)}
        onMouseLeave={() => setshow(false)}
      >
        <img src={game_image} alt="" />

        <div className={show ? 'show_descriptions' : 'no_show_descriptions'}>
          <span>Game Description:</span>
          <p>{game_description}</p>
          <div className="game_links">
            <button>View Game</button>
          </div>
        </div>
      </div>
      <span>{game_title}</span>
    </div>
  )
}
export default Game
