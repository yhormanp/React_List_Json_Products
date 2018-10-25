import React from "react";
import { Link } from "react-router-dom";

import { Grid, Cell } from "react-md";

const Header = () => (
  <Grid className="navBar" >
    <Cell size={12}>
      <Grid >
        <Cell size={2} />
        <Cell size={1}>
          <Link to="/">Home</Link>
        </Cell>
        <Cell size={1}>
          <Link to="/products">Products</Link>
        </Cell>
        <Cell size={1}>
          <Link to="/clients">Clients</Link>
        </Cell>
        <Cell size={1}>
          <Link to="/contact">Contact</Link>
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
