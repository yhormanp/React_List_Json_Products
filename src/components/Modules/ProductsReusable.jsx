import React, { Component } from "react";
import ProductData from "../../data/data.json";
import { Item } from "../item.js";

import {  Grid, Cell } from "react-md";

export class ProductsReusable extends Component {
  constructor(props) {
    super(props);
    const selectedCategory = this.props.category;
    

    const resultSet = ProductData;
    this.state = {
      Products: resultSet,
      currentCategory: "",
      filteredElements: resultSet
    };

    if ( selectedCategory !=="")
    {
      this.state.currentCategory= selectedCategory;
      this.searchByCatergory(this.state.currentCategory);

    }
  }

  searchByCatergory(category) {
    let resultSet = [];
    if (category === "") {
      resultSet = this.state.Products;
    } else {
      resultSet = this.state.Products.filter(data => {
        return data.categories.indexOf(category) >= 0;
      });
    }

    //this shoudl not be used directly, instead this.setState
    this.state.filteredElements = resultSet;
  }

  calculateQtyOfItems() {
    let totalItems = this.state.Products.length;
    let qtyOfFIlteredItems = this.state.filteredElements.length;

    return `Showing ${qtyOfFIlteredItems} products - Hidden ${totalItems -
      qtyOfFIlteredItems}`;
  }

  render() {
    return (
      <div>
        <Grid>
          <Cell size={10}>
         
            <div className="alignLeft">
              <b>{this.calculateQtyOfItems()}</b>
            </div>
            <div>
              {this.state.filteredElements.map(data => (
                <div key={data.id}>
                  <Item productdata={data} />
                </div>
              ))}
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
