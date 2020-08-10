import React from "react"

const Card = props => {

    console.log(props)

    return (
        <div className="card">
            <div class="card-info">
                <h2>{props.item.login}</h2>
                <p><a href={props.item.html_url}>Profile</a></p>
                <p>Followers: {props.item.followers}</p>
                <p>Following: {props.item.following}</p>
            </div>
        </div>

    );
};

export default Card;