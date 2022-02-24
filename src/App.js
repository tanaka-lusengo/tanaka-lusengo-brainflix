import "./App.scss";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import MainContent from "./Components/MainContent/MainContent";
import MainComments from "./Components/MainComments/MainComments";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <MainContent />
      <MainComments />
      {/* MainAside */}
    </div>
  );
}

export default App;
