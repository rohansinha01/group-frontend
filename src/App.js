import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Index Page</h1>
      <Outlet />
    </div>
  );
}

export default App;
