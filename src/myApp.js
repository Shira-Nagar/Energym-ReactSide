import React from "react";
<<<<<<< HEAD
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import SignIn from "./components/signIn";

function MyApp() {
    return (
        <div>
            <Header />
            <Main />
            <SignIn />
            <Footer />
=======
import './index.css'
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import { Route, Switch } from "react-router-dom";
import UserPage from "./components/userPage"
import SignIn from "./components/signIn"
import SignUp from "./components/signUp"
import ControlledCarousel from './components/controlledCarousel'


function MyApp() {
    return (
        <div className="parent">
            <Switch>
                <Route path="/userPage" component={UserPage} />
                <Route path="/signIn" component={SignIn} />
                <Route path="/signUp" component={SignUp} />
                <Route path="/main" component={MyApp} />
            </Switch>

            <Header />
            <Main />
            <Footer />

            <ControlledCarousel />
>>>>>>> 36dd06b... update
        </div>
    );
}

export default MyApp;