import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import UseMemoApp from "./useMemoApp";
import UseCallbackApp from "./useCallbackApp";
import CustomHooksApp from "./customHooksApp";

function App() {
  const User = () => {
    return <div>This is the user page</div>;
  };

  const Home = () => {
    return <div>This is the home page</div>;
  };

  return (
    <div className="App">
      {/* <Router> */}
      <header className="App-header1">
        <nav>
          
            <Link to="/">Home</Link>{" "}
    
            <Link to="/user">User</Link>{" "}
      
            <Link to="/usememo">useMemo App</Link>{" "}
  
            <Link to="/usecallback">useCallback App</Link>{" "}
            <Link to="/customhooks">custom hooks App</Link>{" "}
          
        </nav>
      </header>
      <Routes>
        <Route path="/customhooks" element={<CustomHooksApp />} />
        <Route path="/usecallback" element={<UseCallbackApp />} />
        <Route path="/usememo" element={<UseMemoApp />} />
        <Route path="/user" element={<User />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
