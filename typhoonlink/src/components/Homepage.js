import NavBar from "./_Navbar";
import GameList from "./_GameList";
import Footer from "./_Footer";

const Homepage = () => {
  return (
    <div className="home_wrapper">
      <NavBar />
      <GameList />
      <Footer />
    </div>
  );
};

export default Homepage;
