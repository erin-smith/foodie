import Jumbotron from "../../components/Jumbotron";
import Buttons from "../../components/Buttons";
import Heading from "../../components/Heading";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../App.css";
import "../custom.css";

function Home() {
  return (
    <div>
      <Header/>
      <Jumbotron />
      <Heading />
      <Buttons />
      <Footer/>
    </div>
  );
}

export default Home;
