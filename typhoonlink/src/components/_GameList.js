import { useEffect } from "react";
import callofduty from "../images/call of duty.jpg";
import csgo from "../images/CSGO.jpg";
import deadspace from "../images/dead-space.jpg";
import sleepingdog from "../images/Sleeping Dog.jpg";
import division2 from "../images/divison 2.jpg";
import halo from "../images/halo reach.jpg";
import valorant from "../images/valorant.jpg";
import starcraft from "../images/starcraft.jpg";
import diablo from "../images/diablo.jpg";
import Game from "./_Game";

const GameList = () => {
  const games = [
    {
      game_id: 23,
      game_title: "Call of Duty 2",
      game_image: callofduty,
      game_description: "This is a description of the game",
      game_url: [
        "https://store.steampowered.com/",
        "https://www.epicgames.com/store/en-US/",
      ],
    },
    {
      game_id: 24,
      game_title: "Dead Space",
      game_image: deadspace,
      game_description: "This is a description of the game",
      game_url: [
        "https://store.steampowered.com/",
        "https://www.epicgames.com/store/en-US/",
      ],
    },
    {
      game_id: 25,
      game_title: "CounterStrike: Global Offensive",
      game_image: csgo,
      game_description: "This is a description of the game",
      game_url: [
        "https://store.steampowered.com/",
        "https://www.epicgames.com/store/en-US/",
      ],
    },
    {
      game_id: 26,
      game_title: "Sleeping Dog",
      game_image: sleepingdog,
      game_description: "This is a description of the game",
      game_url: [
        "https://store.steampowered.com/",
        "https://www.epicgames.com/store/en-US/",
      ],
    },
    {
      game_id: 27,
      game_title: "Halo: Reach",
      game_image: halo,
      game_description: "This is a description of the game",
      game_url: ["https://store.steampowered.com/"],
    },
    {
      game_id: 28,
      game_title: "Division 2",
      game_image: division2,
      game_description: "This is a description of the game",
      game_url: ["https://store.steampowered.com/"],
    },
    {
      game_id: 29,
      game_title: "Valorant",
      game_image: valorant,
      game_description: "This is a description of the game",
      game_url: [
        "https://store.steampowered.com/",
        "https://www.epicgames.com/store/en-US/",
      ],
    },
    {
      game_id: 30,
      game_title: "Diablo II",
      game_image: diablo,
      game_description: "This is a description of the game",
      game_url: ["https://store.steampowered.com/"],
    },
    {
      game_id: 31,
      game_title: "Starcraft II",
      game_image: starcraft,
      game_description: "This is a description of the game",
      game_url: [
        "https://store.steampowered.com/",
        "https://www.epicgames.com/store/en-US/",
      ],
    },
  ];

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <section className="gamelist_wrapper">
      {games.map((item) => (
        <Game {...item} key={item.game_id} />
      ))}
    </section>
  );
};

export default GameList;
