import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import UserLogin from './Components/UserLogin/UserLogin';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import NoMatch from './Components/NoMatch/NoMatch';

import Admin from './Components/Admin/Admin';
import AddPlace from './Components/Admin/AddPlace/AddPlace';
// import AddHotel from './Components/Admin/AddQuiz/AddQuiz';
import WatchfeedBack from './Components/Admin/WatchfeedBack/WatchfeedBack';
import Feedback from './Components/Admin/FeedBack/Feedback';
import AddQuiz from './Components/Admin/AddQuiz/AddQuiz';
// import CunsomersFeedBack from './Components/Admin/CunsomersFeedBack/CunsomersFeedBack';
// import TourMain from './Components/TourGuide/TourMain/TourMain';


export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: "",
    password: "",
    email: "",
  })

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="Travel-guru">
        <Router>
          <Switch>
         
            <Route exact path="/"> <Admin></Admin> </Route>
            <Route path="/feedback"> <Feedback></Feedback> </Route>

            <Route path="/addHotel"> <AddQuiz></AddQuiz> </Route>
            <Route path="/addPlaces"> <AddPlace></AddPlace>  </Route>
            <Route path="/customerFeedback"> <WatchfeedBack></WatchfeedBack> </Route>
            {/* <Route path="/customerFeedback"> <CunsomersFeedBack></CunsomersFeedBack> </Route> */}

            {/* <Route path="*">
              <NoMatch></NoMatch>
            </Route> */}

          </Switch>
        </Router>
      </div>
    </userContext.Provider>
  );
}

export default App;
