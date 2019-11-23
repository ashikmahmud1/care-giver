import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "../src/layout/Header/index";
import LogIn from "../src/views/Auth/caregiverLogin/index";
import LogIn2 from "../src/views/Auth/careseekerLogin/index";
import SignUp from "../src/views/Auth/caregiverRegistration/index";
import SignUp2 from "../src/views/Auth/careseekerRegistration/index";
import ProfileCareseeker from "../src/views/Profile/Careseeker/index";
import ProfileCaregiver from "../src/views/Profile/Caregiver/index";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Header />
          <Route exact path="/login-caregiver" component={LogIn} />
          <Route exact path="/login-careseeker" component={LogIn2} />
          <Route exact path="/signup-caregiver" component={SignUp} />
          <Route exact path="/signup-careseeker" component={SignUp2} />
          <Route
            exact
            path="/profile-careseeker"
            component={ProfileCareseeker}
          />
          <Route exact path="/profile-caregiver" component={ProfileCaregiver} />
        </header>
      </Router>
    </div>
  );
}

export default App;
