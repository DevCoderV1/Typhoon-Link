import NavBar from "./_Navbar";
import Footer from "./_Footer";
import "./_FAQ.css";
const FAQ = () => {
  return (
    <div className="FAQ_wrapper">
      <NavBar />
      <h1>Frequently Asked Questions</h1>
      <div className="FAQ_container">
        <div className="FAQ">
          <h2>
            <strong>1. What is Typhoon Link?</strong>
          </h2>
          <p>
            Typhoon Link is a website to show the most popular games for PC and
            Mac.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
