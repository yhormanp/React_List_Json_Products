import React from "react";
import { List, ListItem, Divider, Grid, Cell } from "react-md";
// import { ProductsReusable }  from './ProductsReusable';
import { Link, Switch, Route } from "react-router-dom";
import { Services } from "./services";
import { Office } from "./office";
import { Tech } from "./tech";
import { All } from "./All";

const ProductsMenu = () => (
  <div>
    <Grid>
      <Cell size={2}>
        <div className="sticky">
          <h4>Categories</h4>
          <List className="">
            <ListItem>
              <Link to={`/productsreusable`}>All</Link>
            </ListItem>
            <Divider inset />
            <ListItem>
              <Link to={`/productsreusable/tech`}>Tech</Link>
            </ListItem>
            <ListItem>
              <Link to={`/productsreusable/services`}>services</Link>
            </ListItem>
            <ListItem>
              <Link to={`/productsreusable/office`}>Office</Link>
            </ListItem>
          </List>
        </div>
      </Cell>
      <Cell size={10}>
        <Switch>
          <Route exact path="/productsreusable" component={All} />
          <Route path="/productsreusable/tech" component={Tech} />
          <Route path="/productsreusable/services" component={Services} />
          <Route path="/productsreusable/office" component={Office} />
        </Switch>
      </Cell>
    </Grid>
  </div>
);

export default ProductsMenu;
