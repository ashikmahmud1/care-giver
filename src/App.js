import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Body from "../src/layout/Body/index";
import Header from "../src/layout/Header/index";
import Footer from "../src/layout/Footer/index";
import LogIn from "../src/views/Auth/login";
import SignUp from "../src/views/Auth/caregiverRegistration/index";
import SignUp2 from "../src/views/Auth/careseekerRegistration/index";
import ProfileCareseeker from "../src/views/Profile/Careseeker/index";
import ProfileCaregiver from "../src/views/Profile/Caregiver/index";
import CaregiverProfiles from "../src/views/CaregiverProfiles/index";
import CaregiverDetails from "../src/components/CaregiverProfiles/CaregiverDetails/index";
import Faqs from "../src/views/Pages/Faqs";
import TermsOfUse from "../src/views/Pages/TermsOfUse";
import Help from "../src/views/Pages/Help";
import Privacy from "../src/views/Pages/Privacy";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Body} />
          <Container className="container">
            <Switch>
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/signup-caregiver" component={SignUp} />
              <Route exact path="/signup-careseeker" component={SignUp2} />
              <Route
                exact
                path="/profile-careseeker"
                component={ProfileCareseeker}
              />
              <Route
                exact
                path="/profile-caregiver"
                component={ProfileCaregiver}
              />
              <Route
                exact
                path="/caregiver-profiles"
                component={CaregiverProfiles}
              />
              <Route
                exact
                path="/caregiver-profile/id"
                component={CaregiverDetails}
              />
            </Switch>
            <Route exact path="/faqs" component={Faqs} />
            <Route exact path="/terms-of-use" component={TermsOfUse} />
            <Route exact path="/help" component={Help} />
            <Route exact path="/privacy" component={Privacy} />
          </Container>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
