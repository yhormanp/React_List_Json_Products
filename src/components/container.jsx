import React, { Component } from 'react';
import ProductData from  '../data/data.json'
import { Item } from './item.js';
import {
    Avatar,
    FontIcon,
    List,
    ListItem,
    Subheader,
    Divider,
    Grid, Cell,
  } from 'react-md';

export  class Host extends Component {

    constructor(){
        super();
        // const  resultSet= ProductData.filter( data => {
        //     return data.categories.indexOf("Tech") >=0;
        // })


        const resultSet=ProductData;
        this.state = {
            Products: resultSet,
            currentCategory :"",
            filteredElements: [],
        };
        // this.searchByCurrentCatergory();
    }

    searchByCatergory(category) 
    {
        const resultSet=  this.state.Products.filter( data => {
            return data.categories.indexOf(category) >=0;
        })

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
            <Grid >
                <Cell size={2}>
                    <List className="">
                        <ListItem
                            // leftAvatar={<Avatar icon={<FontIcon>folder</FontIcon>} />}
                            primaryText="All"
                        />
                    <Divider inset />
                        <ListItem
                            // leftAvatar={<Avatar icon={<FontIcon>folder</FontIcon>} />}
                            primaryText="Tech"
                        />
                        <ListItem
                            // leftAvatar={<Avatar icon={<FontIcon>folder</FontIcon>} />}
                            primaryText="Services"
                        />
                        <ListItem
                            // leftAvatar={<Avatar icon={<FontIcon>folder</FontIcon>} />}
                            primaryText="Office"
                        />
                    </List>
                </Cell>
                <Cell size={10}>
                    <button onClick={ () => this.searchByCatergory("Tech")}>Tech</button>
                    <button onClick={ () => this.searchByCatergory("Services")}>Services</button>
                    <button onClick={() => this.searchByCatergory("Office")}>Offices</button>
                    <div>
                        {this.calculateQtyOfItems()}
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
        // <div>
        //      {/* <List className="md-cell md-paper md-paper--1">
        //         <ListItem
        //             leftAvatar={<Avatar icon={<FontIcon>folder</FontIcon>} />}
        //             primaryText="All"
        //             secondaryText="Jan 9, 2014"
        //         />
        //      <Divider inset />
        //      <Subheader primaryText="Folders" />
        //         <ListItem
        //             leftAvatar={<Avatar icon={<FontIcon>folder</FontIcon>} />}
        //             primaryText="Teach"
        //             secondaryText="Jan 9, 2014"
        //         />
        //         <ListItem
        //             // leftAvatar={<Avatar icon={<FontIcon>folder</FontIcon>} />}
        //             primaryText="Services"
        //             secondaryText="Jan 17, 2014"
        //         />
        //         <ListItem
        //             leftAvatar={<Avatar icon={<FontIcon>folder</FontIcon>} />}
        //             primaryText="Office"
        //             secondaryText="Jan 28, 2014"
        //         />
        //      </List> */}
            
        //     <button onClick={ () => this.searchByCatergory("Tech")}>Tech</button>
        //     <button onClick={ () => this.searchByCatergory("Services")}>Services</button>
        //     <button onClick={() => this.searchByCatergory("Office")}>Offices</button>
        //     <div>
        //         {this.calculateQtyOfItems()}
        //     </div>
        //     <div>   
        //         {this.state.filteredElements.map(data =>
        //         <div key={data.id}>
        //             {/* <h1>{data.id}</h1> */}
        //             <Item  productdata={data}></Item>
        //         </div>
        //         )}
        //     </div>
        // </div>
        );
    }
}

