import React from 'react';

const Summary = props => {
    const servicesSummary = props.services.map(item => {
        return (
            <li key={item.type}>
                <span style={{ textTransform: "capitalize" }}>{item.type}</span>: {item.amount}
            </li>
        )
    })
    return (
        <div>
            <ul>
                {servicesSummary}
            </ul>
        </div>
    )
}


export default Summary;