import React , { Component} from 'react' 
import ProductData from  './data/data.json'

export class FakeData extends Component {

    constructor(){
        super();
        const result = ProductData.filter( data => {
            return data.categories.indexOf("Tech") >=0;
        })
        console.log ( result);
    }

    render ()
    {
       return (
           <div> elements </div>
       )
    }

    // constructor(props){

    //     fetch('./data/data.json')
    //     // .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //     });
    // }

}