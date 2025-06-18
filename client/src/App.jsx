import "./App.css";
import Footer from "./components/Footer";
import HeadingsText from "./components/HeadingsText";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <HeadingsText />
      </header>
      <Hero/>
      <Footer/>
    </>
  );
}

export default App;
