import React, { Component } from 'react';
import { Item } from './item.js';

class Tech extends Component {
    render() { 
        return (
            <di>
                Tech
                <div>   
                    {this.props.filteredData.map(data =>
                    <div key={data.id}>
                        <Item  productdata={data}></Item>
                    </div>
                    )}
                </div>
            </di>

          );
    }
}
 
export default Tech;