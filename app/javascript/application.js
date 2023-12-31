// Entry point for the build script in your package.json
import React from 'react';
import ReactDOM from 'react-dom';

import { NavLink } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./redux/configureStore";
import Greeting from "./controllers/components/greeting";

const App = () => {
  return (
    <Routes>
      <Route exact path="/greet" element={<Greeting />} />
    </Routes>
  )
}

ReactDOM.render(
       <Provider store={store}>
         <BrowserRouter>
           <NavLink to="/" role="button">
              <span>Home | </span>
           </NavLink>
           <NavLink to="/greet" role="button">
              <span>Greeting!</span>
            </NavLink>
           <App />
         </BrowserRouter>
       </Provider>, document.getElementById('root'))