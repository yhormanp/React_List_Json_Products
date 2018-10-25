import React, {  } from 'react';
import { Link, Switch, Route } from 'react-router-dom'
 
// import { List, ListItem, Divider, Grid, Cell } from "react-md";
import  {About} from '../components/about';
import {Clients} from '../components/clients';
// import Home from '../components/Home';

const Second = () =>  (  
            <div>
                <h2> this is the second page </h2>
                <div>
                    <Link to ={`/products/tech`}>Tech</Link>
                </div>
                <Switch>
                    <Route path="/products/tech" component={About}/>
                    <Route path="/products/services" component={Clients}/>
                    <Route path="/products/office" component={About}/>
                </Switch>
            </div>

// <div>
// <Grid>
//     <Cell size={2}>
//     <div className="sticky">
//     <h4>Categories</h4>
//         <List className="">
//         <b><Link to="/products/tech">tech</Link></b>
//         <ListItem
//             primaryText="All"
//             onClick={() => this.searchByCatergory("")}
//         />
//         <Divider inset />
//         <ListItem
//             primaryText="Tech"
//             onClick={() => this.searchByCatergory("Tech")}
//         />
//         <ListItem
//             primaryText="Services"
//             onClick={() => this.searchByCatergory("Services")}
//         />
//         <ListItem
//             primaryText="Office"
//             onClick={() => this.searchByCatergory("Office")}
//         />
//         </List>
//     </div>
//     </Cell>
//     <Cell size={10}>
//             <h2> this is the second page</h2>
//             <Switch>
//                 <Route exact path="/products/tech" component={Home}/>
//                 <Route exact path="/products/services" component={Clients}/>
//                 <Route exact path="/products/office" component={About}/>
//             </Switch>
        
//     </Cell>
// </Grid>
// </div>


);

export default Second
 