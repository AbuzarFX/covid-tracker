import React from "react";
import {Switch,Route} from "react-router-dom";

/* Styling */
import "./App.scss";

/* Pages */
import HomePage from "./pages/HomePage/homepage.component";
import TrackerPage from "./pages/TrackerPage/trackerpage.component";



/* Components */

import Footer from "./components/Footer/footer.component";



function App() {
  return (
    <>
  
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/tracker" component={TrackerPage}/>
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
