import NavBar from "./_Navbar";
import Footer from "./_Footer";
import "./_FAQ.css";
const FAQ = () => {
  return (
    <div className="FAQ_wrapper">
      <NavBar />
      <h1 style={{ marginTop: "10px" }}>Frequently Asked Questions</h1>
      <div className="FAQ_container">
        <div className="FAQ">
          <h2>
            <strong>1. What is Typhoon Link?</strong>
          </h2>
          <p>
            Typhoon link is a website designed for user to explore and know
            what's the latest game released for PC.
          </p>
        </div>
        <div className="FAQ">
          <h2>
            <strong>2. Why is Typhoon Link created?</strong>
          </h2>
          <p>
            Typhoon Link is just a simple website I created to practice my web
            design skills to gain more experiences and hope company are
            interested in my creativity.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
