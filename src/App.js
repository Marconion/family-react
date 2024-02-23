import "./App.css";
import { Feed } from "./components/Feed";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Feed />
      <Footer />
    </div>
  );
}

export default App;
