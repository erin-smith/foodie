import Header from "../../components/Header";
import Jumbotron from "../../components/Jumbotron";
import Buttons from "../../components/Buttons";
import Heading from "../../components/Heading";
import "../../App.css";
import "../custom.css";

function Home() {
  return (
    <div>
      <Header />
      <Jumbotron />
      <Heading />
      <Buttons />
    </div>
  );
}

export default Home;
