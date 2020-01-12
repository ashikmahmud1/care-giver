import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Body from '../src/layout/Body/index';
import Header from '../src/layout/Header/index';
import Footer from '../src/layout/Footer/index';
import SignUp from '../src/views/Auth/caregiverRegistration/index';
import SignUp2 from '../src/views/Auth/careseekerRegistration/index';
import LogIn from '../src/views/Auth/login';
import CareseekerProfile from '../src/views/Profile/Careseeker/CareseekerProfile/index';
import CreateCareseekerProfile from '../src/views/Profile/Careseeker/CreateCareseekerProfile/index';
import CaregiverProfile from './views/Profile/Caregiver/CaregiverProfile';
import CreateCaregiverProfile from './views/Profile/Caregiver/CreateCaregiverProfile/index';
import CaregiverAllProfiles from '../src/views/Profile/CaregiverAllProfiles/index';
import CaregiverDetails from '../src/components/CaregiverProfiles/CaregiverDetails/index';
import ForgotPassword from './views/Pages/Password/ForgotPassword';
import ResetPassword from './views/Pages/Password/ResetPassword';
//Pages
import Services from './views/Pages/Services';
import Faqs from '../src/views/Pages/Faqs';
import TermsOfUse from '../src/views/Pages/TermsOfUse';
import Help from '../src/views/Pages/Help';
import Privacy from '../src/views/Pages/Privacy';

function App() {
  return (
    <React.Fragment>
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
                path="/careseeker-profile"
                component={CareseekerProfile}
              />
              <Route
                exact
                path="/create-careseeker-profile"
                component={CreateCareseekerProfile}
              />

              <Route
                exact
                path="/caregiver-profile"
                component={CaregiverProfile}
              />
              <Route
                exact
                path="/create-caregiver-profile"
                component={CreateCaregiverProfile}
              />
              <Route
                exact
                path="/caregiver-profiles"
                component={CaregiverAllProfiles}
              />
              <Route
                exact
                path="/caregiver-profile/id"
                component={CaregiverDetails}
              />
            </Switch>
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route exact path="/reset-password" component={ResetPassword} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/faqs" component={Faqs} />
            <Route exact path="/terms-of-use" component={TermsOfUse} />
            <Route exact path="/help" component={Help} />
            <Route exact path="/privacy" component={Privacy} />
          </Container>
        </div>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
