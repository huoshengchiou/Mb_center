import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import React from "react";

// 頁面
import Home from "./pages/Home";
import Logout from "./pages/Logout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

// 選單
import Menu from "./components/Menu";

//偽nav
import Fakenav from "./components/Fakenav";

import Mlogcard from "./components/Mlogcard";

// 會員中心主頁
import Mbindex from "./pages/Mbindex";

function App() {
  return (
    <>
      {/* <Fakenav /> */}
      {/* <Mlogcard /> */}
      <Mbindex />
    </>
  );
}

export default App;

// <Router>
//   <>
//     <div className="container">
//       <Menu />

//       <Switch>
//         <Route path="/login">
//           <Login />
//         </Route>
//         <Route path="/logout">
//           <Logout />
//         </Route>
//         <Route path="/register">
//           <Register />
//         </Route>
//         <Route path="/profile">
//           <Profile />
//         </Route>
//         <Route exact path="/">
//           <Home />
//         </Route>
//       </Switch>
//     </div>
//   </>
// </Router>
