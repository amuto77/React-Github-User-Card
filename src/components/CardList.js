import React, { Component } from 'react';
import Card from './Card'

const CardList = props => {
    return (
        <div className='card-list'>
            {props.followers.map(item => (
                <Card key={item.id} item={item} followers={props.followers}/>
            ))}
        </div>
    );
};
export default CardList; 