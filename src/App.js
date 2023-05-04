import "./App.css";
import Experts from './components/Experts'
import Banner from "./components/Banner";
import Header from "./components/Header";
import NewsLetter from "./components/NewsLetter";
function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Experts />
      <NewsLetter/>
    </div>
  );
}

export default App;
