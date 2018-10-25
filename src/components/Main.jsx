import React from 'react';
import { Switch, Route } from 'react-router-dom'
import  {About} from '../components/about';
import {Clients} from '../components/clients';
import Home from '../components/Home';
import { Products } from './products';
// import { ProductsReusable } from './Modules/ProductsReusable';
import  ProductsMenu  from './Modules/productsMenu';
// import  Second  from './second';

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home}/>
            {/* //important not define exact if you will create sub-routes  */}
            <Route path="/products" component={Products}/>
            <Route path="/productsreusable" component={ProductsMenu}/>
            <Route path="/clients" component={Clients}/>
            <Route path="/contact" component={About}/>
        </Switch>
    </main>
)

export default Main;