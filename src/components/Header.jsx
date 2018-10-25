import React from "react";
import { Link } from "react-router-dom";

import { Grid, Cell } from "react-md";

const Header = () => (
  <Grid className="navBar" >
    <Cell size={12}>
      <Grid >
        <Cell size={2} />
        <Cell size={1}>
          <b><Link to="/">Home</Link></b>
        </Cell>
        <Cell size={1}>
          <b><Link to="/products">Products</Link></b>
        </Cell>
        <Cell size={1}>
          <b><Link to="/clients">Clients</Link></b>
        </Cell>
        <Cell size={1}>
          <b><Link to="/contact">Contact</Link></b>
        </Cell>
        <Cell size={6} />
      </Grid>
    </Cell>
  </Grid>

  // <header>
  //     <nav>
  //         <ul>
  //             <li><Link to ="/">Home</Link></li>
  //             <li><Link to ="/products">Products</Link></li>
  //             <li><Link to ="/clients">Clients</Link></li>
  //             <li><Link to ="/contact">Contact</Link></li>
  //         </ul>
  //     </nav>
  // </header>
);

export default Header;
