import React from 'react';
import InfoCarts from './InfoCarts';

function Carts(){

    return(
        <div>
            <InfoCarts 
            
            info = {{
                name:'Khalid Boughaba',
                skill:'Web Devlloper',
                phone:'0688459376',
                email:'khalid@solicode.ma',
                website:'khalid.com'
            }}

            />
        </div>
    );
}
export default Carts;