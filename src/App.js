import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignUp from "./pages/sign-in-and-up/SignUp";
import {auth, createUserProfileDocument} from './firebase/connect'


class App extends React.Component{
    constructor() {
        super();
        this.state = {
            currentUser:null
        }
    }
    unsubscribeFromAuth = null;
    componentDidMount() {
        this.unsubscribeFromAuth =  auth.onAuthStateChanged( async user=>{
            createUserProfileDocument(user)
            console.log(user)
        })
    }
    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        return (
            <div>
                <Header currentUser = {this.state.currentUser} />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route path='/signUp' component={SignUp} />
                </Switch>
            </div>
        );
    }


}

export default App;
