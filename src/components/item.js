import React, { Component }  from 'react';
import { Grid, Cell } from 'react-md';

export class Item extends Component{

    SetBrandCategories (brand, categories ){
        var resultText=categories + ", " ;
        resultText += " " + brand ;
        return <span>{resultText}</span>;
    }

    SetAvatar(props){
        return (
            <img style={{width:"120px"}}
            src={props.photo}
            alt={props.name}
            ></img>
        )

    }

    render (){
        const product = this.props.productdata;
        return (
            <div className="bordered">
                <Grid >
                    <Cell size={4}>
                    <div className="title">
                        <h2><b>{product.name}</b></h2>
                        {this.SetBrandCategories(product.brand, product.categories)}
                    </div>
                    </Cell>
                    <Cell size={8}></Cell>
                </Grid>
                <Grid>
                    <Cell size={4}>
                        <div>
                            {this.SetAvatar(product)}
                        </div>
                    </Cell>
                    <Cell size={8}>
                        <div className="details">
                            {product.description}
                            <br/>
                            <br/>
                            <b>stock:</b> { product.stock}
                            <br/>
                            <b>price: $</b> { product.price}
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}