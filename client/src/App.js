import React from 'react'
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Settings from "./pages/Settings/Settings";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const user =true;
  return (
    <div className="App">
      <Router>
        <Topbar />
        <Routes>
          <Route exact path="/"element={<Home/>}/>
          <Route exact path="/register"element={user ? <Home/>  :  <Register/>}/>
          <Route exact path="/login"element={user ? <Home/>  :   <Login/>}/>
          <Route exact path="/write"element={user ? <Write/> :  <Register/>}/>
          <Route exact path="/settings"element={user ? <Settings/> :  <Register/>}/>
          <Route exact path="/post/:postId"element={<Single/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
