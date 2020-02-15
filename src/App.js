import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Body from './layout/Body';
import Header from './layout/Header';
import Footer from './layout/Footer';
import SignUp from './views/Auth/caregiverRegistration';
import SignUp2 from './views/Auth/careseekerRegistration';
import Login from './views/Auth/login';
import CareseekerProfile from './views/Profile/Careseeker/CareseekerProfile';
import CreateCareseekerProfile from './views/Profile/Careseeker/CreateCareseekerProfile';
import CaregiverProfile from './views/Profile/Caregiver/CaregiverProfile';
import CreateCaregiverProfile from './views/Profile/Caregiver/CreateCaregiverProfile';
import CaregiverAllProfiles from './views/Profile/CaregiverAllProfiles';
import CaregiverDetails from './components/CaregiverProfiles/CaregiverDetails';
import ForgotPassword from './views/Pages/Password/ForgotPassword';
import ResetPassword from './views/Pages/Password/ResetPassword';
import PrivateRoute from '../src/components/PrivateRoute';

//Redux
import { Provider } from 'react-redux';
import store from './store';

//Pages
import Services from './views/Pages/Services';
import Faqs from './views/Pages/Faqs';
import TermsOfUse from './views/Pages/TermsOfUse';
import Help from './views/Pages/Help';
import Privacy from './views/Pages/Privacy';
import SearchByGender from './views/SearchCaregiver/Gender';
import SearchByExperience from './views/SearchCaregiver/Experience';
import SearchByLocation from './views/SearchCaregiver/Location';
import SignupAs from './views/Pages/SignupAs';

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Router>
          <div className="App">
            <Container className="container">
              <Header />
              <Route exact path="/" component={Body} />
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup-caregiver" component={SignUp} />
                <Route exact path="/signup-careseeker" component={SignUp2} />
                <PrivateRoute
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
                  path="/search-by-gender"
                  component={SearchByGender}
                />
                <Route
                  exact
                  path="/search-by-experience"
                  component={SearchByExperience}
                />
                <Route
                  exact
                  path="/search-by-location"
                  component={SearchByLocation}
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
                <Route
                  exact
                  path="/signup-as"
                  component={SignupAs}
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
    </Provider>
  );
}

export default App;
