import { Navbar, Sidebar, Login } from "./component";
import { Homepage, VideoPage } from "./pages";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Homepage />
      </div>
    </div>
  );
}

export default App;
