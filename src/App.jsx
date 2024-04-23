import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Hero/Home";
import Join from "./components/Join/Join";
import Plans from "./components/Plans/Plans";
import Reasons from "./components/Reasons/Reasons";
import Programs from "./components/programs/Programs";
function App() {
  return (
    <div className="App">
      <Home />
      <Programs />
      <Reasons />
      <Plans />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
