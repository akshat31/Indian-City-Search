import React from 'react';

const NewsItem = ({item}) =>{

    return(
        <div className="card bg-primary">
            <div className="card-body text-center">
                <p className="card-text text-white">{item.name}</p>
                <h3 className="card-text text-white">{item.state}</h3>
            </div>
        </div>
    )
}

export default NewsItem;