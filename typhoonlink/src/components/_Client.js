import NavBar from "./_Navbar";
import Footer from "./_Footer";
import epic_image from "../images/epics.JPG";
import steam_image from "../images/steam.jpg";
import battle_image from "../images/battle.jpg";
import "./_Client.css";

const Client = () => {
  return (
    <div className="client_wrapper">
      <NavBar />
      <div className=""></div>
      <div className="client_container">
        <div className="client">
          <div className="client_image">
            <img src={epic_image} alt="" />
          </div>
          <div className="client_descriptions">
            <p>
              Epic Games, one of the top gaming platform to buy and download
              games for PC and Mac. Epic Games have released over 100+ exciting
              games that can be played in single or in a group. They also offer
              discount and free games to members that joined. What are you
              waiting for? Join us now and see what more we can offer you.
            </p>
          </div>
          <div className="client_btn">
            <button
              onClick={() => {
                window.open("https://www.epicgames.com/id/register/");
              }}
            >
              Sign Up
            </button>
            <button
              onClick={() => {
                window.open("https://www.epicgames.com/store/en-US/");
              }}
            >
              Steam Store
            </button>
          </div>
        </div>
        <div className="client">
          <div className="client_image">
            <img src={steam_image} alt="" />
          </div>
          <div className="client_descriptions">
            <p>
              Steam, one of the well known gaming platform of all times. Come
              check out and purchase our latest games that are release for the
              upcoming year
            </p>
          </div>
          <div className="client_btn">
            <button
              onClick={() => {
                window.open("https://store.steampowered.com/join/");
              }}
            >
              Sign Up
            </button>
            <button
              onClick={() => {
                window.open("https://store.steampowered.com/");
              }}
            >
              Steam Store
            </button>
          </div>
        </div>
        <div className="client">
          <div className="client_image">
            <img src={battle_image} alt="" />
          </div>
          <div className="client_descriptions">
            <p>
              Steam, one of the well known gaming platform of all times. Come
              check out and purchase our latest games that are release for the
              upcoming year
            </p>
          </div>
          <div className="client_btn">
            <button
              onClick={() => {
                window.open("https://account.battle.net/creation/");
              }}
            >
              Sign Up
            </button>
            <button
              onClick={() => {
                window.open("https://www.blizzard.com/en-us/");
              }}
            >
              Steam Store
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Client;
