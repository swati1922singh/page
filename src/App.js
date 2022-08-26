import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import SideBar from "./pages/SideBar";
function App() {
  return (
    <div className="App">
      <SideBar />
      <Home />
    </div>
  );
}

export default App;
