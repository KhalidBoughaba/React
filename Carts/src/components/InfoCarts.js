import React from 'react';
import classes from './Carts.module.css'
function InfoCarts(props){

    return(
        <div className={classes.info}>
            <img src='https://picsum.photos/seed/picsum/200/150' alt=''/>
            <h2>{props.info.name}</h2>
            <h3>{props.info.skill}</h3>
            <p>{`Phone: ${props.info.phone}`}</p>
            <p>{`Email: ${props.info.email}`}</p>
            <p>{`Website: ${props.info.website}`}</p>
        </div>
    );
}

export default InfoCarts;