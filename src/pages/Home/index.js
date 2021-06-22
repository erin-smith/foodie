import Header from "../../components/Header";
import Jumbotron from "../../components/Jumbotron";
import Buttons from "../../components/Button";
import Footer from "../../components/Footer";
import Heading from "../../components/Heading";
import "../../App.css";
import "../../pages/custom.css"

function Home() {
  return (
    <div>
      <Header />
      <Jumbotron />
      <Heading />
      <Buttons />
      <Footer />
    </div>
  );
}

export default Home;
