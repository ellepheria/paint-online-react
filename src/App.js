import './style/app.scss';
import Toolbar from "./components/Toolbar";
import SettingsBar from "./components/SettingsBar";
import Canvas from "./components/Canvas";

function App() {
  return (
    <div className="app">
      <Toolbar />
        <SettingsBar />
        <Canvas />
    </div>
  );
}

export default App;
