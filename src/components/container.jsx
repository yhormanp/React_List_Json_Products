import React, { Component } from 'react';
import ProductData from  '../data/data.json'
import { Item } from './item.js';
import {
    List,
    ListItem,
    Divider,
    Grid, Cell,
  } from 'react-md';

export  class Host extends Component {

    constructor(){
        super();

        const resultSet=ProductData;
        this.state = {
            Products: resultSet,
            currentCategory :"",
            filteredElements: [],
        };
    }

    searchByCatergory(category) 
    {
        let resultSet = [];
        if(category ===""){
            resultSet = this.state.Products;
        } else {
            resultSet=  this.state.Products.filter( data => {
                return data.categories.indexOf(category) >=0;
            })
        }
        this.setState({filteredElements : resultSet});
    }

    calculateQtyOfItems(){
        let totalItems = this.state.Products.length;
        let qtyOfFIlteredItems = this.state.filteredElements.length;
        return `Showing ${qtyOfFIlteredItems} products - Hidden ${totalItems - qtyOfFIlteredItems}`
    }


    render() {
        return (
            <div>
            <Grid >
                <Cell size={2}>
                </Cell>
                <Cell size={10}>
                </Cell>
            </Grid>
            <Grid  >
                <Cell size={2} >
                <div className="sticky">
                    <List className="">
                        <ListItem
                            primaryText="All" onClick={ () => this.searchByCatergory("")}
                        />
                    <Divider inset />
                        <ListItem
                            primaryText="Tech" onClick={ () => this.searchByCatergory("Tech")}
                        />
                        <ListItem
                            primaryText="Services" onClick={ () => this.searchByCatergory("Services")}
                        />
                        <ListItem
                            primaryText="Office" onClick={ () => this.searchByCatergory("Office")}
                        />
                    </List>
                </div>
                </Cell>
                <Cell size={10}>
                    {/* <button onClick={ () => this.searchByCatergory("Tech")}>Tech</button>
                    <button onClick={ () => this.searchByCatergory("Services")}>Services</button>
                    <button onClick={() => this.searchByCatergory("Office")}>Offices</button> */}
                    <div className="alignLeft">
                        <b>{this.calculateQtyOfItems()}</b>
                    </div>
                    <div>   
                        {this.state.filteredElements.map(data =>
                        <div key={data.id}>
                            {/* <h1>{data.id}</h1> */}
                            <Item  productdata={data}></Item>
                        </div>
                        )}
                    </div>
                </Cell>
            </Grid>

           
            </div>
        );
    }
}

