import { useState } from "react";

const Game = ({ game_id, game_title, game_image, game_description }) => {
  const [show, setshow] = useState(false);
  return (
    <div className="game_wrapper">
      <div
        className="game"
        onMouseMove={() => setshow(true)}
        onMouseLeave={() => setshow(false)}
      >
        <img src={game_image} alt="" />
        <span>{game_title}</span>
        <div className={show ? "show_descriptions" : "no_show_descriptions"}>
          <p>{game_description}</p>
          <button>View Game</button>
        </div>
      </div>
    </div>
  );
};
export default Game;
