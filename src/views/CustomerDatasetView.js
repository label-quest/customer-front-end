import React, { Component } from 'react'

export default class CustomerDatasetView extends Component {
    
    constructor(props) {
        super(props)
        console.log("test" + props)
    }
    
    render() {
        let customer_datasets = []
        this.props.dataset.map((item, i) => 
        {
            if (item.customer === 1) {
                    customer_datasets.push(item)     
            }
            return null;
        })
        return (
            <div>
                {customer_datasets.map((set, k) => {
                        return(
                            <ul key={k} style={{marginBottom:"20px"}}>
                                {Object.keys(set).map((key, j) => (
                                    <li key ={j} style={{listStyle: 'None'}}>{key}: {set[key]}</li> 
                                ))}
                            </ul>
                        )
                    })
                }
            </div>
        )
    }
}