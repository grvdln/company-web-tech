import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import laptop from "../src/assets/laptop.jpg";
function App() {
  return (
    <div>
      <Header />
      <Banner />
      <div className="max-w-[1240px] mx-auto my-10 p-2  h-screen md:grid grid-cols-2">
        <div className="md:w-[80%]">
          <img src={laptop} alt="laptop"/>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-[#00df9a] font-bold my-2">LEARN FROM EXPERTS</h1>
          <p className="my-2 text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <button className="w-[30%] bg-black text-white p-3 rounded">Get started</button>
        </div>
      </div>
    </div>
  );
}

export default App;
