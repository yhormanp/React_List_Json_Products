import React from 'react';
import { Switch, Route } from 'react-router-dom'
import  {About} from '../components/about';
import {Clients} from '../components/clients';
import Home from '../components/Home';
import { Products } from './container';

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/products" component={Products}/>
            <Route exact path="/clients" component={Clients}/>
            <Route exact path="/contact" component={About}/>
        </Switch>
    </main>
)

export default Main;